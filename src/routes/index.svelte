<script lang="ts">
  import Gallery from '$lib/Gallery.svelte';
  import GalleryEntry from '$lib/GalleryEntry.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import SidebarLink from '$lib/SidebarLink.svelte';
  import LinkedInLogo from '$lib/assets/linkedin.svg';
  import GitHubLogo from '$lib/assets/github.svg';

  let sections: { [key: string]: HTMLElement } = {};
</script>

<Sidebar>
  <SidebarLink name="About Me" to={sections['about-me']} />
  <SidebarLink name="Recent Projects" to={sections['recent-projects']} />
  <SidebarLink name="Let's Connect!" to={sections['lets-connect']} />
</Sidebar>
<main>
  <section bind:this={sections['start']}>
    <h1>Hey, I'm Jamie!</h1>
    <p>I'm a software developer from Perth, Western Australia</p>
  </section>
  <section bind:this={sections['about-me']}>
    <h1>About Me</h1>
    <p>
      I enjoy solving problems in the field of computer science.<br />
      I've been coding for over nine years & have had the pleasure of working with a variety of technologies.<br
      />
      My knowledge spans from developing websites using Vue.js & Django to OpenGL & systems programming
      in C as well as game development with Unity & C#.<br />
      I'm also not too shabby with CI/CD solutions such as GitHub Actions as well.
    </p>
  </section>
  <section bind:this={sections['recent-projects']}>
    <h1>Recent Projects</h1>
    <Gallery>
      <GalleryEntry src="Thumbnail.png" title="My online portfolio" />
      <GalleryEntry src="WAIS-RGB.jpg" title="The Vault">
        <p>Pole vaulting data entry system for the Western Australian Institute of Sport.</p>
      </GalleryEntry>
    </Gallery>
  </section>
  <section class="lets-connect" bind:this={sections['lets-connect']}>
    <h1>Let's Connect!</h1>
    <Gallery>
      <a class="social-media-logo" href="https://www.linkedin.com/in/rezbyte/"
        ><img src={LinkedInLogo} alt="LinkedIn" /></a
      >
      <a class="social-media-logo" href="https://github.com/rezbyte"
        ><img src={GitHubLogo} alt="GitHub" /></a
      >
    </Gallery>
    <footer>
      <small>Made using <a href="https://kit.svelte.dev/">SvelteKit</a> 2021-2022</small>
    </footer>
  </section>
</main>

<style>
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/src/lib/assets/Nunito-VariableFont_wght.ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  :global(body) {
    font-family: 'Nunito', sans-serif;
    background-color: black;
    color: white;
    margin: 0em;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: auto auto;
    column-gap: 1em;
  }

  @media (orientation: portrait) {
    :global(body) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
  @media (prefers-color-scheme: light) {
    :global(body) {
      background-color: white;
      color: black;
    }
  }

  main {
    grid-column: 2;
    grid-row: auto;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  @media (orientation: portrait) {
    main {
      grid-column: 1;
    }
  }
  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    scroll-snap-align: start;
    margin-top: auto;
  }
  @media (orientation: portrait) {
    section {
      padding-left: 1em;
      padding-right: 1em;
    }
  }

  @media (orientation: portrait) {
    .lets-connect {
      justify-content: center;
      align-content: center;
      align-items: center;
      text-align: center;
    }
  }
  .lets-connect > h1 {
    margin-top: auto;
  }
  .social-media-logo > img {
    height: 5em;
    width: 5em;
  }

  @media (prefers-color-scheme: light) {
    .social-media-logo > img {
      filter: invert(100%);
    }
  }
  footer {
    margin-top: auto;
  }
</style>
