<nav>
  <slot />
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    grid-column: 1;
    grid-row: auto;
    justify-content: center;
  }
  nav :global(a) {
    text-decoration: none;
    background-color: inherit;
    color: inherit;
    border-radius: 6%;
    padding-left: 1em;
  }
  @media (prefers-color-scheme: light) {
    nav :global(a) {
      background-color: white;
      color: black;
    }
  }
  nav :global(a)::after {
    content: 'e';
    position: absolute;
    left: 1em;
    width: 8em;
    background-color: white;
    color: transparent;
    mix-blend-mode: difference;
    border-radius: 6%;
    animation-name: slideleft;
    animation-timing-function: ease-in-out;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }
  nav :global(a):hover::after {
    animation-name: slideright;
    animation-timing-function: ease-in-out;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes slideleft {
    from {
      clip-path: inset(0% 0% 0% 0%);
    }
    to {
      clip-path: inset(0% 100% 0% 0%);
    }
  }

  @keyframes slideright {
    from {
      clip-path: inset(0% 100% 0% 0%);
    }
    to {
      clip-path: inset(0% 0% 0% 0%);
    }
  }
  @media (prefers-color-scheme: light) {
    @keyframes slideleft {
      from {
        clip-path: inset(0% 0% 0% 0%);
      }
      to {
        clip-path: inset(0% 100% 0% 0%);
      }
    }

    @keyframes slideright {
      from {
        clip-path: inset(0% 100% 0% 0%);
      }
      to {
        clip-path: inset(0% 0% 0% 0%);
      }
    }
  }
</style>
