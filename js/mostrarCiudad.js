export default function mostrarCiudad(ciudades, departamentos) {
    let tbodyPuntos = document.getElementById("tbodyPuntos");
    tbodyPuntos.innerHTML = "";

    puntos.forEach((ciudad) => {
        let tr = document.createElement("tr");
        tr.setAttribute("id", `${ciudad.id}`);
        tr.setAttribute("class", "tr");
        tr.innerHTML = `
        <td>${ciudad.id}</td>
        <td>${ciudad.nomCiudad}</td>
        <td>${getRutaNombre(punto.rutaId, rutas)}</td>
        <td>
        <button type="submit" data-accion="EliminarPunto" class="btn btn-danger py-1 me-3"><img src="../img/icons/trash3-fill.svg" alt=""></button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#modalModificarPunto" data-accion="ActualizarPunto" class="btn btn-warning py-1"><img src='../img/icons/pencil-square.svg'></button>
        </td>
        `;

        tbodyPuntos.appendChild(tr);
    });
}

function getRutaNombre(rutaId, rutas) {
    const ruta = rutas.find((ruta) => ruta.id === rutaId);
    return ruta ? ruta.ruta : "Ruta no encontrada";
}
