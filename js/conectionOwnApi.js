import mostrarDepartamento from "./mostrarDepartamento.js";
import mostrarCiudad from "./mostrarCiudad.js";

const URL = "http://localhost:3000";
const header = new Headers({ "Content-Type": "application/json" });

export async function getDepartamento() {
    let data = await (await fetch(`${URL}/Departamentos`)).json();
    mostrarDepartamento(data);
}

export async function postDepartamento(data) {
    let config = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data),
    };
    let departamentos = await (await fetch(`${URL}/Departamentos`, config)).json();
}

export async function actualizarDepartamento(data, id) {
    let config = {
        method: "PUT",
        headers: header,
        body: JSON.stringify(data),
    };
    let act = await (await fetch(`${URL}/Departamentos/${id}`, config)).json();
}

export async function deleteDepartamento(tr, id) {
    let data = Object.fromEntries(new FormData(tr.target));
    let config = {
        method: "DELETE",
        headers: header,
        body: JSON.stringify(data),
    };
    let del = await (await fetch(`${URL}/Departamentos/${id}`, config)).json();
}
export async function getCiudad() {
    let ciudades = await (await fetch(`${URL}/Ciudades`)).json();
    let departamentos = await (await fetch(`${URL}/Departamentos`)).json();
    mostrarCiudad(ciudades, departamentos);
    const selectDepartamentos = document.getElementById("departamentoId");
    const selectDepartamentosModal = document.getElementById("departamentoIdPunto");
    departamentos.forEach((departamento) => {
        const option = document.createElement("option");
        option.value = departamento.id;
        option.textContent = departamento.nomDepartamento;
        selectDepartamentos.appendChild(option);
        const optionModal = document.createElement("option");
        optionModal.value = departamento.id;
        optionModal.textContent = departamento.nomDepartamento;
        selectDepartamentosModal.appendChild(optionModal);
    });
}

export async function postCiudad(data) {
    let config = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data),
    };
    let ciudades = await (await fetch(`${URL}/Ciudades`, config)).json();
}

export async function actualizarCiudad(data, id) {
    data.departamentoId = parseInt(data.departamentoId);
    let config = {
        method: "PUT",
        headers: header,
        body: JSON.stringify(data),
    };
    let act = await (await fetch(`${URL}/Ciudades/${id}`, config)).json();
}

export async function deleteCiudad(tr, id) {
    let data = Object.fromEntries(new FormData(tr.target));
    let config = {
        method: "DELETE",
        headers: header,
        body: JSON.stringify(data),
    };
    let del = await (await fetch(`${URL}/Ciudades/${id}`, config)).json();
}
