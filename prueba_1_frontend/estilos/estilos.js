document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        let errores = [];

        if (nombre === "") {
            errores.push({ nivel: "error", campo: "Nombre requerido." });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(email)) {
            errores.push({ nivel: "error", campo: "Correo electrónico inválido. Debe contener '@' y un dominio válido (como .com)." });
        }

        if (direccion.length < 5) {
            errores.push({ nivel: "advertencia", campo: "La dirección parece demasiado corta." });
        }

        if (mensaje.length < 10) {
            errores.push({ nivel: "advertencia", campo: "Tu mensaje debería tener al menos 10 caracteres." });
        }

        if (errores.length > 0) {
            let mensajeError = "Se encontraron problemas:\n\n";
            errores.forEach(err => {
                mensajeError += (err.nivel === "error" ? "❌ " : "⚠️ ") + err.campo + "\n";
            });
            alert(mensajeError);
        } else {
            alert("✅ ¡Formulario enviado correctamente!");
            // this.submit(); // Descomenta para enviar realmente el formulario
        }
    });
});