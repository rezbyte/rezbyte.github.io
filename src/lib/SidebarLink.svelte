<script lang="ts">
  import { preventDefault } from 'svelte/legacy';

  interface Props {
    to: HTMLElement;
    name: string;
  }

  let { to, name }: Props = $props();
</script>

<a href="/" onclick={preventDefault(() => to.scrollIntoView({ behavior: 'smooth' }))}>{name}</a>

<style>
  a {
    text-decoration: none;
    background-color: inherit;
    color: inherit;
    border-radius: 6%;
    padding-left: 1em;
  }

  @media (prefers-color-scheme: light) {
    a {
      background-color: white;
      color: black;
    }
  }

  a::after {
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

  a:hover::after {
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
