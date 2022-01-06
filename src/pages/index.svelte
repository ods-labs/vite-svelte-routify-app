<script>
      import ods from "../utilities/ods";
      import config from "../config.json";
      import Grid from "../components/Grid.svelte";
      import Cell from "../components/Cell.svelte";
      import chartUtilities from "../utilities/chartUtilities";


      let errorMsg;
      let records = [];
      let charts = {};
      let search;
      let activeFilter;

 const getRecords = () => {
    ods.getRecords(config.domainid, config.datasetid)
    .then((res) => {
      console.log(res);
      records = res.records;
      errorMsg = undefined;
    })
    .catch((err) => {
      errorMsg = `Pas d'enregistrement (${err.message})`;
      records = [];
    });
  };

  getRecords();
    setInterval(getRecords, 60000);

    config.charts.forEach((chart) => {
      ods
      .getAggregates(
      config.domainid,
      config.datasetid,
      search,
      chart.axex,
      activeFilter,
      chart.expression
      )
      .then((resagg) => {
        if (charts[chart.id] == undefined) {
          charts[chart.id] = chartUtilities.createChart(
          chart.id,
          resagg,
          chart.title,
          chart.axex,
          chart.type,
          chart.expression
          );
        } else {
          chartUtilities.updateChart(
          charts[chart.id],
          resagg,
          chart.axex,
          chart.expression
          );
        }
        errorMsg = undefined;
      })
      .catch((err) => {
        // errorMsg = `Pas d'enregistrement pour le champ ${config.axex} (${err.message})`;
        console.error(
        `Pas d'enregistrement pour le champ ${config.axex} (${err.message})`
        );
        records = [];
      });
    });


</script>

<div class="content">
<h1>Occupation en temps réel des parkings
</h1>
<p>Strasbourg</p>
<div class="chart-containers">
  {#each config.charts as chart}
  <div class="chart-container">
    <canvas id={chart.id} />
  </div>
  {/each}
</div>
<Grid>
{#each records as record}
<Cell nom={record.record.fields.nom_parking} 
etat={record.record.fields.etat_descriptif}
capaTotale={record.record.fields.total} 
capaLibre={record.record.fields.libre}/>
{/each}
</Grid>

</div>

<style lang="scss">
  @import "./src/styles/variables";

  h1 {
    color: $primary;
    border-bottom: 2px solid $secondary;
  }

  h2 {
    color: $primary;
    border-bottom: 2px solid $secondary;
  }

  p {
    font-weight: 600;
  }

  .content {
  padding: 0% 10%;
  }


    
  .chart-containers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    width: 100%;
    gap: 10px;
    margin: 20px 0;
  

    .chart-container {
      position: relative;
      min-height: 300px; 
      max-height: 400px;
      border: 1px solid grey;
      border-radius: 5px;
      padding: 30px;
          }
  }
  
</style>