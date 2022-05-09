
// jquery blugins
$(document).ready(function(){
// change background color on scroll
    let header = $("header");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 10) {
            if (header.hasClass("change-header-bg")) {
                return;
            }
            header.addClass("change-header-bg");
        } else {
            header.removeClass("change-header-bg");
    }
})


// scroll to top button
let scrollToTop=$(".back-to-top");

$(window).on("scroll",function(){

    if($(window).scrollTop() >= 800){

        if(scrollToTop.is(":hidden")){

            scrollToTop.fadeIn(500);

        }

    }
    else{

    scrollToTop.fadeOut(500);

    }
});
scrollToTop.on("click",function() {

    $("html, body").animate({

    scrollTop:0

    },100);
});



    // change send-massege content 
    let sendMessage=$(".send-message");

    let sendMessageContent =sendMessage.html();

    sendMessage.on("click",function(){

        $(this).toggleClass("border");

        if($(this).html()==sendMessageContent){

            sendMessage.html("X");

            $(".send-message-popup").css("transform","scale(1)");

        }
        else{

            sendMessage.html(sendMessageContent);

            $(".send-message-popup").css("transform","scale(0)");
            
        }
    });


    // work options menu
    $(".want-options").on("click",function(){
        $(this).find("ul").slideToggle(500);
    });

    $(".want-options ul li").on("click",function(){
        let text=$(this).text() + "<i class=\"fa fa-chevron-down\"></i>";

        $(".want-options p").html(text);
    })



    // more services click
    let moreInfo=$(".more-info-click");

    let chevronIcon=moreInfo.find("i");

    let deg=0;

    moreInfo.on("click",function(){

        moreInfo.parent().parent().next().slideToggle();
        
        if(deg==0){

            deg=-180;

            chevronIcon.css("transform",`rotate(${deg}deg)`);

        }
        else{

            deg=0;

            chevronIcon.css("transform",`rotate(${deg}deg)`);

        }

    });


let dg=0;

    $(".tap-click").on("click",function(){

        if($(window).innerWidth() < 768){

            $(".tap-click").next().slideUp();

            $(this).next().slideToggle();

            }

        if(dg==0){

            dg=-180;

            $(".tap-click i").css("transform",`rotate(0deg)`);

            $(this).find("i").css("transform",`rotate(${dg}deg)`);

            dg=0;
        }
    })
});






