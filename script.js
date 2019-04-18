var product=[];
var price=[];
var items=[];
$("button").click(function(){
    var listItem=$(".item input").val();
    items.push(listItem);  
    $("body").append("<div>" + listItem + "</div>");
    $(".num").text(length);
    
    var listPrice=$(".price input").val();
    price.push(listPrice);  
    $("body").append("<div>" + listPrice + "</div>");
});


