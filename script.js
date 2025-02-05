function zeigeNachricht() {
    alert("🚀 Du hast auf den Button geklickt!");
}
function zeigeHerzExplosion(event) {
    // Stelle sicher, dass die Position auch auf dem Handy funktioniert
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;

    const herz = document.createElement("div");
    herz.innerHTML = "💖";
    herz.style.position = "absolute";
    herz.style.left = x + "px";
    herz.style.top = y + "px";
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

// Event für PC (Mausklick) & Handy (Touch)
document.addEventListener("click", zeigeHerzExplosion);
document.addEventListener("touchstart", zeigeHerzExplosion);

