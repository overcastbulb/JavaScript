console.log("This is tutorial 25");
// This is the solution of tut 21 

// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
    text = document.createTextNode('This is my element.Click to edit it!');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id , class and stlye
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:4px solid black; width:154px;margin:34px;padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// Insert the element before element with id first
container.insertBefore(divElem, first);
console.log(divElem, container, first);

// Add Event Listner to the divElem
divElem.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="textarea form-control" class="textarea" id="textarea" rows="3">${html}</textarea>`;
    }
    // Listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })
});
