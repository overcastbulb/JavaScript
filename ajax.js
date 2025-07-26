console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetchBtn");

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'ajax.txt', true);

    // Use thos for Post Request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress (optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }


    xhr.onreadystatechange = function () {
        console.log('Ready state is ', xhr.readyState);
    }
    
    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
        else {
            console.log("some error occured")
        }
    }

    // Send the request
    params = `{"name":"test","salary":"123","age":"23"};`
    xhr.send(params);
    console.log("We are done!");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);


function popHandler() {
    console.log("You have clicked the popHandler");

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET','ajax.txt',true );


    // What to do when response is ready
    xhr.onload = function () {
            if (this.status === 200) {

                let obj = JSON.parse(this.responseText)
                console.log(obj);
                let list = document.getElementById('list');
                str = "";
                for (key in obj)
                {
                    str += `<li> ${obj[employee_name]} </li>`;
                }
                list.innerHTML = str;
            }
            else {
                console.log("some error occured")
            }
        }

    // Send the request
    xhr.send();
    console.log("We are done fetching employees");
}

