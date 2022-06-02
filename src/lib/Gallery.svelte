<div>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
  }

  div > :global(:first-child) {
    margin-left: 0em;
  }
</style>
