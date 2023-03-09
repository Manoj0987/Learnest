const scrolltip = document.querySelector("#scrolltip")
        scrolltip.addEventListener("click", function() {
            window.scrollTo({top: 0, left: 0, behavior:"smooth"})
        })
        window.addEventListener("scroll", function(){
            if(window.scrollY >= 400) {
                scrolltip.style.opacity = 1;
            }
            else{
                scrolltip.style.opacity = 0;
            }
        })