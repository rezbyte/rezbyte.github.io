<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  const { children }: Props = $props();
</script>

<nav>
  {@render children?.()}
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    grid-column: 1;
    grid-row: auto;
    justify-content: center;
    width: fit-content;
    padding-left: 1em;
  }

  @media (orientation: portrait) {
    nav {
      display: none;
    }
  }
</style>
