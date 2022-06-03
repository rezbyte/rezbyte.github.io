<nav>
  <slot />
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 1em;
  }
  nav :global(a) {
    text-decoration: none;
    background-color: white;
    color: inherit;
    border-radius: 6%;
  }
  nav :global(a)::after {
    content: 'a';
    position: absolute;
    left: 0%;
    width: 100%;
    height: 1.5em;
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
</style>
