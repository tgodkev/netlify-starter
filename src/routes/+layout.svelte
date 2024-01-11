<script lang="ts">
    import "../app.css";
    export let data;
    export let menu = data;
    $: ({menu} = data)
    

    console.log(menu);
</script>

<slot />
