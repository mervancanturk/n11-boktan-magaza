var elements = document.querySelectorAll("div.shopPoint div.pointBar span.point");


elements.forEach(function(item, i){
	if(parseInt(item.textContent.replace("%","")) < 70){ 
    var silinecek = item.parentNode.parentNode.parentNode.parentNode.parentNode;
    silinecek.parentNode.removeChild(silinecek);
    console.info(item.parentElement.parentElement.parentElement.title + " Mağazası " + item.textContent + " puanı sebebi ile sonuçlardan silinmiştir.");
    }
});
