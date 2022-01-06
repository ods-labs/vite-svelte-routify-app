<script>
</script>

<div class="grid">
<slot></slot>
</div>

<style lang="scss">
    .grid { 
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-gap: 20px;
    }

</style>