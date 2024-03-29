<script lang="ts">
  import fallbackImage from '/src/lib/assets/no-image.jpg';
  export let src: string = fallbackImage;
  export let title = 'Unknown';
  export let deployedLink: string | undefined = undefined;
  export let repositoryLink: string | undefined = undefined;

  let touchmoved = false;
  function handleTouch() {
    if (touchmoved === false) {
      toggle();
    }
  }

  let isOpen = false;
  function open() {
    isOpen = true;
  }
  function close() {
    isOpen = false;
  }

  function toggle() {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }
</script>

<figure
  on:mouseenter={() => open()}
  on:mouseleave={() => close()}
  on:touchstart={() => {
    touchmoved = false;
  }}
  on:touchmove={() => {
    touchmoved = true;
  }}
  on:touchend={handleTouch}
>
  <img {src} alt={title} />
  <figcaption class={isOpen ? 'opened' : 'closed'}>
    <h1>{title}</h1>
    <slot />
    <div>
      {#if deployedLink}
        <a href={deployedLink}>Visit Site</a>
      {/if}
      {#if deployedLink && repositoryLink}
        <span>-</span>
      {/if}
      {#if repositoryLink}
        <a href={repositoryLink}>Repository</a>
      {/if}
    </div>
  </figcaption>
</figure>

<style>
  figure {
    position: relative;
    margin: 0em;
  }

  figure > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  figcaption {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 0em;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0); /* fallback color */
    background: rgba(0, 0, 0, 0.7);
    color: white;
  }

  figcaption > h1 {
    margin-top: 0.5rem;
    margin-bottom: 0rem;
  }

  figcaption > :global(*) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  a {
    color: white;
  }

  figcaption > :last-child {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 0.5rem;
  }

  .opened {
    animation-name: slideup;
    animation-timing-function: ease-in-out;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes slideup {
    from {
      clip-path: inset(100% 0% 0% 0%);
    }
    to {
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  .closed {
    animation-name: slidedown;
    animation-timing-function: ease-in-out;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes slidedown {
    from {
      clip-path: inset(0% 0% 0% 0%);
    }
    to {
      clip-path: inset(100% 0% 0% 0%);
    }
  }
</style>
