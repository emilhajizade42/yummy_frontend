const mobilnav_toggle = document.querySelector("#mobilnav_toggle");
const mobilnav = document.querySelector(".mobilnav");
const mobilnav_cancel = document.querySelector(".mobilnav_cancel");
mobilnav_toggle.addEventListener("click",function (e) {
    mobilnav.style.display="block";
});
mobilnav_cancel.addEventListener("click",function (e) {
    mobilnav.style.display="none";
});