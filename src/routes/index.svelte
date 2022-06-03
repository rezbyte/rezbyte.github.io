<script lang="ts">
  import Gallery from '$lib/Gallery.svelte';
  import GalleryEntry from '$lib/GalleryEntry.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import LinkedInLogo from '$lib/assets/linkedin.svg';
  import GitHubLogo from '$lib/assets/github.svg';

  let sections: { [key: string]: HTMLElement } = {};

  function scrollTo(key: string) {
    return () => {
      sections[key].scrollIntoView({ behavior: 'smooth' });
    };
  }
</script>

<Sidebar>
  <a href="/" on:click|preventDefault={scrollTo('about-me')}>About me</a>
  <a href="/" on:click|preventDefault={scrollTo('recent-projects')}>Recent Projects</a>
  <a href="/" on:click|preventDefault={scrollTo('lets-connect')}>Let's Connect!</a>
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
      <GalleryEntry src="Thumbnail.png" title="The Vault">
        <p>Pole vaulting data entry system for the Western Australian Institute of Sport.</p>
      </GalleryEntry>
    </Gallery>
  </section>
  <section bind:this={sections['lets-connect']}>
    <h1>Let's Connect!</h1>
    <Gallery>
      <a class="social-media-logo" href="https://www.linkedin.com/in/rezbyte/"
        ><img src={LinkedInLogo} alt="LinkedIn" /></a
      >
      <a class="social-media-logo" href="https://github.com/rezbyte"
        ><img src={GitHubLogo} alt="GitHub" /></a
      >
    </Gallery>
  </section>
  <footer>
    <small>Made using <a href="https://kit.svelte.dev/">SvelteKit</a> 2021-2022</small>
  </footer>
</main>

<style>
  :global(body) {
    background-color: black;
    color: white;
    margin: 0em;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: auto auto;
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

  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    scroll-snap-align: start;
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
    position: relative;
    bottom: 4vh;
    text-align: center;
    margin-right: 12.5vw;
  }
</style>
