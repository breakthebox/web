

$("#description").on("swipeleft",function(event){nextOffering()});
$("#description").on("swiperight",function(event){previousOffering()});
var offerings = $("#portfolioTexts").children();

var i = 0;

var nextOffering = function(){
    hideOffering();
    if(i<offerings.length-1){
        i++;
    }
    else{
        i=0;
    }
    showOffering();
};

var previousOffering = function(){
    hideOffering();
    if(i>0){
        i--;
    }
    else{
        i=offerings.length-1;
    }
    showOffering();
};

var setOffering = function(offering){
    hideOffering();
    i = offering;
    showOffering();
};

var hideOffering = function(){
    $(offerings[i]).removeClass("active");
    $(".portfolioDiscipline").removeClass("active");
    $(".discipline").removeClass("active");
};

var showOffering = function(){
    var d = $("#discipline"+i);
    if(d.length){
        d.addClass("active");
    }
    $(offerings[i]).addClass("active");
};
