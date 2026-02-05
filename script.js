const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveNoButton() {
    noBtn.classList.add("wiggle");

    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    setTimeout(() => noBtn.classList.remove("wiggle"), 300);
}

/* Desktop */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Mobile */
noBtn.addEventListener("touchstart", moveNoButton);

/* YES CLICK */
yesBtn.addEventListener("click", () => {
    document.getElementById("questionScreen").classList.add("hidden");
    document.getElementById("yesScreen").classList.remove("hidden");

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 3 + Math.random() * 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }
});
