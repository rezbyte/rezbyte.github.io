<nav>
  <slot />
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    grid-column: 1;
    grid-row: auto;
    justify-content: center;
  }

  @media (orientation: portrait) {
    nav {
      display: none;
    }
  }
</style>
