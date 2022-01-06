<script>
      export let nom;
      export let capaTotale;
      export let capaLibre;
      export let etat;

</script>
<div class="cell">
<h2>{nom}</h2>
<h3>État remplissage : {etat}</h3>
<p><strong>Capacité totale : </strong>{capaTotale}</p>
<p><strong>Places disponibles  : </strong>{capaLibre}</p>
</div>
<style lang="scss">
.cell {
 border: 1px solid grey;
 border-radius: 5px;
 padding: 10px 50px;
}
</style>