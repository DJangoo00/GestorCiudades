export function mostrarCiudad(ciudades, departamentos) {
    let tbodyPuntos = document.getElementById("tbodyPuntos");
    tbodyPuntos.innerHTML = "";

    ciudades.forEach((ciudad) => {
        let tr = document.createElement("tr");
        tr.setAttribute("id", `${ciudad.id}`);
        tr.setAttribute("class", "tr");
        tr.innerHTML = `
        <td>${ciudad.id}</td>
        <td>${ciudad.nomCiudad}</td>
        <td>${getDepartamentoName(ciudad.departamentoId, departamentos)}</td>
        <td>${ciudad.imagen}</td>
        <td>Latitud: ${ciudad.coordenadas.lat}, Longitud: ${ciudad.coordenadas.lon}</td>
        <td>${displayData(ciudad.nomCiudad)}</td>
        <td>
            <button type="submit" data-accion="EliminarPunto" class="btn btn-danger py-1 me-3"><img src="../img/icons/trash3-fill.svg" alt=""></button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#modalModificarPunto" data-accion="ActualizarPunto" class="btn btn-warning py-1"><img src='../img/icons/pencil-square.svg'></button>
        </td>
        `;

        tbodyPuntos.appendChild(tr);
    });
}

function getDepartamentoName(departamentosId, departamentos) {
    const departamento = departamentos.find((ruta) => ruta.id === departamentosId);
    return departamento ? departamento.nomDepartamento : "Departamento no encontrado";
}
