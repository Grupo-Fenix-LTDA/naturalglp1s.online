// Append URL params to ClickBank links
(function () {
    var params = window.location.search;
    if (!params) return;
    var extra = params.substring(1);
    document.querySelectorAll('a[href*="clickbank.net"]').forEach(function (el) {
        el.href = el.href + '&' + extra;
    });
})();

// Vturb: reveal products at pitch time (1:00:50)
var delaySeconds = 3650;
var player = document.querySelector("vturb-smartplayer");
player.addEventListener("player:ready", function () {
    player.displayHiddenElements(delaySeconds, [".invisible"], {
        persist: true,
    });
});
