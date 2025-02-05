function zeigeNachricht() {
    alert("🚀 Du hast auf den Button geklickt!");
}
function zeigeHerzExplosion() {
    const herz = document.createElement("div");
    herz.innerHTML = "💖";
    herz.style.position = "absolute";
    herz.style.left = Math.random() * window.innerWidth + "px";
    herz.style.top = Math.random() * window.innerHeight + "px";
    herz.style.fontSize = "50px";
    herz.style.opacity = "1";
    herz.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    
    document.body.appendChild(herz);
    
    setTimeout(() => {
        herz.style.opacity = "0";
        herz.style.transform = "scale(3)";
    }, 100);
    
    setTimeout(() => {
        herz.remove();
    }, 2000);
}
