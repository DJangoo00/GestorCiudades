export default function mostrarDepartamento(data) {
    let tbodyDepartamentos = document.getElementById("tbodyDepartamentos");
    tbodyDepartamentos.innerHTML = "";
    data.forEach((departamento) => {
        let tr = document.createElement("tr");
        tr.setAttribute("id", `${departamento.id}`);
        tr.setAttribute("class", "tr");
        tr.innerHTML = `
        <td>${departamento.id}</td>
        <td>${departamento.nomDepartamento}</td>
        <td>
        <button type="submit" data-accion="Eliminar" class="btn btn-danger py-1 me-3"><img src='../img/icons/trash3-fill.svg'></button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#modalModificar" data-accion="Actualizar" class="btn btn-warning py-1"><img src='../img/icons/pencil-square.svg'></button>
        </td>
        `;
        tbodyDepartamentos.appendChild(tr);
    });
}
