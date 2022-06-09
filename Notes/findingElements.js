//You can find elements by their ID and tag name
//example of finding element by ID
let button= document.getElementById('my-button');
console.log(button);

//example of finding element by tag name
let buttonsByTag= document.getElementsByTagName('button');
console.log(buttonsByTag);

//grabbing elements by class name
let buttonsByClassName= document.getElementsByClassName('my-class');
console.log(buttonsByClassName)


//Finding elements by CSS Selectors:-Grabbing only the buttons with defined class
let buttonsByCSSSelector=document.querySelectorAll('button.my-class');
console.log(buttonsByCSSSelector);


// INTERACTING WITH THE DOM INTERACTING WITH THE DOM INTERACTING WITH THE DOM

//chnaging the value of an elemtn
document.getElementById('content').innerHTML= 'Goodbye';

//assigning the button and content as own variable to change content
let changeValue =document.getElementById('btn');
let content= document.getElementById('content');
//adding the event listener
changeValue.addEventListener('click', () => {
    if (content.innerHTML == "Goodbye"){
        content.innerHTML = 'Hello';
    } else{
        content.innerHTML ='Goodbye'
    }
});

//How to remove elemnts- Remove the child from the parent. use child to find parent the specefic item removal goes a step further
/* 
document.getElementById('remove').addEventListener('click', ()=>{
    content.parentNode.removeChild(content)
}); 
*/

//How to add elements to the DOM
//remember to add an icremental id to each added element

let id=0;

document.getElementById('add').addEventListener('click', () =>{
    var parent= document.getElementById('paragraphs');
    var newElement= document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id', id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = "";
});

//delete specefic items we have added (min 12- interacting with DOM Video)
document.getElementById('remove').addEventListener('click', ()=>{
    let idToRemove= document.getElementById('remove-id').value;
    let elementToRemove= document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value= "";
});




