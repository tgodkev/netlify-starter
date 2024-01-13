<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import type { PageData } from "./$types";
  export let data: PageData;
  export let { posts } = data;
  $: ({ posts } = data);
</script>

<section>
  <h2 class="text-2xl">Blog</h2>
  {#if posts}
    <div class="grid md:grid-cols-2 gap-5 p-5 md:p-0">
      {#each posts as post}
        {@const { title, slug, excerpt, body, image_gallery } = post}
        <Card.Root>
          <Card.Header>
            <Card.Title><h2>{title}</h2></Card.Title>
            <Card.Description><p>{excerpt}</p></Card.Description>
          </Card.Header>
          <Card.Footer>
            <Button href="/posts/{slug}">{title}</Button>
          </Card.Footer>
        </Card.Root>
      {/each}
    </div>
  {/if}
</section>
