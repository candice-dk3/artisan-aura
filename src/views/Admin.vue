<template>
    <section class="inner-admin">
        <button  type="button" class="btn" data-bs-toggle="modal"
            data-bs-target="#adminAddItem">Add New Item</button>
            <div class="admin-page-table">
                <table class="table table-responsive table-bordered">
                    <thead class="table-group-divider">
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="table-products">
                        <tr v-for="item in $store.state.items" :key="item.itemID">
                        <td>{{ item.itemID }}</td>
                        <td>{{ item.itemName }}</td>
                        <td><img :src="item.itemURL" alt="item Image" class="img-fluid" width="auto" height="auto"/></td>
                        <td>{{ item.itemCategory }}</td>
                        <td>{{ item.itemDesc }}</td>
                        <td>{{ item.itemPrice }}</td>
                        <td>{{ item.itemQuantity }}</td>
                        <td>
                            <edit-item :item="item"/>
                            <button @click="deleteItem(item)" class="btn btn-outline-danger">Delete Product</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button  type="button" class="btn" data-bs-toggle="modal" data-bs-target="#adminAddUser">Add New User</button>
            <div class="user-page-table">
                <table class="table table-responsive table-bordered">
                    <thead class="table-group-divider">
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Profile</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="table-products">
                        <tr v-for="user in $store.state.users" :key="user.userID">
                        <td>{{ user.userID }}</td>
                        <td>{{ user.firstName }} {{ user.lastName }}</td> 
                        <td>{{ user.Gender }}</td> 
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.userProfile }}</td>
                        <td>{{ user.emailAdd }}</td> 
                        <td>{{ user.userPass }}</td> 
                            <edit-user :user="user"/>
                            <button @click="deleteUser(user)" class="btn btn-outline-danger">Delete User</button>
                        </tr>
                    </tbody>
                </table>
            </div>

        <!-- Add New Item Modal -->
        <div class="modal fade" id="adminAddItem" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="addItemLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addItemLabel">Add a New Item</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter Item name" v-model="newItem.itemName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter Item quantity" v-model="newItem.itemQuantity" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Item price" v-model="newItem.itemPrice" required>
                                 <input class="form-control m-2" type="text" placeholder="Enter Item category" v-model="newItem.itemCategory" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Item image URL" v-model="newItem.itemURL">
                                <input class="form-control m-2" type="text" placeholder="Enter Item description" v-model="newItem.itemDesc" required>
                            </div>
                            <div class="modal-footer">
                                <button type="close" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="addItem()">Save Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add New User Modal -->
        <div class="modal fade" id="adminAddUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="addUserLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addUserLabel">Add a New User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container-fluid">
                                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="newUser.firstName" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Surname" v-model="newUser.lastName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="newUser.userAge" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Gender" v-model="newUser.Gender" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Role" v-model="newUser.userRole" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Profile" v-model="newUser.userProfile" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Email" v-model="newUser.emailAdd" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Password" v-model="newUser.userPass" required>
                            </div>
                            <div class="modal-footer">
                                <button type="close" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="insertUser()">Add User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </section>
</template>

<script>
import EditItem from '@/components/EditItem.vue';
import EditUser from '@/components/EditUser.vue';

export default {
    data() {
        return {
            newItem: {
                itemName: '',
                itemQuantity: '',
                itemPrice: '',
                itemCategory: '',
                itemURL: '',
                itemDesc: '',
            },
            newUser: {
                firstName: '',
                lastName: '',
                userAge: '',
                Gender: '',
                userRole: '',
                emailAdd: '',
                userProfile: '',
                userPass: ''
            }
        };
    },
    components:{
        EditItem,
        EditUser
    },
    methods: {
        getItems() {
            this.$store.dispatch('getItems');
        },
        
        getUsers() {
            this.$store.dispatch('getUsers');
        },
        addItem() {
            this.$store.dispatch('addItem', this.newItem);
            
        },
        insertUser() {
            this.$store.dispatch('insertUser', this.newUser);
        },
        deleteUser(user) {
            this.$store.dispatch('deleteUser', user.userID)
        },
        deleteItem(item) {
            this.$store.dispatch('deleteItem', item.itemID)
        }
    },
    computed: {
        item(){
            return this.$store.state.item
        },
        user(){
            return this.$store.state.user
        }
    },
    mounted() {
        this.getItems(),
        this.getUsers()
    }
}
</script>

<style scoped>
.inner-admin {
    margin-top: 3.9rem;
}

.table-responsive {
    width: 100%;
    background-color: transparent;
}

.table {
    width: 80rem;
    margin-top: 1rem;
}

.table th,
.table td {
    text-align: left;
    justify-content: center;
    align-content: center;
    background-color: transparent;
    border: none;
}

.admin-page-table, .user-page-table {
    width: auto;
    display: grid;
    justify-content: center;
}

.quantity-buttons {
    display: flex;
    align-items: center;
}

.total-amount {
    text-align: end;
}

.btn {
    color: white;
    background-color: #C2922F;
    margin-top: 40px;
    border: none;
    /* margin-left: 200px; */
}

button.btn:hover {
    background-color: #e2b65f;
    color: white;
    border: none;
}

.products-sec {
    display: grid;
    justify-content: space-around;
}

.img-fluid {
    max-width: 100px;
    height: auto;
}

@media screen and (max-width: 300px) {
    .inner-admin {
        margin-top: 3.5rem;
    /* background-image: url(https://github.com/demilee06/Node-Images/blob/main/5616868-hd_2048_1080_25fps-ezgif.com-optimize.gif?raw=true); */
    background-size: contain
}
.admin-page-table, .user-page-table {
    width: 100%;
    overflow-x: auto;
  }
  .table {
    width: 100%;
    display: block;

  }
  .table th, .table td {
    padding: 5px;
    font-size: 12px;
    display: block;
    width: 100%;
  }
  .img-fluid {
    max-width: 50px;
    height: auto;
  }

}
</style>