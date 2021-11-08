import wood from'./door.js';

const door = new wood();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(window.pageYOffset > 600 && window.pageYOffset < 1000) {

    }
    document.querySelector(".Top-content").style.opacity = window.pageYOffset === 0?1:1-((window.pageYOffset-30)/300);
}

var list = door.getlist;
var phone = false;
var columncount = 4;
window.onload = function() {
    console.log(window.innerWidth);
    if(window.innerWidth < 500) {
        columncount = 2;
        phone = true;
    }
    console.log(phone);
    var doordiv = document.querySelector(".gallery");
    doordiv.innerHTML = "";
    for(var i=0;i<list.length;i=i+(list.length/columncount)) {
        console.log(list.length/columncount);
        var gallerycolumn = document.createElement('div');
        gallerycolumn.classList.add("gallery__column");
        for(var j=i;j<i+(list.length/columncount) && j<list.length;j++) {
            gallerycolumn.innerHTML += `
            <a href="#" target="_blank" class="gallery__link">
            <figure class="gallery__thumb">
                <img src="./Pictures/${j+1}.jpg" alt="Portrait by Jessica Felicio" class="gallery__image">
                <figcaption class="gallery__caption">door #${j+1}</figcaption>
            </figure>
            </a>`;
        }
        doordiv.appendChild(gallerycolumn);
    }
}
