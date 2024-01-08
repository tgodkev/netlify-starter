<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    export let {posts} = data;
    $: ({posts} = data);

    console.log(posts)
</script>

<div>
    <h2>Hello</h2>

    {#if posts}
        {@const {title, slug, excerpt, body, image_gallery} = posts}
        <div  class="grid grid-cols-2">
                <a href="/posts/{slug}">
                    <h2>{title}</h2>
                    <p>{excerpt}</p>
                    <p>{body}</p>
                </a>

        </div>
    {/if}
</div>