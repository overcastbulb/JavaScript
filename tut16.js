console.log("This is tut 16");
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);
//Add a class name to the li element
element.className = 'op';
element.id = 'createdLi';
element.setAttribute('title','mytitle');
// element.innerText = "Hello this is created by Aniruddha";
// element.innerHTML = "<b>Hello this is created by Aniruddha</b>";

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let ak = document.getElementById('ak');
ak.replaceChild(element,document.getElementById("low"));
ak.removeChild(document.getElementById("lui"));
let pr = elem2.hasAttribute("class");
elem2.removeAttribute('id');
elem2.setAttribute('title','myelem2title');
console.log(elem2,pr)