<script lang='ts'>
import * as Sheet  from "$lib/components/ui/sheet"
import {Menu} from 'lucide-svelte'
import {Button} from '$lib/components/ui/button'
export let menu: any;



</script>

<nav>

  <!--This is where the logo will go?-->
  <ul class="md:flex items-center justify-end hidden md:p-10" >
    {#each menu[0].links as item}
       <!-- content here -->
      <li class="text-2xl mx-2"><a href={item.url}>{item.title}</a></li>
    {/each}
  </ul>

  <div class="md:hidden">
    <div>
      <Sheet.Root>
  <Sheet.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline">Open</Button>
  </Sheet.Trigger>
  <Sheet.Content side="right">
    <Sheet.Header>
      <Sheet.Title>Edit profile</Sheet.Title>
      <Sheet.Description>
        Make changes to your profile here. Click save when you're done.
      </Sheet.Description>
    </Sheet.Header>   
    <Sheet.Footer>
      <Sheet.Close asChild let:builder>
        <Button builders={[builder]} type="submit">Save changes</Button>
      </Sheet.Close>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>
    </div>
  </div>
</nav>


