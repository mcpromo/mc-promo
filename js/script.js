window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            preloader.style.pointerEvents = "none";

            // 💥 ВАЖНО: полностью удаляем из DOM
            setTimeout(() => {
                preloader.remove();
            }, 500);

        }, 600);
    }
});
