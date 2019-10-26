    var quotes= [
                "\"Place your hand over your heart, can you feel it? That is called purpose. You’re alive for a reason so don’t ever give up.\" – Unknown",
                "\"You have the power to say, \"This is not how my story will end.\" – Unknown",
                "\"Don't give up. You've still got a couple of people to prove wrong.\" – Unknown", 
                "\"I'm not telling you it's going to be easy, I'm telling you it's going to be worth it.\" – Unknown", 
                "\"Every flower must grow through dirt.\" – Unknown", 
                "\“Suicide is a permanent solution to a temporary problem.\” – Unknown", 
                "\"When it is darkest, we can see the stars.\" -Ralph Waldo Emerson",
                "\"All things are difficult before they are easy.\" - Thomas Fuller"
            ]

function randoQuote(){
    var num = Math.floor(Math.random() * (quotes.length));
    var q = quotes[num];
    var quoteBox = document.createElement("P");
    var divQuote = document.createElement("DIV");
    quoteBox.innerHTML = q;
    quoteBox.id = "quote";
    quoteBox.classList.add("text-center");
    quoteBox.classList.add("font-italic");
    document.querySelector(".row > .col").appendChild(quoteBox);

    document.getElementById("qButton").disabled = true;
    document.getElementById("qButton").style.display = "none";

}