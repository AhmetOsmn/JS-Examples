var quotes=[];
var colors=["#c62828","#AD1457","#4A148C","#311892","#1A237E","#0D47A1","#01579B","#004D40"];

function GetQuotes(){
    return fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data=>{
        quotes=data;
    });

    Change();
}

function Change(){
    var count=quotes.length;
    var randNumber=Math.floor(Math.random()*count);

    document.getElementById('text').innerText=quotes[randNumber].text;
    document.getElementById('author').innerText="-"+quotes[randNumber].author;

    var randColorNumber = Math.floor(Math.random()*(colors.length));
    document.body.style.backgroundColor=colors[randColorNumber];

}

function ShareTweet(){
    var text=document.getElementById('text').innerText;
    var author=document.getElementById('author').innerText;

    window.location.href='https://twitter.com/intent/tweet?text='+encodeURIComponent('"'+text+'"'+" "+author);
}

GetQuotes();
    
