<script lang="ts">
  import fallbackImage from '/static/favicon.png';
  export let src: string = fallbackImage;
  export let title: string = 'Unknown';
</script>

<figure>
  <img {src} alt={title} />
  <figcaption>
    <h1>{title}</h1>
    <slot />
  </figcaption>
</figure>

<style>
  figure {
    position: relative;
    margin: 0em;
  }

  figure > img {
    max-width: 20em;
    max-height: 15em;
  }

  figcaption {
    animation-name: slidedown;
    animation-timing-function: ease-in-out;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
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
  figcaption > :global(:last-child) {
    margin-bottom: 0.5rem;
  }

  figure:hover > figcaption {
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
  @keyframes slidedown {
    from {
      clip-path: inset(0% 0% 0% 0%);
    }
    to {
      clip-path: inset(100% 0% 0% 0%);
    }
  }
</style>
