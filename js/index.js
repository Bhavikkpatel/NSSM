window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(window.pageYOffset > 50 && window.pageYOffset < 667) {
        document.querySelector(".transparent").style.backgroundColor = "white";
        document.querySelector(".transparent").style.paddingTop = "1.2em";
        document.querySelector(".transparent").style.paddingBottom = "1.2em";
        document.querySelectorAll(".container a").forEach(link => link.style.color = "black");
    } else {
        document.querySelector(".transparent").style.backgroundColor = "transparent";
        document.querySelector(".transparent").style.paddingTop = "2em";
        document.querySelector(".transparent").style.paddingBottom = "2em";
        document.querySelectorAll(".container a").forEach(link => link.style.color = "white");
    }

    if(window.pageYOffset > 667) {
        document.querySelector(".transparent").style.backgroundColor = "white";
        document.querySelector(".transparent").style.paddingTop = "1.2em";
        document.querySelector(".transparent").style.paddingBottom = "1.2em";
        document.querySelectorAll(".container a").forEach(link => link.style.color = "black");
    }

    // opacity reduce of company name
    // document.querySelector(".Top-content").style.opacity = window.pageYOffset === 0?1:1-((window.pageYOffset-30)/300);
    
    //scroll by next mark
    // if(window.pageYOffset > 450 && window.pageYOffset < 500) {
    //     setTimeout(function() {
    //     window.scrollBy({
    //         top: 200,
    //         behavior: 'smooth'
    //         });
    //     }, 50);
    //     console.log(window.pageYOffset);
    // }
}


