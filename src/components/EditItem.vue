<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#adminEditItem'+item.itemID"><img :src="edit" alt=""></button>
        <div class="modal fade" :id="'adminEditItem'+item.itemID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editItemLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editItemLabel">Edit item</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter item ID" v-model="updateItem.itemID" required readonly>
                                <input class="form-control m-2" type="text" placeholder="Enter item name" v-model="updateItem.itemName" required>
                                <input class="form-control m-2" type="text" placeholder="Enter item image URL" v-model="updateItem.itemURL" required>
                                <input class="form-control m-2" type="text" placeholder="Enter item category" v-model="updateItem.itemCategory" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Description" v-model="updateItem.itemDesc" required>
                                <input class="form-control m-2" type="number" placeholder="Enter item amount" v-model="updateItem.itemPrice" required>
                                <input class="form-control m-2" type="number" placeholder="Enter item quantity" v-model="updateItem.itemQuantity" required>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-outline-success" @click="updateItemFx()">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['item'],
    data(){
        return{
            updateItem: {
                itemID: this.item.itemID,
                itemName: this.item.itemName,
                itemURL: this.item.itemURL,
                itemCategory: this.item.itemCategory,
                itemDesc: this.item.itemDesc,
                itemPrice: this.item.itemPrice,
                itemQuantity: this.item.itemQuantity
            },
            edit: 'https://github.com/candice-dk3/artisanAura-images/blob/main/edit.png?raw=true'
        }
    },
    methods:{
        updateItemFx() {
            this.$store.dispatch('updateItem', this.updateItem);
        },
    }
}
</script>
<style scoped>
    .btn {
    color: white;
    background-color: #ffc400;
    margin-top: 40px;
    border: none;
    /* margin-left: 200px; */
}

button.btn:hover {
    background-color: #e2b65f;
    color: white;
    border: none;
}
</style>