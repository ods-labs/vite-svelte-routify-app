<script>
    import {ApiClient, fromCatalog} from "@opendatasoft/api-client";

    let test1 = [];

    const client = new ApiClient({domain: 'fpassaniti'});
    let query = fromCatalog().dataset('pastedtext').records().limit(1);
    client.get(query)
        .then(res => res)
        .then(res => test1 = res.records)
        .catch(err => {
            console.log(err);
        });
</script>

<div class="content">
    <ul>
        <li>{JSON.stringify(test1)}</li>
    </ul>
</div>

<style lang="scss">
  @import "./src/styles/variables";
</style>