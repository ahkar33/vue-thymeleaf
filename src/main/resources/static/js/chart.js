const getData = async () => {
    const res = await axios.get('http://localhost:8080/findAllUsers');
    const resData = res.data;
    let myChart = document.getElementById('myChart').getContext('2d');
    let names = [];
    let data = [];
    resData.forEach(user => {
        names.push(user.userName)
        data.push(user.userId)
    });

    let massPopChart = new Chart(myChart, {
        type: 'bar', // bar, horizontalBar, pie ...
        data: {
            labels: names,
            datasets: [{
                label: 'Number of News',
                data: data, // number of news per reporter
                // backgroundColor: [...color],
                backgroundColor: 'lightblue',
                borderWidth: 1, // boder thickness of the bar
                borderColor: '#777',
                hoverBorderWidth: 2,
                hoverBorderColor: 'black'
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'News and Reporter Chart',
                    font: {
                        size: 25
                    }
                },
                legend: {
                    // display: false, // hide label
                    position: 'right', // move label to right side of chart
                },
                tooltips: {
                    enabled: false
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            },
        }
    });
}

getData();



