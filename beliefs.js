var beliefs = [
    {
        "belief": "Wir glauben an agile Methoden...",
        "reason": "... weil die meisten Problemstellungen zu komplex sind um sie vollständig planen zu können. "
    },
    {
        "belief": "Wir glauben an offene Standards...",
        "reason": "... weil Innovation immer auf Bestehendem aufbaut und offene Standards die beste Grundlage für neue Ideen bilden."
    },
    {
        "belief": "Wir glauben an Interdisziplinarität...",
        "reason": "... weil nur dann ganzheitliche Ideen entstehen können, wenn von Beginn weg verschiedene Aspekte berücksichtigt werden."
    },
    {
        "belief": "Wir glauben an \"Self-Enabling\"...",
        "reason": "... weil Nachhaltigkeit nur dann entstehen kann, wenn unsere Kunden befähigt werden unsere Dienste mittelfristig selbst sicherzustellen."
    },

    {
        "belief": "Wir glauben an pragmatische Lösungen...",
        "reason": "... weil wir nicht in einer idealen Welt leben und sich theoretische Konstrukte nur selten 1:1 in die Realität umsetzen lassen. Daher machen wir das Beste aus den bestehenden Bedingungen."
    },
    {
        "belief": "Wir glauben an Facilitation...",
        "reason": "... weil die Lösung manchmal in der Luft liegt und nur noch eingefangen werden muss."
    },
    {
        "belief": "Wir glauben an Ehrlichkeit und Transparenz...",
        "reason": "... weil nur mit Vertrauen und Zutrauen Grosses geschaffen werden kann."
    }
];

var r = Math.floor(Math.random() * beliefs.length);
var getDynamicWriteLength = function(){
    var writespeed = 1000;
    return (Math.random()+1)*writespeed;
};

var timers = [];
var conversation = function() {
    for(var i=0; i<timers.length; i++){
        clearTimeout(timers[i]);
    }
    timers = [];
    $("#belief").text("...");
    $("#reasonBubble").hide();
    $("#beliefBubble").hide();
    timers.push(window.setTimeout(function () {
        $("#belief").text("...");
        $("#beliefBubble").show();
        timers.push(window.setTimeout(function () {
            $("#belief").text(beliefs[r].belief);
            timers.push(window.setTimeout(function () {
                $("#reasonBubble").show();
                $("#reason").text("...");
                timers.push(window.setTimeout(function () {
                    $("#reason").text(beliefs[r].reason);
                    timers.push(window.setTimeout(function(){
                        nextBelief();
                    }, 7000));
                }, getDynamicWriteLength()));
            }, getDynamicWriteLength()))
        }, getDynamicWriteLength()));
    }, getDynamicWriteLength()*0.5));
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
