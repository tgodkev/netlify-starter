<script lang='ts'>
export let menu: any;


console.log(menu[0].links)
</script>

<nav>
  <ul class="flex items-center justify-end md:p-10" >
    {#each menu[0].links as item}
       <!-- content here -->
      <li class="text-2xl mx-2"><a href={item.url}>{item.title}</a></li>
    {/each}
  </ul>
</nav>


