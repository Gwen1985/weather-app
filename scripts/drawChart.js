export function drawChart(data) {

    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [`${data.list[0].dt_txt.slice(10, 16)}`, `${data.list[1].dt_txt.slice(10, 16)}`, `${data.list[2].dt_txt.slice(10, 16)}`, `${data.list[3].dt_txt.slice(10, 16)}`, `${data.list[4].dt_txt.slice(10, 16)}`, `${data.list[5].dt_txt.slice(10, 16)}`, `${data.list[6].dt_txt.slice(10, 16)}`, `${data.list[7].dt_txt.slice(10, 16)}`, `${data.list[8].dt_txt.slice(10, 16)}`, `${data.list[9].dt_txt.slice(10, 16)}`, `${data.list[10].dt_txt.slice(10, 16)}`, `${data.list[11].dt_txt.slice(10, 16)}`, `${data.list[12].dt_txt.slice(10, 16)}`],
            datasets: [{
                data: [Math.round(data.list[0].main.temp), Math.round(data.list[1].main.temp), Math.round(data.list[2].main.temp), Math.round(data.list[3].main.temp), Math.round(data.list[4].main.temp), Math.round(data.list[5].main.temp), Math.round(data.list[6].main.temp), Math.round(data.list[7].main.temp), Math.round(data.list[8].main.temp), Math.round(data.list[9].main.temp), Math.round(data.list[10].main.temp), Math.round(data.list[11].main.temp), Math.round(data.list[12].main.temp)],
                backgroundColor: 'rgb(52,157,243)',
                borderColor: 'rgb(255,255,255)',
                borderWidth: 3,
            },]
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        min: Math.round(data.list[0].main.temp) - 15,
                        max: Math.round(data.list[0].main.temp) + 15,
                        fontColor: 'rgba(255,255,255,0.6)',
                        display: false,
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontColor: 'rgba(255, 255, 255, 0.6)'
                    }
                }],
            },
            plugins: {
                datalabels: {
                    color: 'rgba(255, 66, 14, 1)',
                    align: 'top',
                    labels: {
                        title: {
                            font: {
                                size: '14',
                            }
                        }
                    }
                },

            }
        },
    });
}

