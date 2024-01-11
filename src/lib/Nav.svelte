<script lang='ts'>
import * as Sheet  from "$lib/components/ui/sheet"  
export let menu: any;



</script>

<nav>
  <ul class="flex items-center justify-end md:p-10" >
    {#each menu[0].links as item}
       <!-- content here -->
      <li class="text-2xl mx-2"><a href={item.url}>{item.title}</a></li>
    {/each}
  </ul>
</nav>


