<script lang="ts">
  import type { Snippet } from 'svelte';
  import fallbackImage from '/src/lib/assets/no-image.jpg';
  interface Props {
    src?: string;
    title?: string;
    deployedLink?: string;
    repositoryLink?: string;
    children?: Snippet;
  }

  type ElementTarget = EventTarget & Element;

  const {
    src = fallbackImage,
    title = 'Unknown',
    deployedLink = undefined,
    repositoryLink = undefined,
    children
  }: Props = $props();

  let touchmoved = $state(false);
  function handleTouch(currentTarget: ElementTarget) {
    if (!touchmoved) {
      toggle(currentTarget);
    }
  }

  let isOpen = $state(false);
  function open() {
    isOpen = true;
  }
  function close(currentTarget: ElementTarget) {
    // Don't close the caption if it is still being interacted with
    const isPointerInside = currentTarget.matches(':hover');
    const isFocusInside = currentTarget.contains(document.activeElement);
    isOpen = isPointerInside || isFocusInside;
  }

  function toggle(currentTarget: ElementTarget) {
    if (isOpen) {
      close(currentTarget);
    } else {
      open();
    }
  }
</script>

<figure
  onfocusin={open}
  onfocusout={(event: FocusEvent & { currentTarget: ElementTarget }) => {
    // Close the caption if an element outside this `GalleryEntry` is focused
    const target = event.relatedTarget as ElementTarget | null;
    const isChildElement = event.currentTarget.contains(target);
    if (target == null || !isChildElement) {
      close(event.currentTarget);
    }
  }}
  onmouseenter={open}
  onmouseleave={(event: MouseEvent & { currentTarget: ElementTarget }) => {
    close(event.currentTarget);
  }}
  ontouchend={(event: TouchEvent & { currentTarget: ElementTarget }) => {
    handleTouch(event.currentTarget);
  }}
  ontouchmove={() => {
    touchmoved = true;
  }}
  ontouchstart={() => {
    touchmoved = false;
  }}
>
  <img
    alt={title}
    {src}
  />
  <figcaption class={isOpen ? 'opened' : 'closed'}>
    <h1>{title}</h1>
    {@render children?.()}
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
