import {nameOfDay} from './nameOfDay.js';
import {nameOfMonth} from './nameOfMonth.js';
import {otherDays} from './otherDays.js';
import {drawChart} from './drawChart.js';


document.getElementById('cityInput').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
})

document.getElementById('submit').addEventListener('click', function (event) {
    let cityInput = document.getElementById('cityInput').value;

    let d = new Date();
    let today = d.getDay();
    let thisDay = d.getDate();
    let thisMonth = d.getMonth();
    let thisYear = d.getFullYear();
    let thisHour = d.getHours();

    let todayPlusOne = today + 1;
    let todayPlusTwo = today + 2;
    let todayPlusThree = today + 3;
    let todayPlusFour = today + 4;
    let todayPlusFive = today + 5;

    // import {nameOfDay} from './modules.js';


    // function nameOfDay(day) {
    //     switch (day) {
    //         case 1:
    //         case 8:
    //             return "Monday";
    //         case 2:
    //         case 9:
    //             return "Tuesday";
    //         case 3:
    //         case 10:
    //             return "Wednesday";
    //         case 4:
    //         case 11:
    //             return "Thursday";
    //         case 5:
    //         case 12:
    //             return "Friday";
    //         case 6:
    //         case 13:
    //             return "Saturday";
    //         case 7:
    //         case 14:
    //             return "Sunday";
    //         default:
    //             console.error(
    //                 "The day provided is invalid, it should be a number between 1 and 14"
    //             );
    //             break;
    //     }
    // }


    // function nameOfMonth(month) {
    //     if (month == 1) {
    //         return `January`;
    //     } else if (month == 2) {
    //         return `February`;
    //     } else if (month == 3) {
    //         return `March`;
    //     } else if (month == 4) {
    //         return `April`;
    //     } else if (month == 5) {
    //         return `May`;
    //     } else if (month == 6) {
    //         return `June`;
    //     } else if (month == 7) {
    //         return `July`;
    //     } else if (month == 8) {
    //         return `August`;
    //     } else if (month == 9) {
    //         return `September`;
    //     } else if (month == 10) {
    //         return `October`;
    //     } else if (month == 11) {
    //         return `November`;
    //     } else if (month == 12) {
    //         return `December`;
    //     }
    // }

    document.getElementById('date').textContent = `${nameOfDay(today)}, ${nameOfMonth(thisMonth)} ${thisDay}, ${thisYear}`;
    document.getElementById("dayOneName").textContent = `${nameOfDay(todayPlusOne)}`;
    document.getElementById("dayTwoName").textContent = nameOfDay(todayPlusTwo);
    document.getElementById("dayThreeName").textContent = nameOfDay(todayPlusThree);
    document.getElementById("dayFourName").textContent = nameOfDay(todayPlusFour);
    document.getElementById("dayFiveName").textContent = nameOfDay(todayPlusFive);

    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=2b8bf456ab6507141e76c0f4ea10884b
`


    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log(data);

            // HEADER
            document.getElementById('cityCountryName').textContent = `${data.city.name}, ${data.city.country}`;

            // MAIN DAY INFO
            document.getElementById('temperature').textContent = `${Math.round(data.list[0].main.temp)}°`;
            document.getElementById('description').textContent = `${data.list[0].weather[0].description}`;
            document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`;

            // MAIN DAY EXTRA
            document.getElementById('windSpeed').textContent = `Wind: ${Math.round(data.list[0].wind.speed)} km/h`;
            document.getElementById('humidity').textContent = `Humidity: ${data.list[0].main.humidity}%`;

            // OTHER DAYS
            // check the time when city is inputted and change the index of the data to always show the min and max temp of the day and the icon of 12 o'clock
            otherDays(thisHour, data);
            // if (thisHour < 3) {
            //     //Day one
            //     document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`;
            //     document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[9].main.temp_min)}°C ${Math.round(data.list[13].main.temp_max)}°C`;
            //     //Day two
            //     document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`;
            //     document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[17].main.temp_min)}°C ${Math.round(data.list[21].main.temp_max)}°C`;
            //     //Day three
            //     document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`;
            //     document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[25].main.temp_min)}°C ${Math.round(data.list[29].main.temp_max)}°C`;
            //     //Day four
            //     document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[33].main.temp_min)}°C ${Math.round(data.list[37].main.temp_max)}°C`;
            //     //Day five
            //     document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[39].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
            // } else if (thisHour < 6) {
            //     //Day one
            //     document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png`;
            //     document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[8].main.temp_min)}°C ${Math.round(data.list[12].main.temp_max)}°C`;
            //     //Day two
            //     document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png`;
            //     document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[16].main.temp_min)}°C ${Math.round(data.list[20].main.temp_max)}°C`;
            //     //Day three
            //     document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png`;
            //     document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[24].main.temp_min)}°C ${Math.round(data.list[28].main.temp_max)}°C`;
            //     //Day four
            //     document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[32].main.temp_min)}°C ${Math.round(data.list[36].main.temp_max)}°C`;
            //     //Day five
            //     document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[39].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
            // } else if (thisHour < 9) {
            //     //Day one
            //     document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`;
            //     document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[7].main.temp_min)}°C ${Math.round(data.list[11].main.temp_max)}°C`;
            //     //Day two
            //     document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png`;
            //     document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[15].main.temp_min)}°C ${Math.round(data.list[19].main.temp_max)}°C`;
            //     //Day three
            //     document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[26].weather[0].icon}@2x.png`;
            //     document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[23].main.temp_min)}°C ${Math.round(data.list[27].main.temp_max)}°C`;
            //     //Day four
            //     document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[34].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[31].main.temp_min)}°C ${Math.round(data.list[35].main.temp_max)}°C`;
            //     //Day five
            //     document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[39].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
            // } else if (thisHour < 12) {
            //     //Day one
            //     document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`;
            //     document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[6].main.temp_min)}°C ${Math.round(data.list[10].main.temp_max)}°C`;
            //     //Day two
            //     document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`;
            //     document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[14].main.temp_min)}°C ${Math.round(data.list[18].main.temp_max)}°C`;
            //     //Day three
            //     document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png`;
            //     document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[22].main.temp_min)}°C ${Math.round(data.list[26].main.temp_max)}°C`;
            //     //Day four
            //     document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[30].main.temp_min)}°C ${Math.round(data.list[34].main.temp_max)}°C`;
            //     //Day five
            //     document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[38].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
            // } else if (thisHour < 15) {
            //     //Day one
            //     document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
            //     document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[5].main.temp_min)}°C ${Math.round(data.list[9].main.temp_max)}°C`;
            //     //Day two
            //     document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
            //     document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[13].main.temp_min)}°C ${Math.round(data.list[17].main.temp_max)}°C`;
            //     //Day three
            //     document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
            //     document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[21].main.temp_min)}°C ${Math.round(data.list[25].main.temp_max)}°C`;
            //     //Day four
            //     document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[29].main.temp_min)}°C ${Math.round(data.list[33].main.temp_max)}°C`;
            //     //Day five
            //     document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[37].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
            // } else if (thisHour < 18) {
            //     //Day one
            //     document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`;
            //     document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[4].main.temp_min)}°C ${Math.round(data.list[8].main.temp_max)}°C`;
            //     //Day two
            //     document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`;
            //     document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[12].main.temp_min)}°C ${Math.round(data.list[16].main.temp_max)}°C`;
            //     //Day three
            //     document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`;
            //     document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[20].main.temp_min)}°C ${Math.round(data.list[24].main.temp_max)}°C`;
            //     //Day four
            //     document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[28].main.temp_min)}°C ${Math.round(data.list[32].main.temp_max)}°C`;
            //     //Day five
            //     document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[36].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
            // } else if (thisHour < 21) {
            //     //Day one
            //     document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`;
            //     document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[3].main.temp_min)}°C ${Math.round(data.list[7].main.temp_max)}°C`;
            //     //Day two
            //     document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`;
            //     document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[11].main.temp_min)}°C ${Math.round(data.list[15].main.temp_max)}°C`;
            //     //Day three
            //     document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png`;
            //     document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[19].main.temp_min)}°C ${Math.round(data.list[23].main.temp_max)}°C`;
            //     //Day four
            //     document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[27].main.temp_min)}°C ${Math.round(data.list[31].main.temp_max)}°C`;
            //     //Day five
            //     document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[38].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[35].main.temp_min)}°C ${Math.round(data.list[39].main.temp_max)}°C`;
            // } else if (thisHour < 24) {
            //     //Day one
            //     document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`;
            //     document.getElementById('dayOneMinMaxTemp').textContent = `${Math.round(data.list[2].main.temp_min)}°C ${Math.round(data.list[6].main.temp_max)}°C`;
            //     //Day two
            //     document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`;
            //     document.getElementById('dayTwoMinMaxTemp').textContent = `${Math.round(data.list[10].main.temp_min)}°C ${Math.round(data.list[14].main.temp_max)}°C`;
            //     //Day three
            //     document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`;
            //     document.getElementById('dayThreeMinMaxTemp').textContent = `${Math.round(data.list[18].main.temp_min)}°C ${Math.round(data.list[22].main.temp_max)}°C`;
            //     //Day four
            //     document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFourMinMaxTemp').textContent = `${Math.round(data.list[26].main.temp_min)}°C ${Math.round(data.list[30].main.temp_max)}°C`;
            //     //Day five
            //     document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`;
            //     document.getElementById('dayFiveMinMaxTemp').textContent = `${Math.round(data.list[34].main.temp_min)}°C ${Math.round(data.list[38].main.temp_max)}°C`;
            // }

            // CHART WITH TEMPERATURE
            drawChart(data);

//submit form when 'Enter' key is pressed while in myInputID

        })
})