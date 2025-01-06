<script lang="ts">
  interface Props {
    center?: boolean;
    children?: import('svelte').Snippet;
  }

  let { center = false, children }: Props = $props();
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
  }
  .center {
    justify-content: center;
  }
</style>
