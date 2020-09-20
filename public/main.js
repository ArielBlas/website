window.onload = function() {
    window.onscroll = function () {
        scrollFunction();
    };
    var myNav = document.getElementById("myNav");
    function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            myNav.style.background = "#fff";
            myNav.style.color = "#aea";
            myNav.style.borderBottom = "1px solid #eee";
        } else {
            myNav.style.background = "transparent";
            myNav.style.color = "#fff";
            myNav.style.border = "none";
        }
    }
}