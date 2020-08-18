export function otherDays(thisHour, data) {
    if (thisHour < 3) {
        //Day one
        document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`;
        document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[9].main.temp_min)}°C ${Math.round(data.list[13].main.temp_max)}°C`;
        //Day two
        document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`;
        document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[17].main.temp_min)}°C ${Math.round(data.list[21].main.temp_max)}°C`;
        //Day three
        document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`;
        document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[25].main.temp_min)}°C ${Math.round(data.list[29].main.temp_max)}°C`;
        //Day four
        document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`;
        document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[33].main.temp_min)}°C ${Math.round(data.list[37].main.temp_max)}°C`;
        //Day five
        document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
        document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[39].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
    } else if (thisHour < 6) {
        //Day one
        document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png`;
        document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[8].main.temp_min)}°C ${Math.round(data.list[12].main.temp_max)}°C`;
        //Day two
        document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png`;
        document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[16].main.temp_min)}°C ${Math.round(data.list[20].main.temp_max)}°C`;
        //Day three
        document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png`;
        document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[24].main.temp_min)}°C ${Math.round(data.list[28].main.temp_max)}°C`;
        //Day four
        document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@2x.png`;
        document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[32].main.temp_min)}°C ${Math.round(data.list[36].main.temp_max)}°C`;
        //Day five
        document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
        document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[39].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
    } else if (thisHour < 9) {
        //Day one
        document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`;
        document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[7].main.temp_min)}°C ${Math.round(data.list[11].main.temp_max)}°C`;
        //Day two
        document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png`;
        document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[15].main.temp_min)}°C ${Math.round(data.list[19].main.temp_max)}°C`;
        //Day three
        document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[26].weather[0].icon}@2x.png`;
        document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[23].main.temp_min)}°C ${Math.round(data.list[27].main.temp_max)}°C`;
        //Day four
        document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[34].weather[0].icon}@2x.png`;
        document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[31].main.temp_min)}°C ${Math.round(data.list[35].main.temp_max)}°C`;
        //Day five
        document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
        document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[39].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
    } else if (thisHour < 12) {
        //Day one
        document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`;
        document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[6].main.temp_min)}°C ${Math.round(data.list[10].main.temp_max)}°C`;
        //Day two
        document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`;
        document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[14].main.temp_min)}°C ${Math.round(data.list[18].main.temp_max)}°C`;
        //Day three
        document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png`;
        document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[22].main.temp_min)}°C ${Math.round(data.list[26].main.temp_max)}°C`;
        //Day four
        document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`;
        document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[30].main.temp_min)}°C ${Math.round(data.list[34].main.temp_max)}°C`;
        //Day five
        document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
        document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[38].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
    } else if (thisHour < 15) {
        //Day one
        document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
        document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[5].main.temp_min)}°C ${Math.round(data.list[9].main.temp_max)}°C`;
        //Day two
        document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
        document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[13].main.temp_min)}°C ${Math.round(data.list[17].main.temp_max)}°C`;
        //Day three
        document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
        document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[21].main.temp_min)}°C ${Math.round(data.list[25].main.temp_max)}°C`;
        //Day four
        document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
        document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[29].main.temp_min)}°C ${Math.round(data.list[33].main.temp_max)}°C`;
        //Day five
        document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
        document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[37].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
    } else if (thisHour < 18) {
        //Day one
        document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`;
        document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[4].main.temp_min)}°C ${Math.round(data.list[8].main.temp_max)}°C`;
        //Day two
        document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`;
        document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[12].main.temp_min)}°C ${Math.round(data.list[16].main.temp_max)}°C`;
        //Day three
        document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`;
        document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[20].main.temp_min)}°C ${Math.round(data.list[24].main.temp_max)}°C`;
        //Day four
        document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`;
        document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[28].main.temp_min)}°C ${Math.round(data.list[32].main.temp_max)}°C`;
        //Day five
        document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
        document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[36].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
    } else if (thisHour < 21) {
        //Day one
        document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`;
        document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[3].main.temp_min)}°C ${Math.round(data.list[7].main.temp_max)}°C`;
        //Day two
        document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`;
        document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[11].main.temp_min)}°C ${Math.round(data.list[15].main.temp_max)}°C`;
        //Day three
        document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png`;
        document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[19].main.temp_min)}°C ${Math.round(data.list[23].main.temp_max)}°C`;
        //Day four
        document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png`;
        document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[27].main.temp_min)}°C ${Math.round(data.list[31].main.temp_max)}°C`;
        //Day five
        document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[38].weather[0].icon}@2x.png`;
        document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[35].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
    } else if (thisHour < 24) {
        //Day one
        document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`;
        document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[2].main.temp_min)}°C ${Math.round(data.list[6].main.temp_max)}°C`;
        //Day two
        document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`;
        document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[10].main.temp_min)}°C ${Math.round(data.list[14].main.temp_max)}°C`;
        //Day three
        document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`;
        document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[18].main.temp_min)}°C ${Math.round(data.list[22].main.temp_max)}°C`;
        //Day four
        document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`;
        document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[26].main.temp_min)}°C ${Math.round(data.list[30].main.temp_max)}°C`;
        //Day five
        document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`;
        document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[34].main.temp_min)}°C ${Math.round(data.list[38].main.temp_max)}°C`;
    }
};

