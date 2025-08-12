console.log("This is tutorial 39.js");

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function : Your Promise has been resolved");
                resolve();
            }
            else {
                console.log("Function : Your Promise has not been resolved");
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}
func1().then(function () {
    console.log("Harry : Thanks for resolving");
}).catch(function () {
    console.log("Harry : Very bad bro. Reason: " + error);
})