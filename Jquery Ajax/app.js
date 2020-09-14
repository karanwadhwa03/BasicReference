$(document).ready(function(){
$("button").click(function(event){
event.preventdefault;
$("div").html(" ")
var p=$("input").val();
console.log(p)
$.ajax({
method:'GET',
url:'https://api.unsplash.com/search/photos?page=1&orientation=landscape&color=black&per_page=20&query='+p+'&client_id=Z814KRaR7WvoAfOz13dX3kbJ5A2-q33jbQZ6B0g_bQ4',
contentType:'application/json',
success:function(response){
    console.log(response)
    if(response.results.length==0){
    alert("TYPING MISTAKE")}
    response.results.forEach(element => {
        $("div").append(`<img   style="width:50%;float:left;"src=  " ${element.urls.regular}"></img>`)
    });
    
}


})


})


})

//Z814KRaR7WvoAfOz13dX3kbJ5A2-q33jbQZ6B0g_bQ4