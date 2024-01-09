<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    export let {post} = data;
    $: ({post} = data);


</script>

<div>
    <h2>Hello</h2>

    {#if post}
        {@const {title, slug, excerpt, body, image_gallery} = post}
        <div  class="grid grid-cols-2">
                    <h2>{title}</h2>
                    <p>{excerpt}</p>
                    <p>{body}</p>
        </div>
    {/if}
</div>