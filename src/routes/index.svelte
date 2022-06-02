<script lang="ts">
  import Gallery from '$lib/Gallery.svelte';
  import GalleryEntry from '$lib/GalleryEntry.svelte';
  import Section from '$lib/Section.svelte';
  import Sidebar from '$lib/Sidebar.svelte';

  let sections: { [key: string]: HTMLElement } = {};

  function scrollTo(key: string) {
    return () => {
      sections[key].scrollIntoView();
    };
  }
</script>

<div class="wrapper">
  <Sidebar>
    <a href="/" on:click|preventDefault={scrollTo('about-me')}>About me</a>
    <a href="/" on:click|preventDefault={scrollTo('recent-projects')}>Recent Projects</a>
    <a href="/" on:click|preventDefault={scrollTo('lets-connect')}>Let's Connect!</a>
  </Sidebar>
  <Section bind:node={sections['start']}>
    <h1>Hey, I'm Jamie!</h1>
    <p>I'm a software developer from Perth, Western Australia</p>
  </Section>
  <Section bind:node={sections['about-me']}>
    <h1>About Me</h1>
    <p>
      I enjoy solving problems in the field of computer science.<br />
      I've been coding for over nine years & have had the pleasure of working with a variety of technologies.<br
      />
      My knowledge spans from developing websites using Vue.js & Django to OpenGL & systems programming
      in C as well as game development with Unity & C#.<br />
      I'm also not too shabby with CI/CD solutions such as GitHub Actions as well.
    </p>
  </Section>
  <Section bind:node={sections['recent-projects']}>
    <h1>Recent Projects</h1>
    <Gallery>
      <GalleryEntry src="Thumbnail.png" title="My online portfolio" />
      <GalleryEntry src="Thumbnail.png" title="The Vault">
        <p>Pole vaulting data entry system for the Western Australian Institute of Sport.</p>
      </GalleryEntry>
    </Gallery>
  </Section>
  <Section bind:node={sections['lets-connect']}>
    <h1>Let's Connect!</h1>
    <a href="https://www.linkedin.com/in/rezbyte/">LinkedIn</a>
    <a href="https://github.com/rezbyte">GitHub</a>
    <br />
    <small>Made from scratch in 2021</small>
  </Section>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: auto auto;
  }
</style>
