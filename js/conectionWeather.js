async function fetchData(ciudad) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=31700f3134ae203380e8430f4057d2c4&lang=es`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw 'Error al obtener los datos';
    }
}
async function displayData() {
    try {
        const data = await fetchData("bucaramanga");
        const dataContainer = document.getElementById('data-container');
        console.log(data);
        dataContainer.innerHTML = `<div class="card mb-3"  style="max-width: 540px;">
        <div class="row">
            <div class="col-md-3">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="img-fluid rounded-start" style="width: 100px;">
            </div>  
            <div class="col">
                <div class="card-body">
                    <p class="card-text">Estado: ${data.weather[0].main}</p>
                    <p class="card-text">Descripcion: ${data.weather[0].description}</p>
                </div>
            </div>
        </div>
    </div>`;
    } catch (error) {
        console.error(error);
    }
}

