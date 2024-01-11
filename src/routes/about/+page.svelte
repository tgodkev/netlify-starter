
<script lang="ts">
    import type { PageData } from './$types';
   export let data: PageData;
    export let {route} = data;
    $: ({route} = data);


</script>


  {#if route}
    {@const {title, content, heroImage} = route[0]}


    <h2>{title}</h2>
      <p>{content}</p>
      <img src={heroImage} alt="A guy holding code">
  {/if}
