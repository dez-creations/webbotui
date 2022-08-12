function playText(){
    const utterance = new SpeechSynthesisUtterance("Hello, I'm Dooki. How are you big dude?")
    speechSynthesis.speak(utterance)
}

playText()

function greeting() {
    let date = new Date();
    let hours = date.getHours();
    let greetings;

    if (hours > 18){
    greetings = "Good Evening";
    playText("Good Evening");}
    else if (hours > 12){
    greetings = "Good Afternoon";
    playText("Good Afternoon");}
    else if (hours > 0){
    greetings = "Good Morning";
    playText("Good Morning");}
    else{
    greetings = "hello";}

    let greetHtml = '<span>' + greetings + '</span>';
    $("#GreetMessage").append(greetHtml);
}

greeting()

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Nothing";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml)
    
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
}

function sendButton() {
    getResponse();
}

$("#textInput").keypress(function(e) {
    if(e.which == 13) {
        getResponse();
    }
});