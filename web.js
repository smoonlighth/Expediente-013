// =========================
// ELEMENTOS GENERALES
// =========================

const archivoCentral = document.getElementById("ArchivoCentral");
const indice = document.getElementById("Indice");


// =========================
// PANTALLA INICIAL / POPUP 1
// =========================

const btnAcceder = document.getElementById("btn-acceder");

const popup1 = document.getElementById("popup1");

const password1 = document.getElementById("password1");

const confirmar1 = document.getElementById("confirmar1");

const error1 = document.getElementById("error1");


// =========================
// PANTALLAS
// =========================

const origen = document.getElementById("Origen");

const evidencia001 =
    document.getElementById("Evidencia001");

const desarrollo =
    document.getElementById("Desarrollo");

const evidencia002 =
    document.getElementById("Evidencia002");

const evolucion =
    document.getElementById("Evolucion");

const evidencia003 =
    document.getElementById("Evidencia003");

const archivoRestringido =
    document.getElementById("ArchivoRestringido");

const archivoRestringido2 =
    document.getElementById("ArchivoRestringido2");

const bonus =
    document.getElementById("Bonus");


// =========================
// POPUP 2
// =========================

const popup2 =
    document.getElementById("popup2");

const password2 =
    document.getElementById("password2");

const error2 =
    document.getElementById("error2");


// =========================
// ARCHIVO CENTRAL → POPUP 1
// =========================

btnAcceder.addEventListener("click", function () {

    popup1.classList.add("activo");

    password1.focus();

});


// =========================
// COMPROBAR CONTRASEÑA 1
// =========================

function comprobarPassword1() {

    const clave =
        password1.value.toLowerCase().trim();

    if (clave === "merlotcita") {

        error1.style.display = "none";

        popup1.classList.remove("activo");

        archivoCentral.style.display = "none";

        indice.style.display = "flex";

    } else {

        error1.style.display = "block";

    }

}


// CLICK EN CONFIRMAR

confirmar1.addEventListener("click", function () {

    comprobarPassword1();

});


// ENTER

password1.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        comprobarPassword1();

    }

});


// BORRAR ERROR AL ESCRIBIR

password1.addEventListener("input", function () {

    error1.style.display = "none";

});


// ==================================================
// ÍNDICE → ORIGEN
// ==================================================

const btnOrigen =
    document.getElementById("btn-origen");

btnOrigen.addEventListener("click", function () {

    indice.style.display = "none";

    origen.style.display = "block";

});


// ==================================================
// ORIGEN → EVIDENCIA 001
// ==================================================

const btnEvidenciaOrigen =
    document.getElementById("btn-evidencia-origen");

btnEvidenciaOrigen.addEventListener("click", function () {

    origen.style.display = "none";

    evidencia001.style.display = "block";

});


// ==================================================
// EVIDENCIA 001 → DESARROLLO
// ==================================================

const btnVerDesarrollo =
    document.getElementById("btn-ver-desarrollo");

btnVerDesarrollo.addEventListener("click", function () {

    evidencia001.style.display = "none";

    desarrollo.style.display = "block";

});


// ==================================================
// ÍNDICE → DESARROLLO
// ==================================================

const btnDesarrollo =
    document.getElementById("btn-desarrollo");

btnDesarrollo.addEventListener("click", function () {

    indice.style.display = "none";

    desarrollo.style.display = "block";

});


// ==================================================
// DESARROLLO → EVIDENCIA 002
// ==================================================

const btnEvidenciaDesarrollo =
    document.getElementById("btn-ver-evidencia-desarrollo");

btnEvidenciaDesarrollo.addEventListener("click", function () {

    desarrollo.style.display = "none";

    evidencia002.style.display = "block";

});


// ==================================================
// EVIDENCIA 002 → EVOLUCIÓN
// ==================================================

const btnVerEvolucion =
    document.getElementById("btn-ver-evolucion");

btnVerEvolucion.addEventListener("click", function () {

    evidencia002.style.display = "none";

    evolucion.style.display = "block";

});


// ==================================================
// ÍNDICE → EVOLUCIÓN
// ==================================================

const btnEvolucion =
    document.getElementById("btn-evolucion");

btnEvolucion.addEventListener("click", function () {

    indice.style.display = "none";

    evolucion.style.display = "block";

});


// ==================================================
// EVOLUCIÓN → EVIDENCIA 003
// ==================================================

const btnEvidenciaEvolucion =
    document.getElementById("btn-ver-evidencia-evolucion");

btnEvidenciaEvolucion.addEventListener("click", function () {

    evolucion.style.display = "none";

    evidencia003.style.display = "block";

});


// ==================================================
// EVIDENCIA 003 → POPUP 2
// ==================================================

const btnArchivoRestringido =
    document.getElementById("btn-archivo-restringido");

btnArchivoRestringido.addEventListener("click", function () {

    popup2.classList.add("activo");

    password2.value = "";

    error2.style.display = "none";

    password2.focus();

});


// ==================================================
// ÍNDICE → POPUP 2
// ==================================================

const btnRestringido =
    document.getElementById("btn-restringido");

btnRestringido.addEventListener("click", function () {

    popup2.classList.add("activo");

    password2.value = "";

    error2.style.display = "none";

    password2.focus();

});


// ==================================================
// COMPROBAR CONTRASEÑA 2
// ==================================================

function comprobarPassword2() {

    const clave =
        password2.value.toLowerCase().trim();

    if (clave === "comida y vino") {

        error2.style.display = "none";

        popup2.classList.remove("activo");

        // Puede venir desde el índice
        indice.style.display = "none";

        // O desde Evidencia 003
        evidencia003.style.display = "none";

        // Mostrar archivo secreto
        archivoRestringido.style.display = "block";

    } else {

        error2.style.display = "block";

    }

}


// ENTER PARA CONTRASEÑA 2

password2.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        comprobarPassword2();

    }

});


// BORRAR ERROR AL VOLVER A ESCRIBIR

password2.addEventListener("input", function () {

    error2.style.display = "none";

});


// ==================================================
// TODOS LOS BOTONES → VOLVER AL ÍNDICE
// ==================================================

const botonesVolver =
    document.querySelectorAll(".btn-volver");

botonesVolver.forEach(function (boton) {

    boton.addEventListener("click", function () {

        // Busca la pantalla en la que está el botón
        const pantallaActual = boton.parentElement;

        // Oculta esa pantalla
        pantallaActual.style.display = "none";

        // Muestra el índice
        indice.style.display = "flex";

    });

});

// =========================
// ARCHIVO RESTRINGIDO → ARCHIVO RESTRINGIDO 2
// =========================

const btnArchivoRestringido2 =
    document.getElementById("btn-archivo-restringido2");

btnArchivoRestringido2.addEventListener("click", function () {

    archivoRestringido.style.display = "none";

    archivoRestringido2.style.display = "block";

});

// =========================
// ARCHIVO RESTRINGIDO 2 → BONUS
// =========================

const btnBonus =
    document.getElementById("btn-bonus");

btnBonus.addEventListener("click", function () {

    archivoRestringido2.style.display = "none";

    bonus.style.display = "block";

});