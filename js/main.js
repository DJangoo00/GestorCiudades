import {
    getDepartamento,
    postDepartamento,
    actualizarDepartamento,
    deleteDepartamento,
    getCiudad,
    postCiudad,
    actualizarCiudad,
    deleteCiudad
} from "./conectionOwnApi.js";

document.addEventListener("DOMContentLoaded", () => {
    getDepartamento().then(() => {
        getCiudad();
    });
});

let form = document.querySelector("#form");
let tbodyDepartamentos = document.querySelector("#tbodyDepartamentos");
let formActualizar = document.querySelector("#formActualizar");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let accion = e.submitter.dataset.accion;
    if (accion === "Registrar") {
        postDepartamento(data);
    }
});

tbodyDepartamentos.addEventListener("click", (e) => {
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

let formCiudades = document.querySelector("#formCiudades");
let tbodyCiudades = document.querySelector("#tbodyCiudades");
let formActualizarCiudad = document.querySelector("#formActualizarPunto");

formCiudades.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    data.departamentoId = parseInt(data.departamentoId, 10);
    let accion = e.submitter.dataset.accion;
    if (accion === "RegistrarPunto") {
        postCiudad(data);
    }
});

tbodyCiudades.addEventListener("click", (e) => {
    e.preventDefault();
    let tr = e.target.closest("tr");
    let id = tr.id;
    let accion = e.target.dataset.accion;
    if (accion === "EliminarPunto") {
        deleteCiudad(tr, id);
        tr.remove();
    } else if (accion === "ActualizarPunto") {
        formActualizarCiudad.addEventListener("submit", (e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            actualizarCiudad(data, id);
        });
    }
});