<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  export let { posts } = data;
  $: ({ posts } = data);
</script>

│
<section>
  <h2 class="text-2xl">Blog</h2>
  {#if posts}
    <div class="grid grid-cols-2">
      {#each posts as post}
        {@const { title, slug, excerpt, body, image_gallery } = post}
        <article>
          <a href="/posts/{slug}">
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <div>{body}</div>
          </a>
        </article>
      {/each}
    </div>
  {/if}
</section>
