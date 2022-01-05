<script>
    let world = 'World !';
</script>

<div class="content">
    <h1>Hello { world }</h1>
    <p>Lorem ipsum...</p>
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
</style>