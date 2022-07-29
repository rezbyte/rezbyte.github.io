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
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
</style>
