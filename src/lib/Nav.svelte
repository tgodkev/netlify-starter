<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet";
  import { Menu } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  export let menu: any;
</script>

<nav>
  <!--This is where the logo will go?-->
  <ul class="md:flex items-center justify-end hidden md:p-10">
    {#each menu[0].links as item}
      <!-- content here -->
      <li class="text-2xl mx-2"><a href={item.url}>{item.title}</a></li>
    {/each}
  </ul>

  <div class="md:hidden flex justify-end">
    <div>
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button builders={[builder]} variant="outline"><Menu /></Button>
        </Sheet.Trigger>
        <Sheet.Content side="right">
          <Sheet.Header>
            <Sheet.Title>Netlify Starter</Sheet.Title>
          </Sheet.Header>
          <Sheet.Description class="flex flex-col pt-3">
            {#each menu[0].links as item}
              <Sheet.Close asChild let:builder>
                <Button builders={[builder]} variant="ghost" href={item.url}
                  >{item.title}</Button
                >
              </Sheet.Close>
            {/each}
          </Sheet.Description>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  </div>
</nav>
