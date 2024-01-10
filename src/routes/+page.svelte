<script lang="ts">
    import type { PageData } from './$types';
   export let data: PageData;
    export let {posts} = data;
    $: ({posts} = data);


</script>


<div> 

<h2>Hello</h2> 
{#if posts} 
<div  class="grid grid-cols-2">
            {#each posts as post }
                {@const {title, slug, excerpt, body, image_gallery} = post}
                <a href="/posts/{slug}">
                    <h2>{title}</h2>
                    <p>{excerpt}</p>
                    <p>{body}</p>
                </a>
            {/each}
        </div>
    {/if}
</div>
