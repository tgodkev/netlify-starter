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

<div class="p-5 md:p-20">
  {#if post}
    {@const { title, body, image_gallery } = post}
    <div class="">
      <article>{@html htmlContent}</article>
    </div>
  {/if}
</div>
