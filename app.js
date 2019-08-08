console.log("js is working")

// ------Globale Variables ---------//
var container = document.getElementById('container');
var outputAnswer = document.getElementById('number-output');
var typedNum = document.getElementById('number-input');
var addition = document.getElementById('addition');
var subtraction = document.getElementById('subtraction');

outputAnswer.textContent = 0;

var total;


// var number = 
addition.addEventListener('click', function(event) {
    event.preventDefault();
 
    var input = parseInt(typedNum.value);
    var addThis = parseInt(outputAnswer.textContent);

    total = input + addThis
    outputAnswer.textContent = total;
    console.log(total);
    if ( total < 0) {
         console.log("it must be a negative number")
        outputAnswer.style.color = 'red'
    }
    else {
        outputAnswer.style.color = 'black'
    }
 

});

subtraction.addEventListener('click', function(event) {
    event.preventDefault();
 
    var input = Number(typedNum.value);
    var subtractThis = Number(outputAnswer.textContent);

    total = subtractThis - input
    outputAnswer.textContent = total;
    console.log(total);
    if ( total < 0) {
    
        outputAnswer.style.color = 'red'
    }
    else {
        outputAnswer.style.color = 'black'
    }


});
