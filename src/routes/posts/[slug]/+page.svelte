<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import { onMount } from "svelte";
  import { parseMarkdown } from "$lib/utils";

  export let { post } = data;
  $: ({ post } = data);
  let htmlContent: string = "";

  onMount(() => {
    htmlContent = parseMarkdown(post.body);
    console.log(htmlContent);
  });
</script>

<div>
  {#if post}
    {@const { title, body, image_gallery } = post}
    <div class="">
      <h2>{title}</h2>
      <article>{@html htmlContent}</article>
    </div>
  {/if}
</div>
