// ==============creat counter
let counterSec=document.querySelector(".counters");

let nums=document.querySelectorAll(".counters .counter h3");

let started=false;

window.addEventListener("scroll",function(){

    if(window.scrollY >=counterSec.offsetTop - 300){

        if(!started){

            nums.forEach((num)=>startCount(num));

        }

        started=true;
    }
});

function startCount(el){

    let goal =el.dataset.goal;

    let count=setInterval(()=> {

        el.textContent++;

        if(el.textContent == goal){

            clearInterval(count);
        }

    }, 2000 / goal)
};


// changing the background color
let engangeSection=document.querySelector(".engage-us");

let h3=document.querySelector(".engage-us h3");

let h4=document.querySelectorAll(".engage-us .text h4");

window.addEventListener("scroll",function(){

    if(window.scrollY >= engangeSection.offsetTop-200){

        engangeSection.classList.add("change-bg");

        h3.style.color="white";

        h4.forEach(e=>e.style.color="white");

    }
    else
    {

        engangeSection.classList.remove("change-bg");

        h3.style.color="#000";

        h4.forEach(e=>e.style.color="#000");

    }

    // changing the background after the section
    if(this.window.scrollY >= engangeSection.nextElementSibling.offsetTop-200){

        engangeSection.classList.remove("change-bg");

        h3.style.color="#000";

        h4.forEach(e=>e.style.color="#000");

    }
});