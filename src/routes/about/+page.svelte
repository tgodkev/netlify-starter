
<script lang="ts">
    import type { PageData } from './$types';
   export let data: PageData;
    export let {route} = data;
    $: ({route} = data);

console.log(route, "this is the about route")
</script>

