// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')



// edit option
let editElements;
let editFlag = false; 
let editId = '';

const addItem = (e) => {
    e.preventDefault(); 
    const value = grocery.value
}

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

