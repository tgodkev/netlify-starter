<script lang="ts">
    import "../app.css";
    import Nav from "$lib/Nav.svelte";
    export let data;
    export let menu = data;
    $: ({menu} = data)
    

  
</script>

  <Nav {menu} />

<slot />
