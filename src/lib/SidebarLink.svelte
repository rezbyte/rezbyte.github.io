<script lang="ts">
  interface Props {
    to: HTMLElement;
    title: string;
  }

  const { to, title }: Props = $props();

  function addSlideLeft(event: { currentTarget: HTMLElement }) {
    event.currentTarget.classList.add('slideleft');
  }
</script>

<a
  href="/"
  onclick={(event) => {
    event.preventDefault();
    to.scrollIntoView({ behavior: 'smooth' });
  }}
  onfocus={addSlideLeft}
  onpointerover={addSlideLeft}
>
  {title}
</a>

<style>
  a {
    text-decoration: none;
    background-color: inherit;
    color: inherit;
    position: relative;
    width: calc(100% + 1ch);
  }

  @media (prefers-color-scheme: light) {
    a {
      background-color: white;
      color: black;
    }
  }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    color: transparent;
    mix-blend-mode: difference;
    border-radius: 6%;
    clip-path: inset(0% 100% 0% 0%);
  }

  :global(.slideleft::before) {
    animation-name: slideleft;
    animation-timing-function: ease-in-out;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  a:hover::before,
  a:focus::before {
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
