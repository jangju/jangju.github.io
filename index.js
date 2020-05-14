'use strict';//정확히 고려되지 않은 기능들을 방지
function github_on(e) {
    window.open("https://github.com/jangju/Jang");
}

var modal_on = false;
var modal_youtube_on = false;
var modal = document.getElementsByClassName("modal");

/* Youtube Api*/
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
/* Youtube Api end*/

function youtube_on(e) {
    if (modal_on === false) {
        modal_on = true;
        modal[0].style.display = "flex";
    }
    if (e.length > 0) {
        this.youtube_link = e + "";
    }
    player = new YT.Player("player", {
        height: "1080",
        width: "1920",
        videoId: e,
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
    function onPlayerReady(event) {
        event.target.setVolume(10);
        event.target.setPlaybackQuality("hd720");
        event.target.playVideo();
    }
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.BUFFERING) {
            event.target.setPlaybackQuality("hd720"); // <-- WORKS!
        }
    }
}
function modal_off() {
    if (modal_on === true) {
        modal[0].style.display = "none";
        modal_on = false;
    }
    player.destroy(); // 유튜브 객체 삭제(페이지 렉 방지)
}