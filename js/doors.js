window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // if(window.pageYOffset > 50 && window.pageYOffset < 667) {
    //     document.querySelector(".transparent").style.backgroundColor = "white";
    //     document.querySelector(".transparent").style.paddingTop = "1.2em";
    //     document.querySelector(".transparent").style.paddingBottom = "1.2em";
    //     document.querySelectorAll(".container a").forEach(link => link.style.color = "black");
    // } else {
    //     document.querySelector(".transparent").style.backgroundColor = "transparent";
    //     document.querySelector(".transparent").style.paddingTop = "2em";
    //     document.querySelector(".transparent").style.paddingBottom = "2em";
    //     document.querySelectorAll(".container a").forEach(link => link.style.color = "white");
    // }

    // if(window.pageYOffset > 667) {
    //     document.querySelector(".transparent").style.backgroundColor = "white";
    //     document.querySelector(".transparent").style.paddingTop = "1.2em";
    //     document.querySelector(".transparent").style.paddingBottom = "1.2em";
    //     document.querySelectorAll(".container a").forEach(link => link.style.color = "black");
    // }
    if(window.pageYOffset > 600 && window.pageYOffset < 1000) {

    }
    // var count = 1;
    // document.querySelectorAll(".door .left p").forEach((left) => {
    //     left.innerHTML = "left-"+(count++);
    // });
    // count = 1;
    // document.querySelectorAll(".door .right p").forEach((left) => {
    //     left.innerHTML = "right-"+(count++);
    // });
    document.querySelector(".Top-content").style.opacity = window.pageYOffset === 0?1:1-((window.pageYOffset-30)/300);
}

var viewport = document.querySelector(".product .viewport");


viewport.addEventListener("scroll", ()=> {
    var clientWid = viewport.clientWidth;
    var scrollLef = viewport.scrollLeft;
    var scrollWid = viewport.scrollWidth;
    var count = (scrollWid/265);
    var currentIndex = 1;
    console.log(count | 0);
    if() {
              
    }
});

