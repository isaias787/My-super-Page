document.getElementById("cambiarColor").addEventListener("click", function() {
    const colores = ["#ffcc00", "#ff5733", "#28a745", "#007bff", "#6f42c1"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
