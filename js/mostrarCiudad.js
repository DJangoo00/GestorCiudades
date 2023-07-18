export default function mostrarCiudad(ciudades, departamentos) {
    let tbodyCiudades = document.getElementById("tbodyCiudades");
    tbodyCiudades.innerHTML = "";
    ciudades.forEach((ciudad) => {
        let tr = document.createElement("tr");
        tr.setAttribute("id", `${ciudad.id}`);
        tr.setAttribute("class", "tr");
        tr.innerHTML = `
        <td>${ciudad.id}</td>
        <td>${ciudad.nomCiudad}</td>
        <td>${getDepartamentoName(ciudad.departamentoId, departamentos)}</td>
        <td><img src="${ciudad.imagen}" class="imgCity" alt="${ciudad.nomCiudad}"></td>
        <td>Weather</td>
        <td>Latitud: ${ciudad.coordenadas.lat}, Longitud: ${ciudad.coordenadas.lon}</td>
        <td>
            <button type="submit" data-accion="EliminarPunto" class="btn btn-danger py-1 me-3"><img src="../img/icons/trash3-fill.svg" alt=""></button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#modalModificarPunto" data-accion="ActualizarPunto" class="btn btn-warning py-1"><img src='../img/icons/pencil-square.svg'></button>
        </td>
        `;
        tbodyCiudades.appendChild(tr);
    });
}

function getDepartamentoName(departamentosId, departamentos) {
    const departamento = departamentos.find((departamento) => departamento.id === departamentosId);
    return departamento ? departamento.nomDepartamento : "Departamento no encontrado";
}
