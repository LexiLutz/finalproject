Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Most Visited Cities Price Comparison (2018)'
    },
    subtitle: {
        text: 'Source: <a href="https://newsroom.mastercard.com/wp-content/uploads/2019/09/GDCI-Global-Report-FINAL-1.pdf">Mastercard</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Average Daily Spend (USD)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Average Daily Spend (USD)</b>'
    },
    series: [{
        name: 'USD',
        data: [
            ['Dubai', 553],
            ['Barcelona', 301],
            ['Paris', 296],
            ['Singapore', 272],
            ['Phuket', 247],
            ['Palma de Mallorca', 233],
            ['Osaka', 223],
            ['Hong Kong SAR', 218],
            ['Tokyo', 196],
            ['Bankok', 184],
            ['Pattaya', 164],
            ['Seoul', 155],
            ['Milan', 155],
            ['New York', 152],
						['London', 148],
            ['New York', 152],
            ['Makkah', 135],
            ['Bali', 125],
 						['Istanbul', 106],
            ['Antalya', 44],


        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '10px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});

//International tourist arrivals charts

Highcharts.chart('container1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'International Tourist Arrivals (2017)'
    },
    xAxis: {
        categories: ['Europe', 'Middle East', 'Asia & the Pacific', 'Americas', 'Africa']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Million ($USD)'
        }
    },
    legend: {
        reversed: false
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'million ($USD)',
        data: [672, 58, 323, 211, 63],

    }]
});
