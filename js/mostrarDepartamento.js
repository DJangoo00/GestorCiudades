export default function mostrarRuta(data) {
    let tbodyRutas = document.querySelector("#tbodyRutas");

    tbodyRutas.innerHTML = "";

    data.forEach((ruta) => {
        let tr = document.createElement("tr");
        tr.setAttribute("id", `${ruta.id}`);
        tr.setAttribute("class", "tr");
        tr.innerHTML = `
        <td>${ruta.id}</td>
        <td>${ruta.ruta}</td>
        <td>
        <button type="submit" data-accion="Eliminar" class="btn btn-danger py-1 me-3"><img src='../img/icons/trash3-fill.svg'></button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#modalModificar" data-accion="Actualizar" class="btn btn-warning py-1"><img src='../img/icons/pencil-square.svg'></button>
        </td>
        `;

        tbodyRutas.appendChild(tr);
    });
}
