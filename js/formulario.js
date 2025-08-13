emailjs.init("wIMZCAZk52r0h0oSt");

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;

    }

    return edad;
}

document.getElementById("fecha_nacimiento").addEventListener("change", function () {
    document.getElementById("edad").value = calcularEdad(this.value);
});

document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fecha = document.getElementById("fecha_nacimiento").value;
    document.getElementById("edad").value = calcularEdad(fecha);

    const datos =
    {
        to_name: document.getElementById("nombre").value,
        to_email: document.getElementById("email").value,
        fecha_nacimiento: fecha,
        edad: document.getElementById("edad").value,
        ingresos: document.getElementById("ingresos").value,
        genero: document.querySelector("input[name='genero']:checked").value,
        grado: Array.from(document.getElementById("grado").selectedOptions)
            .map((o) => o.value)
            .join(", "),
    };

    emailjs
        .send("service_i15lban", "template_co0nfmn", datos)
        .then(() => {
            alert("Registo exitoso. Te hemos enviado un correo de bienvenida.");
            this.reset();

        })
        .catch((error) => {
            alert("Error al enviar: " + JSON.stringify(error));
            console.error("EmailJS error:", error);
        });

});




