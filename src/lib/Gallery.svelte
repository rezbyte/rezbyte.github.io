<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    overflow-y: scroll;
    height: fit-content;
    width: fit-content;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
