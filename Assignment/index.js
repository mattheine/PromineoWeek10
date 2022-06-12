let id= 0;

//create a new row to add to the table
document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table= document.getElementById('list');
    let row= table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('name').value;
    row.insertCell(1).innerHTML = document.getElementById('age').value;
    row.insertCell(2).innerHTML = document.getElementById('position').value;
    row.insertCell(3).innerHTML = document.getElementById('location').value;
    row.insertCell(4).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() +1}-${createdDate.getDate()}`;
    let actions= row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('location').value = "";
    document.getElementById('position').value = "";
});
//creates button - binds method to delete - then returns button to append child to actions
function createDeleteButton(id){
    let btn= document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id= id;
    btn.innerHTML= 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}