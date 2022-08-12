function playText(audio){
    const utterance = new SpeechSynthesisUtterance(audio)
    speechSynthesis.speak(utterance)
}

function getBotResponse(input){
    if (input == "HELLO","HI","HELLO THERE","HI THERE"){
        return "Hello";
    }
    else if (input == "HOW ARE YOU","HOW IS IT GOING ON","WHAT'S UP","I AM FINE. WHAT ABOUT YOU?"){
        return "I'm fine";
    }
    else if (input == "I AM FINE","FINE","BETTER THAN EVER","I FEEL GOOD NOW","I FEEL GOOD","I AM GOOD"){ 
        return "Glad to hear it.";
    }
    else {
        playText("Couldn't recognize");
        return "Couldn't recognize";
    }
}