function abrir_panel() {
	var panel = document.getElementById("panel");
	panel.style.visibility = "visible";
	panel.style.transform = "translatex(0)";
}

function cerrar_panel() {
	var panel = document.getElementById("panel");
	panel.style.visibility = "hidden";
	panel.style.transform = "translatex(100%)";
}

document.getElementById("boton_abrir_panel").addEventListener("click", abrir_panel);
document.getElementById("boton_cerrar_panel").addEventListener("click", cerrar_panel);
