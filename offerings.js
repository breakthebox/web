$("#description").on("swipeleft",function(event){nextOffering()});
$("#description").on("swiperight",function(event){previousOffering()});

var offerings = $(".discipline");

console.log(offerings.length);

var i = 4;

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
    $(".icon").removeClass("active");
    $(".description").removeClass("active");
};

var showOffering = function(){

    console.log('showing : '  + i);

    var discipline = $("#icon"+i);

    if(discipline.length){
        discipline.addClass("active");
    }

    var description = $("#description" + i);
    if (description.length) {
        description.addClass("active");
    }
};
