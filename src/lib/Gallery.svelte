<script lang="ts">
  export let center: boolean = false;
</script>

<div class={center ? 'center' : ''}>
  <slot />
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
