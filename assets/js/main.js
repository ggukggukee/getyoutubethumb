var form = document.getElementById("myForm");
form.onsubmit = function(event){
    event.preventDefault();
        
    var cards = document.querySelectorAll(".card");
    for(var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("d-none");
    }
    
    var videoId = form.url.value.substring(32,43);
    var defaultImg = ("https://img.youtube.com/vi/" + videoId + "/default.jpg");
    var mqdefaultImg = ("https://img.youtube.com/vi/" + videoId + "/mqdefault.jpg");
    var hqdefaultImg = ("https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg");
    var sddefaultImg = ("https://img.youtube.com/vi/" + videoId + "/sddefault.jpg");
    var maxresdefaultImg = ("https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg");
    
    document.getElementById("default").src = (defaultImg);
    document.getElementById("default").alt = (defaultImg);
    document.getElementById("a-default").href = (defaultImg);
    document.getElementById("mqdefault").src = (mqdefaultImg);
    document.getElementById("mqdefault").alt = (mqdefaultImg);
    document.getElementById("a-mqdefault").href = (mqdefaultImg);
    document.getElementById("hqdefault").src = (hqdefaultImg);
    document.getElementById("hqdefault").alt = (hqdefaultImg);
    document.getElementById("a-hqdefault").href = (hqdefaultImg);
    document.getElementById("sddefault").src = (sddefaultImg);
    document.getElementById("sddefault").alt = (sddefaultImg);
    document.getElementById("a-sddefault").href = (sddefaultImg);
    document.getElementById("maxresdefault").src = (maxresdefaultImg);
    document.getElementById("maxresdefault").alt = (maxresdefaultImg);
    document.getElementById("a-maxresdefault").href = (maxresdefaultImg);
    form.reset();
};

var input = document.getElementById('url');
var pattern = input.getAttribute('pattern');
input.oninvalid = function(event) {
    event.target.setCustomValidity('URL has to be https://www.youtube.com/watch?v=***********');
};

input.oninput = function(event) {
    event.target.setCustomValidity('');
    event.target.removeAttribute('pattern');
};

input.onchange = function(event) {
    event.target.setAttribute('pattern', pattern);
};

