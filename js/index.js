const ctx= document.getElementById('myChart');
// ctx.defaults.scale.ticks.beginAtZero =true;
function resize () {
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
}

let myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets:[
            {
                labels:'Points',
                backgroundColor:['#1cb99a','#3cb9dc','#ebeff2'],
                data:[40,25,30]
            }
        
        ]
    },
    options: {
        animation:{
            animateScale:true
        }
    }
});