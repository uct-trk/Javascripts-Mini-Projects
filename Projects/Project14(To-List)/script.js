// select items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// Event Listeners
// submit form
form.addEventListener("submit", addItem);

// clear items
clearBtn.addEventListener("click", clearItems)

// load items
window.addEventListener("DOMContentLoaded", setupItems);

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        createListItem(id, value);
        // display alert
        displayAlert("item added to the list", "success")
        // show container
        container.classList.add("show-container")
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    }
    else if (value && editFlag) {
        console.log("editing");
        editElement.innerHTML = value;
        displayAlert("value changed", "success");
        // edit locale storage
        editLocalStorage(editID, value);
        setBackToDefault();
    }
    else {
        displayAlert("please enter value", "danger");
    }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1500)
}

// clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// delete function
function deleteItem(e) {
    console.log("deleted")
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}

// edit item
function editItem(e) {
    console.log("edit items");
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}


// set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = '';
    submitBtn.textContent = "submit";
}

// Local Storage
function addToLocalStorage(id, value) {
    console.log("added to local storage");
    const grocery = {id, value};
    console.log(grocery);
    let items = getLocalStorage();
    console.log(items);
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items))
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter((item) => {
        if(item.id !== id){
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
    let items = getLocalStorage()
    items = items.map((item) => {
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage(){
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

/* localStorage.setItem("orange", JSON.stringify(["item","item2"]))
const oranges =JSON.parse(localStorage.getItem("orange"));
console.log(oranges); */

// setup items
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach((item) => {
            createListItem(item.id, item.value)
        })
        container.classList.add("show-container")
    }
}

function createListItem(id, value){
    const element = document.createElement("article");
    console.log("added item to do list");
    // add id
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    // add class
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
    // delete item
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);

    // edit item
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);


    // append child
    list.appendChild(element);
}