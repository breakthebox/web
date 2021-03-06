


$("#beliefs").on("swipeleft",function(event){nextBelief()});
$("#beliefs").on("swiperight",function(event){previousBelief()});

var beliefs = [
    {
        "avatar_belief": "img/BrigitteHulliger-down.jpg",
        "belief": "Wir verwenden agile Methoden...",
        "avatar_reason": "img/OliverSchmid-up.jpg",
        "reason": "... weil die meisten Problemstellungen zu komplex sind um sie vollständig planen zu können. "
    },
    {
        "avatar_belief": "img/OliverSchmid-down.jpg",
        "belief": "Wir nutzen offene Standards...",
        "avatar_reason": "img/BrigitteHulliger-up.jpg",
        "reason": "... weil Innovation immer auf Bestehendem aufbaut und offene Standards die beste Grundlage für neue Ideen bilden."
    },
    {
        "avatar_belief": "img/BrigitteHulliger-down.jpg",
        "belief": "Wir arbeiten interdisziplinär...",
        "avatar_reason": "img/OliverSchmid-up.jpg",
        "reason": "... weil nur dann ganzheitliche Ideen entstehen können, wenn von Beginn weg verschiedene Aspekte berücksichtigt werden."
    },
    {
        "avatar_belief": "img/OliverSchmid-down.jpg",
        "belief": "Unser Ziel ist das \"Self-Enabling\"...",
        "avatar_reason": "img/BrigitteHulliger-up.jpg",
        "reason": "... weil Nachhaltigkeit nur dann entstehen kann, wenn unsere Kunden befähigt werden unsere Dienste mittelfristig selbst sicherzustellen."
    },

    {
        "avatar_belief": "img/BrigitteHulliger-down.jpg",
        "belief": "Wir suchen pragmatische Lösungen...",
        "avatar_reason": "img/OliverSchmid-up.jpg",
        "reason": "... weil sich theoretische Konstrukte nur selten 1:1 in die Realität umsetzen lassen. Daher machen wir das Beste aus den bestehenden Bedingungen."
    },
    {
        "avatar_belief": "img/OliverSchmid-down.jpg",
        "belief": "Wir sind überzeugt von Facilitation...",
        "avatar_reason": "img/BrigitteHulliger-up.jpg",
        "reason": "... weil die Lösung manchmal in der Luft liegt und nur noch eingefangen werden muss."
    },
    {
        "avatar_belief": "img/BrigitteHulliger-down.jpg",
        "belief": "Wir glauben an Ehrlichkeit und Transparenz...",
        "avatar_reason": "img/OliverSchmid-up.jpg",
        "reason": "... weil nur mit Vertrauen und Zutrauen Grosses geschaffen werden kann."
    }
];

var r = Math.floor(Math.random() * beliefs.length);
var getDynamicWriteLength = function(){
    var writespeed = 750;
    return (Math.random()+1)*writespeed;
};

var timers = [];
var conversation = function() {
    for(var i=0; i<timers.length; i++){
        clearTimeout(timers[i]);
    }
    timers = [];
    $("#avatarBelief").hide();
    $("#avatarReason").hide();
    $("#bubbleReason").hide();
    $("#bubbleBelief").hide();
    timers.push(window.setTimeout(function () {
        $("#avatarBelief").attr('src', beliefs[r].avatar_belief);
        $("#avatarBelief").show();
        $("#bubbleBelief").show();
        $("#belief").text("...");
        timers.push(window.setTimeout(function () {
            $("#belief").text(beliefs[r].belief);
            timers.push(window.setTimeout(function () {
                $("#avatarReason").attr('src', beliefs[r].avatar_reason);
                $("#avatarReason").show();
                $("#bubbleReason").show();
                $("#reason").text("...");
                timers.push(window.setTimeout(function () {
                    $("#reason").text(beliefs[r].reason);
                    timers.push(window.setTimeout(function(){
                        nextBelief();
                    }, 7000));
                }, getDynamicWriteLength()));
            }, getDynamicWriteLength()))
        }, getDynamicWriteLength()));
    }, getDynamicWriteLength()));
};

var nextBelief = function(){
    if(r===beliefs.length-1){
        r=0;
    }
    else{
        r++;
    }
    conversation();
};

var previousBelief = function(){
    if(r===0){
        r=beliefs.length-1;
    }
    else{
        r--;
    }
    conversation();
};
nextBelief();
