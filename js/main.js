import {
    getDepartamento,
    postDepartamento,
    actualizarDepartamento,
    deleteDepartamento,
    getCiudad,
    postCiudad,
    actualizarCiudad,
    deleteCiudad
} from "./conectionOwnApi";

document.addEventListener("DOMContentLoaded", () => {
    getDepartamento().then(() => {
        getCiudad();
    });
});

let form = document.querySelector("#form");
let tbodyRutas = document.querySelector("#tbodyRutas");
let formActualizar = document.querySelector("#formActualizar");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));

    let accion = e.submitter.dataset.accion;

    if (accion === "Registrar") {
        postDepartamento(data);
    }
});

tbodyRutas.addEventListener("click", (e) => {
    e.preventDefault();

    let tr = e.target.closest("tr");
    let id = tr.id;

    let accion = e.target.dataset.accion;

    if (accion === "Eliminar") {
        deleteDepartamento(tr, id);
        tr.remove();
    } else if (accion === "Actualizar") {
        formActualizar.addEventListener("submit", (e) => {
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));
            actualizarDepartamento(data, id);
        });
    }
});

let formPuntos = document.querySelector("#formPuntos");
let tbodyPuntos = document.querySelector("#tbodyPuntos");
let formActualizarPunto = document.querySelector("#formActualizarPunto");

formPuntos.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));

    data.rutaId = parseInt(data.rutaId, 10);

    let accion = e.submitter.dataset.accion;

    if (accion === "RegistrarPunto") {
        postCiudad(data);
    }
});

tbodyPuntos.addEventListener("click", (e) => {
    e.preventDefault();

    let tr = e.target.closest("tr");
    let id = tr.id;

    let accion = e.target.dataset.accion;

    if (accion === "EliminarPunto") {
        deleteCiudad(tr, id);
        tr.remove();
    } else if (accion === "ActualizarPunto") {
        formActualizarPunto.addEventListener("submit", (e) => {
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));
            actualizarCiudad(data, id);
        });
    }
});
