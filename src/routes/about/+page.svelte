
<script lang="ts">
    import type { PageData } from './$types';
   export let data: PageData;
    export let {route} = data;
    $: ({route} = data);

console.log(route, "this is the about route")
</script>


  {#if route}
    {@const {title, content, heroImage} = route[0]}


    <h2>{title}</h2>
  {/if}
