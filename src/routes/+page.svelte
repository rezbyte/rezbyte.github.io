<script lang="ts">
  import Gallery from '$lib/Gallery.svelte';
  import GalleryEntry from '$lib/GalleryEntry.svelte';
  import Sidebar from '$lib/Sidebar.svelte';
  import SidebarLink from '$lib/SidebarLink.svelte';
  import SquareLink from '$lib/SquareLink.svelte';

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
      <GalleryEntry
        src="WADL.jpg"
        title="WADL"
        deployedLink="https://wadl.vercel.app/"
        repositoryLink="https://github.com/codersforcauses/wadl"
      >
        <p>
          A tool to run, manage & score debating competitions. <br />
          Created by Coders for Causes for the Western Australian Debate League.
        </p>
      </GalleryEntry>
      <GalleryEntry
        src="Elucidate.jpg"
        title="Elucidate"
        deployedLink="https://elucidate-production.up.railway.app/"
        repositoryLink="https://github.com/codersforcauses/elucidate"
      >
        <p>
          ATAR study platform run by students for students. <br />
          Created by Coders for Causes for ATAR Survival Guide.
        </p>
      </GalleryEntry>
      <GalleryEntry
        src="Portfolio.jpg"
        title="My online portfolio"
        deployedLink="https://rezbyte.dev/"
        repositoryLink="https://github.com/rezbyte/rezbyte.github.io"
      >
        <p>
          The very page you're on right now! <br /> A minimalist portfolio built from scratch using Svelte,
          plain CSS & HTML.
        </p>
      </GalleryEntry>
      <GalleryEntry
        src="WAIS.jpg"
        title="The Vault"
        deployedLink="https://codersforcauses.org/projects/WAIS"
      >
        <p>Pole vaulting data entry system for the Western Australian Institute of Sport.</p>
      </GalleryEntry>
    </Gallery>
  </section>
  <section class="lets-connect" bind:this={sections['lets-connect']}>
    <h1>Let's Connect!</h1>
    <Gallery center>
      <SquareLink href="mailto:contact@rezbyte.dev" />
      <SquareLink href="https://www.linkedin.com/in/rezbyte/" />
      <SquareLink href="https://www.xing.com/profile/Jamie_Turner10/cv" />
      <SquareLink href="https://github.com/rezbyte" />
      <SquareLink href="https://stackoverflow.com/users/18584437/rezbyte" />
    </Gallery>
    <footer>
      <small>Made using <a href="https://kit.svelte.dev/">SvelteKit</a> 2021-2023</small>
    </footer>
  </section>
</main>

<style>
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/src/lib/assets/Nunito-Light.woff2');
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
      margin-left: 1rem;
      margin-right: 1rem;
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

  footer {
    margin-top: auto;
  }
</style>
