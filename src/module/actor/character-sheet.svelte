<script lang="ts">
    import Name from '../components/Name.svelte';

    export let sheetData;
    const {actor, data} = sheetData;

    console.log({actor})
</script>
<h1>Tiny D6 </h1>
<Name {actor}/>

<style>
    h1 {
        color: red;
    }
</style>
