function clickhere(){
    document.body.style.backgroundColor='green';
}

// system two

const makeBlue = document.getElementById('blue');
makeBlue.onclick = mouchClick;
function mouchClick(){
    document.body.style.backgroundColor='blue';
}

// three method 

const makeNavy = document.getElementById('yellow');
makeNavy.onclick =function mouchClicks(){
    document.body.style.backgroundColor='red';
}

//  four methods

const forMethods = document.getElementById('four');
forMethods.addEventListener('click', forMethod);
function forMethod(){
    document.body.style.backgroundColor='gray';
}
//  two way methods
const forMethoded = document.getElementById('five');
forMethoded.addEventListener('click', function forMethods(){
    document.body.style.backgroundColor='orange';
});

// we daily use this items
const finals = document.getElementById('final').addEventListener('click', function(){
    document.body.style.backgroundColor='tomato'})



