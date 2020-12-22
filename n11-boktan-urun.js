var elements = document.querySelectorAll("span.point");

elements.forEach(function(item, i){

	if(parseInt(item.textContent.replace("%","")) < 70){   
        var element = document.querySelector("body");
        var child = document.createElement("DIV");
        child.classList.add("boktan-magaza-uyari");
        child.id = "boktan_elem_id";
        var logmetin = "Bu ürünün Mağazası <b>" + item.textContent + "</b> puanı sebebi ile <br/><b>boktan</b> olarak işaretlenmiştir.";
        child.innerHTML = '<a href="#" id="boktan_kapat"> KAPAT </a> <div class="boktan-magaza-metin">'+logmetin+'<br/><br/>ALIŞVERİŞ YAPMANIZ ÖNERİLMEZ..!</div>';
        element.appendChild(child);
    }
});

var el = document.getElementById('boktan_kapat');
el.onclick = function () {
    document.getElementById('boktan_elem_id').style.display = "none";
}



