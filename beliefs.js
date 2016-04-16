var beliefs = [
    {
        "avatar_belief": "https://s.gravatar.com/avatar/aa705336ad39eb523f22e883ebee1dc8?s=80",
        "belief": "Wir glauben an agile Methoden...",
        "avatar_reason": "https://s.gravatar.com/avatar/7d69ac318121023d70962f81f266e7e2?s=80",
        "reason": "... weil die meisten Problemstellungen zu komplex sind um sie vollständig planen zu können. "
    },
    {
        "avatar_belief": "https://s.gravatar.com/avatar/7d69ac318121023d70962f81f266e7e2?s=80",
        "belief": "Wir glauben an offene Standards...",
        "avatar_reason": "https://s.gravatar.com/avatar/aa705336ad39eb523f22e883ebee1dc8?s=80",
        "reason": "... weil Innovation immer auf Bestehendem aufbaut und offene Standards die beste Grundlage für neue Ideen bilden."
    },
    {
        "avatar_belief": "https://s.gravatar.com/avatar/aa705336ad39eb523f22e883ebee1dc8?s=80",
        "belief": "Wir glauben an Interdisziplinarität...",
        "avatar_reason": "https://s.gravatar.com/avatar/7d69ac318121023d70962f81f266e7e2?s=80",
        "reason": "... weil nur dann ganzheitliche Ideen entstehen können, wenn von Beginn weg verschiedene Aspekte berücksichtigt werden."
    },
    {
        "avatar_belief": "https://s.gravatar.com/avatar/7d69ac318121023d70962f81f266e7e2?s=80",
        "belief": "Wir glauben an \"Self-Enabling\"...",
        "avatar_reason": "https://s.gravatar.com/avatar/aa705336ad39eb523f22e883ebee1dc8?s=80",
        "reason": "... weil Nachhaltigkeit nur dann entstehen kann, wenn unsere Kunden befähigt werden unsere Dienste mittelfristig selbst sicherzustellen."
    },

    {
        "avatar_belief": "https://s.gravatar.com/avatar/aa705336ad39eb523f22e883ebee1dc8?s=80",
        "belief": "Wir glauben an pragmatische Lösungen...",
        "avatar_reason": "https://s.gravatar.com/avatar/7d69ac318121023d70962f81f266e7e2?s=80",
        "reason": "... weil wir nicht in einer idealen Welt leben und sich theoretische Konstrukte nur selten 1:1 in die Realität umsetzen lassen. Daher machen wir das Beste aus den bestehenden Bedingungen."
    },
    {
        "avatar_belief": "https://s.gravatar.com/avatar/7d69ac318121023d70962f81f266e7e2?s=80",
        "belief": "Wir glauben an Facilitation...",
        "avatar_reason": "https://s.gravatar.com/avatar/aa705336ad39eb523f22e883ebee1dc8?s=80",
        "reason": "... weil die Lösung manchmal in der Luft liegt und nur noch eingefangen werden muss."
    },
    {
        "avatar_belief": "https://s.gravatar.com/avatar/aa705336ad39eb523f22e883ebee1dc8?s=80",
        "belief": "Wir glauben an Ehrlichkeit und Transparenz...",
        "avatar_reason": "https://s.gravatar.com/avatar/7d69ac318121023d70962f81f266e7e2?s=80",
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
    $("#avatar_belief").hide();
    $("#avatar_reason").hide();
    $("#reasonBubble").hide();
    $("#beliefBubble").hide();
    timers.push(window.setTimeout(function () {
        $("#avatar_belief").attr('src', beliefs[r].avatar_belief);
        $("#belief").text("...");
        $("#beliefBubble").show();
        $("#avatar_belief").show();
        timers.push(window.setTimeout(function () {
            $("#belief").text(beliefs[r].belief);
            timers.push(window.setTimeout(function () {
                $("#avatar_reason").attr('src', beliefs[r].avatar_reason);
                $("#avatar_reason").show();
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
