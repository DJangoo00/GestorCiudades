async function fetchClima(ciudad) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=31700f3134ae203380e8430f4057d2c4&lang=es`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw 'Error al obtener los datos';
    }
}
async function displayData(ciudad) {
    try {
        const data = await fetchClima(ciudad);
        return `<div class="card-body">
                <p>Estado: ${data.weather[0].main}</p>
                <p>Descripcion: ${data.weather[0].description}</p>
            </div>
        `;
    } catch (error) {
        console.error(error);
    }
}
