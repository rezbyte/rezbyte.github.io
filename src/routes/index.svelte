<script lang="ts">
  import Gallery from '$lib/Gallery.svelte';
  import GalleryEntry from '$lib/GalleryEntry.svelte';
  import Sidebar from '$lib/Sidebar.svelte';

  let sections: { [key: string]: HTMLElement } = {};

  function scrollTo(key: string) {
    return () => {
      sections[key].scrollIntoView({ behavior: 'smooth' });
    };
  }
</script>

<div class="wrapper">
  <Sidebar>
    <a href="/" class="sidebar-link" on:click|preventDefault={scrollTo('about-me')}>About me</a>
    <a href="/" class="sidebar-link" on:click|preventDefault={scrollTo('recent-projects')}
      >Recent Projects</a
    >
    <a href="/" class="sidebar-link" on:click|preventDefault={scrollTo('lets-connect')}
      >Let's Connect!</a
    >
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
      <a href="https://www.linkedin.com/in/rezbyte/">LinkedIn</a>
      <a href="https://github.com/rezbyte">GitHub</a>
      <br />
      <small>Made from scratch in 2021</small>
    </section>
  </main>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: auto auto;
  }
  main {
    height: 100vh;
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
  .sidebar-link {
    text-decoration: none;
    background-color: white;
    color: inherit;
    border-radius: 6%;
  }
  .sidebar-link::after {
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
  .sidebar-link:hover::after {
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
