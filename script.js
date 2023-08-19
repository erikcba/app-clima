let api_key = '0d622289b4bc54488d5f40cc2404ca96'
const urlBase = 'https://api.openweathermap.org/data/2.5/weather'


const botonBusqueda = document.getElementById('botonBusqueda')



botonBusqueda.addEventListener('click', () => {  
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}&units=metric`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))

}

function mostrarDatosClima(data){
    
    const divClima = document.getElementById('datosClima')
    divClima.innerHTML = ''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura)}º`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descriptionTemp = document.createElement('p')
    descriptionTemp.textContent = descripcion

    divClima.appendChild(ciudadTitulo)
    divClima.appendChild(temperaturaInfo)
    divClima.appendChild(humedadInfo)
    divClima.appendChild(iconoInfo)
    divClima.appendChild(descriptionTemp)
}