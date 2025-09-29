$(document).ready(function(){

    $("*").css({"margin":"0","padding":"0"})
    $("#navbar").css({"height": "70px","display": "flex","position": "fixed","top": "0","width": "100%","z-index": "1","background-color": "white"});

    $("#img_header").css({"height":"30px","width":"120px","margin-left":"50px","margin-top":"15px"});

    $("#ul1").css({"display":"flex","margin-left":"30px","margin-top":"21px","font-family":"system-ui","list-style-type":"none",});

    $("#cus").css({"color":"black","text-decoration":"none","margin-top":"0px"});

    $("#Offe").css({"color":"black","text-decoration":"none","margin-left":"20px"});

    $("#Com").css({"color":"black","text-decoration":"none","margin-left":"20px"});

    $("#pricing").css({"color":"black","text-decoration":"none","margin-left":"20px"});

    let prevIsMobile=$(window).width()<=768;

    $(window).resize(function(){
        let isMobile=$(window).width()<=768;
        if(isMobile){
            $("#navbar").css({"height":"150px","background-color":"green","width":"100%","padding":"20px","flex-direction":"column",});

            $("#cus").css({"color":"white","text-decoration":"none","margin-top":"10px","font-weight":"bold"});

            $("#Offe").css({"color":"white","text-decoration":"none","margin-left":"20px","font-weight":"bold"});

            $("#Com").css({"color":"white","text-decoration":"none","margin-left":"20px","font-weight":"bold"});

            $("#pricing").css({"color":"white","text-decoration":"none","font-weight":"bold","margin-left":"20px"})

        }
        
        if(isMobile !==prevIsMobile){
            location.reload();
        }
        prevIsMobile = isMobile;
        
    });
    
    $(window).resize();



});
