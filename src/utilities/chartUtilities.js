import Chart from "chart.js/auto";

const createChart = (chartId, resagg, title, axex, chartType) => {
    let labels = [];
    let values = [];
    let chartItems = resagg.records;
    // console.log(chartItems);
    labels = chartItems.map(chartItem => chartItem.record.fields[axex]);
    values = chartItems.map(chartItem => chartItem.record.fields.serie);
    // console.log(labels);

    // create the chart
    const ctx = document.getElementById(chartId).getContext("2d");
    let myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: values,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                ],
                borderWidth: 1,
            }, ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        },
    });
    // console.log(myChart);
    return myChart;
}

const updateChart = (myChart, resagg, axex) => {
    let labels = [];
    let values = [];
    let chartItems = resagg.records;
    labels = chartItems.map(chartItem => chartItem.record.fields[axex]);
    values = chartItems.map(chartItem => chartItem.record.fields.serie);
    myChart.data.datasets[0].data = values;
    myChart.data.labels = labels;
    myChart.update();
}

export default { createChart, updateChart }