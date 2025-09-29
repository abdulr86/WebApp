

$(document).ready(function () {

    $("*").css({"padding": "0","margin": "0"});
    // first page:-
    $("#first-page-in-main").css({"height":"250px","width":"100%","margin-top":"100px","display":"flex"});

    $("#index-img").css({"heihgt":"100%","width":"30%","margin-left":"50px","border-radius":"10px","box-shadow":"0px 0px 5px black"});

    $("#first-div-in-content").css({"height":"190px","margin-left":"150px","margin-top":"30px","width":"50%","border-radius":"10px","box-shadow":"0px 0px 10px black","background-color":"rgb(1,133,139)"});

    $("#first-div-information").css({"margin-top":"30px","margin-left":"20px","margin-right":"20px","height":"130px","color":"white","font-family":"system-ui","font-weight":"bold","font-size":"20px","font-weight":"bold","text-align":"center"});

    $("#main-container-in-first").css({"margin-top":"30px","height":"280px","display":"flex"});

    $("#main-in-img1").css({"height":"200px","width":"250px","margin-left":"18%","margin-top":"30px","border-radius":"10px","box-shadow":"0px 0px 10px black"});

    $("#main-in-img1 img").css({"height":"100%","width":"100%","border-radius":"8px"});

    $("#main-in-img2").css({
        "height":"200px","margin-left":"8%","margin-top":"30px","border-radius":"10px","box-shadow":"0px 0px 10px black","width":"250px"
    });

    $("#main-in-img2 img").css({
        "height":"100%","width":"100%","border-radius":"9px"
    });

    $("#main-in-img3").css({
        "height":"200px","width":"250px","margin-left":"8%","border-radius":"10px","box-shadow":"0px 0px 10px black","margin-top":"30px"
    });

    $("#main-in-img3 img").css({"height":"100%","width":"100%","border-radius":"9px"});

    $("#Content-in-h1-for-div1").css({"height":"70px"});

    $("#h1-in-content").css({"text-align":"center","font-family":"system-ui","color":"rgb(72,64,64)","font-weight":"bold"});

    $("#sourcing-easy-instructions-container").css({
        "height":"600px","margin-top":"30px","display":"flex"
    })

    $("#sourcing-easy-instructions").css({
        "height":"500px","width":"600px","margin-left":"50px","font-family":"system-ui","color":"rgb(72,64,64)","margin-top":"40px"
    });
    $("#sourcing-easy-instructions h2").css({"font-weight":"bold",});
    

    $("#instructions-li1").css({
        "list-style-type":"none","margin-left":"30px","margin-top":"20px"
    });

    $(".instructions-span").css({
        "color":"green"
    });

    $("#instructions-li2").css({
        "list-style-type":"none","margin-top":"20px","margin-left":"30px","font-weight":"bold"
    });

    $("#source-deals-li1").css({
        "margin-left":"38px","margin-top":"10px","font-weight":"500","list-style-type":"none"
    });

    $(".source-list").css({
        "color":"#335480ff",
    });

    $("#instructions-li3").css({
        "list-style-type":"none"
    });

    $(".instructions-span1").css({
        "color":"green","margin-left":"30px"
    });

    $(".sourcing-span1-in-span").css({
        "color":"#335480ff" ,"font-weight":"500"   
    });

    $("#source-new-deal-for").css({
        "height":"500px","margin-left":"8%","width":"600px","margin-top":"40px"
    });

    $("#imges-link-div").css({
         "display":"flex","padding":"20px 5px",
    });

    $("#button-in-source-deal").css({
        "display":"block","margin-left":"6%","height":"40px","width":"150px","border-radius":"50px","color":"white","font-family":"system-ui","background-color":"#083a81ff","border":"1px solid white","font-weight":"bold"
    });

    $("#button1-in-source-deal").css({
        "display":"block","margin-left":"6%","height":"40px","width":"150px","border-radius":"50px","color":"white","font-family":"system-ui","background-color":"#083a81ff","border":"1px solid white","font-weight":"bold"
    });

    $("#button2-in-source-deal").css({
        "display":"block","margin-left":"6%","height":"40px","width":"150px","border-radius":"50px","color":"white","font-family":"system-ui","background-color":"#083a81ff","border":"1px solid white","font-weight":"bold"
    });

    $("#source-img").css({
         "height":"420px"   
    
    })
    $("#source-img img").css({
        "height":"100%","width":"100%"
    });
    $("#button1-in-source-deal").css({"background-color":"white","color":"black","box-shadow":"0px 0px 8px black"});

    $("#button2-in-source-deal").css({"background-color":"white","color":"black","box-shadow":"0px 0px 8px black"});


    $("#button-in-source-deal").click(function(){
        $("#button-in-source-deal").css({"background-color":"#083a81ff","color":"white","border":"0px solid black"})
        $("#button1-in-source-deal").css({"background-color":"white","color":"black","box-shadow":"0px 0px 8px black"});

        $("#button2-in-source-deal").css({"background-color":"white","color":"black","box-shadow":"0px 0px 8px black"});

            $("#source1-img1").attr("src","deal-source.svg")
    });
    
    $("#button1-in-source-deal").click(function(){
        $("#button-in-source-deal").css({"background-color":"white","color":"black","box-shadow":"0px 0px 8px black"});
        $("#button1-in-source-deal").css({"background-color":"#083a81ff","color":"white","border":"0px solid black"});
        $("#button2-in-source-deal").css({"background-color":"white","color":"black","box-shadow":"0px 0px 8px black"});

            $("#source1-img1").attr("src","sector-img2.png");
    });

    $("#button2-in-source-deal").click(function(){
        $("#button-in-source-deal").css({"background-color":"white","color":"black","box-shadow":"0px 0px 8px black"});
        $("#button1-in-source-deal").css({"background-color":"white","color":"black","box-shadow":"0px 0px 8px black"});
        $("#button2-in-source-deal").css({"background-color":"#083a81ff","color":"white","border":"0px solid black"});

        $("#source1-img1").attr("src","signals.png");

   });

//    media quary in jqaury define
    






  

    


    





    // home page 
    

    $("#navbar").css({"height": "70px","display": "flex","position": "fixed","top": "0","width": "100%","z-index": "1","background-color": "white"});

    

    $("#header1").css({"height": "30px","width": "120px","margin-left": "50px","margin-top": "15px"});

    $("#ul1").css({"margin-left": "30px","margin-top": "21px","font-family": "system-ui","list-style-type": "none","display": "flex"});

    $("#ven").css({"color": "black","text-decoration": "none","margin-top": "0px"});

    $("#offer").css({"color": "black","text-decoration": "none","margin-left": "20px"});

    $("#company").css({"color": "black","text-decoration": "none","margin-left": "20px"});

    $("#pricing").css({ "color": "black","text-decoration": "none","margin-left": "20px"});

    $("#main").css({"height": "350px","width": "100%","background-color": "rgb(66,136,205)","margin-top": "60px"});

    $("#h1").css({"padding-left": "100px","font-family": "system-ui","color": "white","padding-top": "20px"});

    $("#h2").css({"padding-left": "100px","font-family": "system-ui","color": "white","padding-top": "20px"
});

    $("#h21").css({"padding-left": "100px","font-family": "system-ui","color": "white","padding-top":"20px"
    });

    $("#h22").css({"padding-left": "100px","font-family": "system-ui","color": "white","padding-top": "20px"
    });

    $("#a1").css({"text-decoration": "none","color": "white","display": "block","height": "28px","width": "170px", "text-align": "center", "background-color": "orange", "margin-left": "100px","margin-top": "20px","border-radius": "5px","font-family": "system-ui","font-weight": "bold","padding": "14px" });

    $("#content-in-left-box").css({"height": "350px","margin-top": "0","display": "flex"});

    $("#content-in-box1").css({"height": "260px","width": "700px","border-radius": "10px","box-shadow":"0px 0px 9px black","margin-top": "30px","margin-left": "100px"});

    $("#text1").css({"font-family": "system-ui","text-align": "justify","padding": "30px"});

    $("#content-in-box2").css({"display": "flex","padding": "20px"});

    $("#img1").css({"padding": "4px"});

    $("#p1").css({"padding-left": "20px","padding-top": "20px","font-family": "system-ui"});

    $("#img2").css({"padding": "7px"});

    $("#content-in-right-box").css({"width": "620px","margin-left": "10px","flex-direction": "column","padding-left": "70px"});

    $("#content-in-right-box-img1").css({"margin": "30px","border": "2px solid white","border-radius": "10px","box-shadow": "0px 0px 9px black"});

    $("#content-in-right-box-img2").css({"margin-bottom": "30px","margin-left": "30px","border": "2px solid white","border-radius": "10px","box-shadow": "0px 0px 9px black"});

    $("#content-in-right-box-img3").css({"margin-left": "50px","margin-bottom": "33px","border-radius": "10px","box-shadow": "0px 0px 9px black"});

    $("#content-in-right-box-img4").css({"margin-left": "30px","border": "2px solid white",
    "box-shadow": "0px 0px 9px black","border-radius": "10px" });

    $("#content-in-right-box-img5").css({"margin-left": "60px","border": "2px solid white",
    "border-radius": "10px","box-shadow": "0px 0px 9px black"});

    $("#content-in-right-box-img6").css({"margin-left": "55px","border-radius": "10px","box-shadow": "0px 0px 9px black"});
    
    $("#footer-text").css({"font-family": "system-ui","margin-left": "100px","margin-top": "20px","padding-top": "30px","align": "justify","display": "flex"});

    $("#footer-in-div").css({"height": "100px","display": "flex", });


    $("#footerdiv1").css({"height": "60px", "width": "400px","background-color": "white","margin-top": "20px","margin-left": "80px","border-radius": "5px","box-shadow": "0px 0px 5px black","display": "block"});


    $("#footerdiv2").css({"height": "60px","width": "400px","background-color": "white","margin-top": "20px","margin-left": "80px","border-radius": "5px","box-shadow": "0px 0px 5px black","display": "block"});



    $("#footerdiv3").css({"height": "60px","width": "400px","background-color": "white","margin-top": "20px","margin-left": "80px","border-radius": "5px","box-shadow": "0px 0px 5px black","display": "block"});


    $("#footer-in-div1").css({"height": "100px","display": "flex","align": "justify",});

    $("#footerdiv4").css({"height": "60px","width": "400px","background-color": "white","margin-top": "20px","margin-left": "80px","border-radius": "5px","box-shadow": "0px 0px 5px black","display": "block"});

    $("#footerdiv5").css({"height": "60px","width": "400px","background-color": "white","margin-top": "20px","margin-left": "80px","border-radius": "5px","box-shadow": "0px 0px 5px black","display": "block"});

    $("#footerdiv6").css({"height": "60px","width": "400px","background-color": "white","margin-top": "20px","margin-left": "80px","border-radius": "5px","box-shadow": "0px 0px 5px black","display": "block"});

    $("#footer-p1").css({"text-align": "center", "margin-top": "15px","font-size": "19px","font-family": "system-ui","font-weight": "500","color": "rgb(66,136,205)" });

    $("#footer-p2").css({"text-align": "center","margin-top": "15px","font-size": "19px","font-family": "system-ui","font-weight": "500","color": "rgb(66,136,205)"});

    $("#footer-p3").css({"text-align": "center","margin-top": "15px","font-size": "19px","font-family": "system-ui","font-weight": "500","color": "rgb(66,136,205)"});

    $("#footer-p4").css({"text-align": "center","margin-top": "15px","font-size": "19px","font-family": "system-ui","font-weight": "500","color": "rgb(66,136,205)"});


    $("#footer-p5").css({"text-align": "center","margin-top": "15px","font-size": "19px","font-family": "system-ui","font-weight": "500","color": "rgb(66,136,205)"});

    $("#footer-p6").css({"text-align": "center","margin-top": "15px","font-size": "19px","font-family": "system-ui","font-weight": "500","color": "rgb(66,136,205)"});

    $("#offering-box1").css({"height": "300px","width": "300px","background-color": "red"});



    //about page


    $("#offering").css({"height": "450px","width": "100%","background-color": "rgb(23, 37, 95)",
    "padding-top": "120px",});

    $("#Deeps").css({"margin-left": "100px","display": "block","text-decoration": "none","color": "white","font-family": "system-ui","height": "30px","background-color": "deepskyblue","width": "120px","padding-left": "16px","padding-top": "9px","font-weight": "bold","border-radius": "10px","font-size": "15px"});

    $("#Deeps").hover(
        function () {
            $(this).css({"box-shadow": "0px 0px 12px white","cursor": "pointer"});
        },
        function () {
            $(this).css({"box-shadow": "none"});
        },
    );

    $("#company-profile").css({"font-family": "system-ui","margin-left": "100px","margin-top": "20px","color": "white","font-size": "40px"});

    $("#h2explore").css({"font-family": "system-ui","margin-left": "100px", "margin-top": "20px", "color": "white",});

    $("#unique-color-h1").css({"color": "yellow"});

    $("#offering-in-box1").css({"height": "60px","display": "flex","margin-top": "40px","margin-left": "100px",});

    $("#h31").css({"font-family": "system-ui","font-weight": "bold","color": "white"});

    $("#h32").css({"font-family": "system-ui","font-weight": "bold","color": "white","margin-left": "120px"});

    $("#h33").css({"font-family": "system-ui","font-weight": "bold","color": "white","margin-left": "120px"});

    $("#offering-free").css({"display": "block","text-decoration": "none","color": "white","height": "25px","width": "170px","text-align": "center","background-color": "orange","margin-left": "100px","margin-top": "35px","border-radius": "5px","font-family": "system-ui","font-weight": "bold",
    "padding": "10px"});

    $("#main-in-offering").css({"height": "500px","padding-bottom": "20px"});

    $("#main-in-h1-div").css({"padding-bottom": "50px","height": "100px","padding-top": "40px"});



    $("#main-in-h1").css({"text-align": "center","margin-top": "50px","font-family": "system-ui",
    "color": "rgb(94, 89, 89)","font-weight": "900"});

    $("#main-in-p1").css({"font-size": "20px","margin-left": "260px","margin-top": "0px","font-family": "system-ui"});

    $("#main-in-span1").css({"color": "blue"});

    $("#main-in-span2").css({"color": "blue"});

    $("#main-in-p2").css({"font-size": "20px","margin-left": "260px","margin-top": "20px","font-family": "system-ui"});

    $("#main-in-p3").css({"font-size": "20px","margin-left": "260px","margin-top": "20px","font-family": "system-ui",

    });

    $("#main-in-h2").css({"text-align": "center","margin-top": "10px","font-family": "system-ui",
    "color": "rgb(94, 89, 89)","font-weight": "900"});


    $("#image-changed-btn").css({"display": "block","display": "flex"});

    $("#image-btn1").css({"margin-top": "30px","margin-left": "400px","height": "40px","width": "380px",
    "display": "block","border-radius": "5px","border-color": "white","font-weight": "bold","font-family": "system-ui","color": "purple"});


    $("#image-btn1").hover(
        function () {
            $(this).css({"background-color": "lightblue","color": "purple","cursor": "pointer",});
        },
        function () {
            $(this).css({"background-color": "white","color": "purple"});

        }
    );


    $("#image-btn2").css({"margin-top": "30px","margin-left": "10px","height": "40px","width": "380px","display": "block","border-radius": "5px","border-color": "white","color": "purple","font-weight": "bold","font-family": "system-ui"});

    $("#image-btn2").hover(
        function () {
            $(this).css({"background-color": "lightblue","cursor": "pointer"});
        },
        function () {
            $(this).css({"background-color": "white","cursor": "pointer"});
        }
    );
    $("#image-tracxn").css({"margin-left": "400px","width": "770px","margin-top": "30px"});

    $("#image-btn1").click(function () {
        $("#image-tracxn").attr("src", "tracxn1.png");
    });

    $("#image-btn2").click(function () {
        $("#image-tracxn").attr("src", "tracxn2.png");
    });

    $("#main-in-h1-div2").css({"height": "80px","display": "block","text-align": "justify","margin-top": "20px"});

    $("#main-in-div2-h1").css({"margin-left": "60px","font-family": "system-ui","color": "rgb(94,89,89)","font-weight": "900","text-align": "center","margin-right": "40px",});


    $("#main-in-div2-p").css({"height": "100px","padding-bottom": "50px","padding-top": "20px","margin-top": "20px"});

    $("#main-in-p1-div2").css({"margin-left": "260px","font-family": "system-ui","font-size": "20px"});

    $("#funding").css({"color": "blue" });

    $("#main-in-p2-div2").css({"margin-left": "260px","margin-top": "10px","font-family": "system-ui","font-size": "20px"});

    $("#financial").css({"color": "blue"});

    $("#main-in-p3-div2").css({"margin-left": "260px","margin-top": "10px","font-family": "system-ui","font-size": "20px"});

    $("#ownership").css({"color": "blue"});

    $("#image-changed-btn-div2").css({"display": "block","display": "flex"});

    $("#image-btn1-div2").css({"margin-top": "30px","margin-left": "400px","height": "40px",
    "width": "380px","display": "block","border-radius": "5px","border-color": "white","font-weight": "bold","font-family": "system-ui","color": "purple"});

    $("#image-btn1-div2").hover(
        function () {
            $(this).css({"background-color": "lightblue","cursor": "pointer"});
        },
        function () {
            $(this).css({"background-color": "white","cursor": "pointer"});
        }
    );

    $("#image-btn2-div2").css({"margin-top": "30px","margin-left": "10px","height": "40px","width": "380px","display": "block","border-radius": "5px","border-color": "white","color": "purple","font-weight": "bold","font-family": "system-ui"});

    $("#image-btn2-div2").hover(
        function () {
            $(this).css({"background-color": "lightblue","cursor": "pointer"});
        },
        function () {
            $(this).css({"background-color": "white","cursor": "pointer"});
        }

    );

    $("#image-div2").css({"margin-left": "400px","width": "770px","margin-top": "30px"});

    $("#image-btn1-div2").click(function () {
        $("#image-div2").attr("src", "tracxn3.png")
    });

    $("#image-btn2-div2").click(function () {
        $("#image-div2").attr("src", "tracxn4.png")
    });

    $("#footer-in-offering").css({"height": "500px","display": "block"});


    $("#offering-h1-footer").css({"text-align": "center","margin-top": "10px","font-family": "system-ui","color": "rgb(94,89,89)",});

    $("#footer-in-p").css({"margin-top": "10px", "height": "300px"});

    $("#footer-in-p1").css({"margin-left": "260px","font-size": "20px","font-family": "system-ui","margin-top": "20px"});

    $("#footer-in-p2").css({"margin-left": "260px","font-size": "20px","font-family": "system-ui","margin-top": "20px"});


    $(".footer-in-span").css({"color": "blue"});

    $("#footer-in-p3").css({"margin-left": "260px","font-size": "20px","font-family": "system-ui","margin-top": "20px"});

    $(".footer-in-span").css({"color": "blue"});

    $("#footer-know-more-box").css({"height": "200px",});

    $("#footer-in-box1").css({"height": "150px","border": "2px solid white","width": "1000px","margin-top": "27px","margin-left": "250px","border-radius": "10px","background-color": "rgb(138, 169, 202)"});


    $("#footer-in-box-p1").css({"color": "white","font-size": "30px","font-family": "system-ui","font-weight": "bold","margin-left": "40px","margin-top": "20px"});

    $("#box-p").css({"width": "75%","height": "150px","float": "left"});


    $("#footer-in-box-p2").css({"color": "rgb(94,89,89)","font-size": "25px","margin-left": "40px","margin-top": "10px","font-family": "system-ui"
    });

    $("#box-link").css({"width": "25%","height": "150px","float": "left","text-align": "center",});

    $("#footer-in-link").css({"background-color": "blue","padding-top": "10px","padding-bottom": "10px","padding-left": "20px","padding-right": "20px","border-radius": "10px","position": "relative","top": "70px","font-family": "system-ui","color": "white","text-decoration": "none"});

    //about page

    $("#company-div-main").css({"height": "300px","border": "1px solid black","background-color": "rgb(23,37,95)"});

    $("#company-main-h1").css({"text-align": "center","margin-top": "150px","color": "white","font-family": "system-ui"});

    $("#company-div2-main").css({"height": "100px"});

    $("#company-main-h2").css({"text-align": "center","margin-top": "70px","font-family": "system-ui",
    "color": "rgb(23,37,95)","font-weight": "500"});

    $("#company-div3-main").css({"height": "150px","display": "flex",});

    $("#company-img-div1").css({"height": "150px","margin-left": "300px",});


    $("#company-img-div1 img").css({"height": "100%","width": "100%","border-radius": "16px","box-shadow": "0px 0px 10px black"});

    $("#company-img-div2").css({"height": "150px","width": "150px","margin-left": "6%","border": "1px solid white","box-shadow": "0px 0px 10px black","border-radius": "16px"});

    $("#company-img-div2 img").css({"height": "50%","width": "100%","margin-top": "30px",});

    $("#company-img-div3").css({"height": "150px","width": "150px","margin-left": "100px","border": "1px solid white","box-shadow": "0px 0px 10px black","border-radius": "16px"});

    $("#company-img-div3 img").css({"width": "100%","margin-top": "65px"});

    $("#company-img-div4").css({ "height": "150px", "width": "150px", "margin-left": "110px", "border": "1px solid white","box-shadow": "0px 0px 10px black","border-radius": "16px"});






    $("#img-p").css({"margin-top": "6px","height": "50px","display": "flex"
    });

    $("#img1-p1").css({"margin-left": "280px","font-family": "system-ui","color": "rgb(23,37,95)",
    "font-weight": "600",});

    $("#img2-p2").css({"margin-left": "4%","font-family": "system-ui","color": "rgb(23,37,95)",
    "font-weight": "600"});

    $("#img3-p3").css({"margin-left": "93px","font-family": "system-ui","color": "rgb(23,37,95)","font-weight": "600"});

    $("#img4-p4").css({"margin-left": "145px","font-family": "system-ui","color": "rgb(23,37,95)","font-weight": "600", });

    $("#company5").css({"margin-left": "300px","border": "1px solid white","height": "150px","border-radius": "16px","box-shadow": "0px 0px 10px black"});


    $("#img5-p5").css({"margin-left": "293px","font-family": "system-ui","color": "rgb(23, 37, 95)","font-weight": "600"});

    $("#company-footer").css({"height": "400px","margin-top": "10px","display": "flex","background-color": "rgb(2,18,41)","color": "white"});

    $("#company-ul1").css({"margin-top": "30px","margin-left": "90px",});

    $("#company-li1").css({"list-style-type": "none","font-weight": "bold","font-family": "system-ui"});

    $("#company-ul1-in-ul li").css({"font-weight": "400","list-style-type": "none"});

    $("#contact-footer-in-ul").css({"margin-top": "30px","margin-left": "90px","list-style-type": "none","font-weight": "bold","font-family": "system-ui"});

    $("#contact-in-ul1 li").css({"list-style-type": "none","font-weight": "400"});

    $("#Sector-Research").css({"margin-left": "90px","margin-top": "30px","font-weight": "bold","font-family": "system-ui","list-style-type": "none"});

    $("#Sector-research-in-ul li").css({"font-weight": "400","list-style-type": "none"});

    $("#Customers-in-research-ul").css({"margin-left": "90px","list-style-type": "none","font-weight": "bold","margin-top": "30px","font-family": "system-ui"});

    $("#Customers-in-ul li").css({"list-style-type": "none","font-weight": "400",});

    $("#Discover-ul-in-li").css({"margin-top": "30px","margin-left": "90px","font-weight": "bold","font-family": "system-ui","list-style-type": "none"

    });

    $("#Discover-ul-in-li2 li").css({"list-style-type": "none","font-weight": "400",});

    $("#Discover-sub-category").css({"display": "flex"});

    $("#Discover-in-ul-li").css({"margin-top": "30px","margin-left": "90px","list-style-type": "none","font-family": "system-ui"});

    $("#Testimonials-ul1").css({"margin-top": "30px","margin-left": "90px","list-style-type": "none","font-weight": "bold","font-family": "system-ui"});

    $("#Testimonials-ul2-li2 li").css({"list-style-type": "none","font-weight": "400","font-family": "system-ui"});

    $("#footer-in-number-div").css({"display": "flex","color": "white","height": "70px","background-color": "rgb(2,18,41)","text-align": "center","font-family": "system-ui","font-weight": "400"});

    $("#first-h1-div").css({"margin-top": "80px","text-align": "center","font-family": "system-ui","color": "rgb(72, 64, 64)"});

    //pricing page

    $("#For-personal-use-for-comoricial-use").css({"height": "700px","display": "flex",});

    $("#For-personal-use").css({"margin-left": "300px","border": "1px solid white","height": "500px","margin-top": "50px","width": "420px","border-radius": "10px","box-shadow": "0px 0px 2px black","color": "rgb(72,64,64)","font-size": "17px"});

    $("#princing-in-p1").css({"margin-left": "20px","margin-top": "30px","font-family": "system-ui","font-weight": "600"});

    $("#img-icon-div").css({"margin-top": "20px","height": "50px","display": "flex"});

    $("#img-in-pricing").css({"margin-left": "20px","height": "70%","margin-top": "7px"});

    $("#img-icon-div span").css({"font-size": "35px","font-family": "system-ui","font-weight": "600"});

    $("#pricing-in-p2").css({"margin-left": "20px","margin-top": "19px","font-family": "system-ui","font-weight": "600"});

    $("#button-in-link").css({"height": "40px","display": "block","width": "380px",
    "margin-left": "20px","margin-top": "30px","background-color": "rgb(66,136,205)",
     "border": "1px solid white","border-radius": "5px","font-size": "17px"});

    $("#link-button").css({"text-decoration": "none","font-weight": "bold","color": "white","font-family": "system-ui"});

    $("#button-in-link").hover(
        function () {
            $(this).css({"background-color": "blue",});
        },
        function () {
            $(this).css({"background-color": "rgb(66,136,205)"});
        }

    );

    $("#pricing-in-p3").css({"margin-left": "20px","font-style": "italic","font-family": "system-ui","margin-top": "2px"});

    $("#pricing-in-p4").css({"font-weight": "bold","margin-top": "15px","margin-left": "20px","font-family": "system-ui"});

    $("#what-you-get").css({"margin-left": "20px", "margin-right": "20px", "margin-top": "10px", "font-family": "system-ui","font-size": "15px", });


    $(".what").css({"padding": "5px 0px","font-size": "17px"});

    $(".pricing-in-span").css({"color": "green","font-family": "system-ui" });

    $("#what1").css({"font-family": "system-ui","font-style": "italic","margin-top": '10px' });

    $("#premium").css({"height": "570px","border": "2px solid orange","margin-top": "20px",
    "margin-bottom": "18px","margin-left": "30px","width": "420px","box-shadow": "0px 0px 4px black","border-radius": "10px","font-family": "system-ui"});

    $("#premium-in-p1").css({"margin-left": "20px","margin-top": "60px","color": "rgb(72,64,64)","font-weight": "600","font-size": "17px"});

    $("#premium-in-div1").css({"margin-top": "20px","height": "50px","display": "flex" });

    $("#premium-in-img1").css({"margin-left": "20px","height": "70%","margin-top": "7px"});

    $("#premium-in-div1 span").css({"font-size": "35px","font-family": "system-ui","font-weight": "600","color": "rgb(72,64,64)",});

    $("#premium-in-p2").css({"margin-left": "20px","margin-top": "16px","color": "rgb(72,64,64)","font-weight": "600","font-size": "17px"});

    $("#premium-in-button1").css({"height": "40px","display": "block","width": "380px","margin-left": "20px","margin-top": "30px","background-color": "orange","border": "1px solid white","border-radius": "5px",}); 

    $("#premium-in-link").css({"text-decoration": "none","font-weight": "bold","color": "white","font-family": "system-ui","font-size": "17px"});

    $("#premium-in-button1").hover(
        function () {
            $(this).css({"background-color": "#ff8c00",});
        },
        function () {
            $(this).css({"background-color": "orange"})
        }
    );

    $("#premium-in-div2").css({"display": "block","margin-left": "20px","margin-top": "15px","margin-right": "20px",});

    $("#div2-in-p1").css({"font-weight": "bold","color": "rgb(72,64,64)","font-size": "17px" });

    $("#div2-span").css({"margin-left": "20px","margin-right": "20px","margin-top": "10px","font-family":"system-ui","font-size": "15px",});

    $(".div2-span1").css({"padding": "5px 0px","color": "rgb(72,64,64)","font-size": "17px"});

    $(".div2-span1 span").css({"color": "green","font-weight": "400"});

    $("#premium-div2-keyfeature").css({"height": "78px","font-family": "system-ui","color": "rgb(72,64,64)"
    });

    $("#keyfeature-in-h1").css({"text-align": "center","font-weight": "bold"});

    $("#keyfeature-in-h3").css({ "text-align": "center", "font-weight": "400",});

    $("#keyfeature-technology").css({"height": "250px","display": "flex"});

    $("#startup-database").css({"height": "230px","margin-top": "20px","width": "319px",
    "font-family": "system-ui","margin-left":"10%"});

    $("#startup-database h4").css({"margin-left": "6%  ","font-size": "17px","color": "rgb(72,64,64)","font-weight": "bold" });

    $(".fa-database").css({"color": "blue"});

    $("#startup-database-in-div1").css({"margin-left": "5px","margin-right": "5px",});

    $(".Databases-p").css({"padding": "5px 0px",});

    $(".Databases-span").css({"color": "green",});

    $("#startup-database").hover(
        function () {
            $("#startup-database p").css({"color": "#0077b6","font-weight": "bold",});
        },
        function () {
            $("#startup-database p").css({ "color": "","font-weight": "",});

        },
    );

    $("#sourcing-deal").css({"height": "230px","width": "319px","margin-top": "20px", "display": "block","font-family": "system-ui","margin-left":"8%"});

    $("#sourcing-in-h4").css({"margin-left": "6%","color": "rgb(72,64,64)","font-weight": "bold"});

    $(".fa-search").css({"color": "blue"});

    $("#sourcing-in-div1").css({"margin-left":"5px","margin-right":"5px"});

    $(".sourcing-deal").css({ "padding":"5px 0px"});

    $(".sourcing-span").css({"color":"green"});

    $("#sourcing-in-div1").hover(
        function(){
            $("#sourcing-in-div1 p").css({"color":"#0077b6","font-weight":"bold"});
        },
        function(){
            $("#sourcing-in-div1 p").css({"color":"","font-weight":""});
        }
    );

    $("#company-due-dilegence").css({"height":"230px","width":"319px","font-family":"system-ui","margin-right":"10%","margin-top":"20px","margin-left":"8%"});

    $(".fa-creative-commons-share").css({"color":"blue","font-weight":"600"});

    $("#company-dilegence-in-h4").css({"font-size":"17px","margin-left":"6%","font-weight":"bold","color":"rgb(72,64,64)"});

    $("#company-dilegence-in-p1").css({"margin-left":"5px","margin-right":"5px"});

    $(".company-p").css({"padding":"5px 0px" });

    $(".dillegence-span").css({"color":"green"});
    
    $("#company-due-dilegence").hover(
        function(){
            $("#company-dilegence-in-p1").css({"color":"#0077b6","font-weight":"bold"});
        },
        function(){
            $("#company-dilegence-in-p1").css({"color":"","font-weight":""});
        }

       
    );

    $("#keyfeature-technology-div2").css({"height":"250px", "display":"flex"});

    $("#crm-framworks").css({"heihgt":"230px","margin-top":"20px","margin-left":"10%","width":"319px","font-family":"system-ui"});

    $(".fa-users").css({"color":"blue"});

    $("#crm-framworks-in-h4").css({"margin-left":"6%","color":"rgb(72,64,64)","font-weight":"bold"});

    $("#crm-framworks-in-p1").css({"margin-left":"5px","margin-right":"5px"});

    $(".crm-span").css({"color":"green" });

    $(".crm-p").css({"padding":"5px 0px",});

    $("#crm-framworks p").hover(
        function(){
            $(".crm-p").css({"color":"#0077b6","font-weight":"bold"});
        },
        function(){
            $(".crm-p").css({"color":"","font-weight":""});
        },
    );

    $("#depth-tracking").css({"height":"230px","margin-top":"20px","width":"319px","margin-left":"8%","font-family":"system-ui"});

    $(".fa-globe").css({"color":"blue"});

    $("#depth-in-h4").css({"margin-left":"6%","color":"rgb(72,64,64)","font-weight":"bold"});

    $("#depth-in-p").css({"margin-left":"5px","margin-right":"5px"});

    $(".depth-p").css({"padding":"5px 0px"});

    $(".depth-span").css({"color":"green"});

    $("#depth-in-p").hover(
        function(){
            $(".depth-p").css({"color":"#0077b6","font-weight":"bold"});
        },
        function(){
            $(".depth-p").css({ "color":"","font-weight":""});
        }
    );

    $("#integration-api").css({"height":"230px","width":"319px","margin-left":"8%","margin-top":"20px","font-family":"system-ui"});

    $(".fa-cog").css({"color":"blue"});

    $("#api-in-h4").css({"margin-left":"6%","color":"rgb(72,64,64)","font-weight":"bold"});

    $("#api-p").css({"margin-left":"5px","margin-right":"5px",});

    $(".api-span").css({"color":"green"});

    $(".api-in-p").css({"padding":"5px 0px"});

    $("#api-p").hover(
        function(){
            $(".api-in-p").css({"color":"#0077b6","font-weight":"bold"});
        },
        function(){
            $(".api-in-p").css({"color":"","font-weight":""});
        }
    );

    $("#keyfeature-technology-div3").css({"height":"250px","display":"flex"});

    $("#enterprise-grad").css({"height":"230px","margin-top":"20px","margin-left":"10%","width":"319px","font-family":"system-ui"});

    $("#enterprise-in-h4").css({"margin-left":"6%","color":"rgb(72,64,64)","font-weight":"bold"});

    $(".fa-industry").css({"color":"blue"});

    $("#enterprice-in-div").css({"margin-left":"5px","margin-right":"5px",});
    
    $(".enterprise-span").css({"color":"green"});

    $(".enterprise-p").css({"padding":"5px 0px"});

    $("#enterprice-in-div").hover(
        function(){
            $(".enterprise-p").css({"color":"#0077b6","font-weight":"bold"});
        },
        function(){
            $(".enterprise-p").css({"color":"","font-weight":""})
        }
    );

    $("#premium-freecard").css({"border":"1px solid black","margin-left":"8%","margin-top":"20px","width":"670px","height":"180px","border-radius":"10px","box-shadow":"0px 0px 10px black"});

            
    $("#premium-in-h2").css({"text-align":"center","margin-top":"30px","font-family":"system-ui","color":"rgb(72,64,64)","font-weight":"bold"});

    $("#button-in-pricing").css({
        "height":"50px","width":"180px","margin-left":"245px","margin-top":"26px","border-radius":"10px","background-color":"orange","font-family":"system-ui","border":"0px solid white","box-shadow":"0px 0px 5px black","display":"flex","justify-content":"center","align-items":"center"
    });

    $("#button-in-pricing a").css({
        "text-decoration":"none","color":"white","font-weight":"bold"
    });




    //applied media quary
    



    let mobilesize=$(window).width()<=768;

    $(window).resize(function(){
        let isMobile=$(window).width()<=768
        if(isMobile){
            $("#navbar").css({"height": "150px","flex-direction":"column","position": "fixed","top": "0","width": "100%","z-index": "1","background-color": "green"});
        }else{
            
        }
        if(isMobile !==mobilesize){
            location.reload();
        }

        mobilesize=isMobile;
    });

    $(window).resize();



    





        































































});
