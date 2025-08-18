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
        cedula: document.getElementById("cedula").value,
        telefono: document.getElementById("telefono").value,
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

document.addEventListener("DOMContentLoaded", function () {

    const cedulaInput = document.getElementById("cedula");
    const nombreInput = document.getElementById("nombre");

    cedulaInput.addEventListener("blur", async () => {
        const cedula = cedulaInput.value.trim().replace(/-/g, '');
        if (cedula === "") return;

        try {

            const response = await fetch(`https://api.hacienda.go.cr/fe/ae?identificacion=${cedula}`);

            if (!response.ok) {
                throw new Error("No se puedo consultar la Cédula");
            }

            const data = await response.json();
            console.log("Respuesta API:", data);

            if (data.nombre) {
                nombreInput.value = data.nombre;
            } else {
                alert("No se encontró nombre para esta cédula.");
            }
        } catch (error) {
            console.error(error);
        } 
       

    });

});




