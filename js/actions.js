function doorselected() {
    // var radiogroup = document.querySelector('.product .viewport .card .doorR');
    // console.log(radiogroup.value);
    var radio = document.getElementsByName('door');
    radio.forEach(function (value) {
        var divname = value.value;
        var card = document.getElementsByName('details');
        if(value.checked == true) {
            console.log(card[0]);
            card[0].classList.add("expandedcard");
        }
    });
}

function closeLay() {
    var card = document.getElementsByName('details')[0].classList.remove("expandedcard");
}