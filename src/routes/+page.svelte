<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  export let { posts } = data;
  $: ({ posts } = data);
</script>

<div>
  <h1>Hello From The Netlify Starter!</h1>
</div>
