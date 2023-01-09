//Get DOM elements
const inputSpc = document.querySelector('.inputValue');
const addBtn = document.querySelector('.addBtn');
const deletAll = document.querySelector('.delet');
const lists = document.querySelector('.lists');


const btnArr = [];
const listArr = JSON.parse(localStorage.getItem('list')) || [];


// SAVE DATA IN LOCAL STORAGE
const addList = (todo) => {
    if(todo.length>0){
    listArr.push(
        {
            todo,
        }
    )
    localStorage.setItem('list', JSON.stringify(listArr));}
    return { todo };
}
// CREATE ELEMENT FUNCTION 
const createListElement = (todos) => {
   
    //CREATE ELEMENTS
    const newList = document.createElement('div');
    const listParag = document.createElement('p');
    const btn = document.createElement('button');


    // ADD CLASS
    newList.classList.add('newList');
    btn.classList.add('clear');


    // FILL THE CONTENT
    if(todos.todo != '' ){
    listParag.innerText = todos.todo;
    btn.innerText = '-';


    //ADD TO DOM
    newList.append(listParag, btn);
    lists.appendChild(newList)
    btnArr.push(btn);}

    //REMOVE ITEM FROM LOCGAL STORAGE
    btn.addEventListener('click', () => {
        if (btnArr.id == listArr.id) {
            listArr.splice(listArr.id, 1);
            localStorage.setItem('list', JSON.stringify(listArr));
            newList.remove();
        }
    })


//CLEAR ALL DATA FROM LOCAL STORAGE
deletAll.addEventListener('click', () => {
    newList.remove();
    localStorage.removeItem('list');
    listArr.splice(listArr);

})



};


// ADD FUNCTION TO EVERY listArr ELEMENT
listArr.forEach(createListElement);


//CLICK EVENT FOR ADD NEW LIST TO DOM
addBtn.onclick = (e) => {
    function addFunc(){
    e.preventDefault();
    const newLists = addList(inputSpc.value);
    createListElement(newLists);
    inputSpc.value = '';}
    addFunc();
  
}

//THAT'S ALL;


