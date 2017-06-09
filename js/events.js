//define functions here

function getIt () {
    $('p').on('click', function () {
        alert('Hey!')
    })
}

function frameIt () {
    $('img').load(function () {
        $('img').addClass('tasty')
    })
}

function pressIt () {
    $('#typing').on('keydown', function (e) {
        if (e.which == "71") {
        alert('G have been pressed')
    }
    })
}

function submitIt () {
    $('form').on('submit', function () {
        alert('Your form is going to be submitted now.')
    })
}

$(document).ready(function(){
// call functions here

    getIt()
    frameIt()
    pressIt()
    submitIt()

});
