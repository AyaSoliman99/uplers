// showing options
let lis = document.querySelectorAll(".form-content .hiring-options li");
let boxs = document.querySelectorAll(".form-content .boxs .box");

boxs.forEach(box => { box.style.display = "none" });
document.querySelector(lis[0].dataset.id).style.display = "block";


lis.forEach(li => {

    li.addEventListener("click", function () {
        
        lis.forEach(li => removeClass(li,"active-option"));

        li.classList.add("active-option");
        
        boxs.forEach(box => { box.style.display = "none" });

        displayOptions(li);
    })
});



// working with sub opitons in Hiring a talent part
let subLis = document.querySelectorAll(".form-content .sub-options li");

let subOptions = document.querySelectorAll(".form-content .boxs .box .sub-opt");

subOptions.forEach(opt => { opt.style.display = "none" });

document.querySelector(subLis[1].dataset.id).style.display = "block";

subLis.forEach(li => {

        li.addEventListener("click", function () {

        subOptions.forEach(opt => { opt.style.display = "none" });

            displayOptions(li);
    })
});


// working with labels
let divs = document.querySelectorAll(".checkbox-form div.content .developer");

let typesOfDivs = document.querySelectorAll(".checkbox-form div .subform");

typesOfDivs.forEach(type => { type.style.display = "none" });

divs.forEach((div) => {
    div.addEventListener("click", function () {

        displayOptions(div);

    })
});

/*
                        //////////////////////////////////////////////////
                        ///////////////The Reusable Functions/////////////
                        //////////////////////////////////////////////////
*/ 

// function for removing classes
function removeClass(el , className) {
    el.classList.remove(className);
}

// function for displaying options
function displayOptions(e) {

    if (document.querySelector(e.dataset.id).style.display == "none") {

        document.querySelector(e.dataset.id).style.display = "block";

    } else {

        document.querySelector(e.dataset.id).style.display = "none";
    }
} 