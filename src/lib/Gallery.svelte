<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    center?: boolean;
    children?: Snippet;
  }

  const { center = false, children }: Props = $props();
</script>

<div class:center>
  {@render children?.()}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    overflow-y: auto;
    height: fit-content;
    width: fit-content;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 0.5em;
  }
  @media (orientation: portrait) {
    div {
      padding-right: 0;
    }
  }
  .center {
    justify-content: center;
  }
</style>
