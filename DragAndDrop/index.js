console.log('This is Drag And Drop Tutorial 64');

const imgBox = document.querySelector('.imgBox');
const whiteBox = document.getElementsByClassName('whitebox');

// Event Listeners for draggable element imgBox

imgBox.addEventListener('dragstart', (e) => {
    console.log('Drag Start has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    console.log("Drag End has been triggered");
    e.target.className = 'imgBox';
});

for (whitebox of whiteBox) {
    whitebox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Dragover method is triggered");
    });

    whitebox.addEventListener('dragenter', (e) => {
        console.log("Dragenter method is triggered");
        e.target.className += ' dashed';
    });

    whitebox.addEventListener('dragleave', (e) => {
        console.log("Dragleave method is triggered");
        e.target.className = 'whitebox';
    });

    whitebox.addEventListener('drop', (e) => {
        console.log("Drop method is triggered");
        e.target.append(imgBox);
    });

}