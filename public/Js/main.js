const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');

const city_name= document.getElementById('city_name');

const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `please search the city name`;
        datahide.classList.add('data_hide');

    }else{
        try{
            let url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a98f40fcfd3e2469d7bd0b88eafc7aed`
            const response = await fetch(url);
            const data = await response.json ();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_val.innerText = arrData[0].main.temp;
            const tempweather = arrData[0].weather[0].main;            

            //condition to check sunny or cloud
            if(tempweather == "Clear"){
                "<i class = 'fas fa-sun' style = 'color: #fdd017;'</i>"
            } else if(tempweather == "Clouds") {
                temp_status.innerHTML =
                "<i class = 'fas fa-cloud' style = 'color: #909193;'</i>"    
            } else if(tempweather == "Rain") {
                temp_status.innerHTML =
                "<i class = 'fas fa-rain' style = 'color: #626972;'</i>"    
            } else {
                temp_status.innerHTML = 
                "<i class = 'fas fa-sun' style = 'color: #fdd017;'</i>"
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `please search the city name`;
            datahide.classList.add('data_hide');
        }
            
    }

}

submitBtn.addEventListener('click', getInfo);