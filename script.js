document.addEventListener("DOMContentLoaded", function () {
    const character = document.getElementById("character");

    character.addEventListener("mouseenter", function () {
        character.style.backgroundImage = "url('character_hover.png')"; // 鼠标接近人物时切换人物图片
    });

    character.addEventListener("mouseleave", function () {
        character.style.backgroundImage = "url('character_normal.png')"; // 鼠标离开人物时切换回原始图片
    });
});
