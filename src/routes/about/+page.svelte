<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  export let { route } = data;
  $: ({ route } = data);
</script>

{#if route}
  {@const { title, content, heroImage } = route[0]}
  <section>
    <h3>{title}</h3>
    <p>{content}</p>
  </section>
{/if}
