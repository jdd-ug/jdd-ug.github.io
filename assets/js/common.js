/** リンクする時のタブ開き方 _new _target */
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a[href^='http']:not([href*='" + window.location.hostname + "'])");
    links.forEach(function (link) {
        link.setAttribute('target', '_new');
    });
});

