<script lang="ts">
  import LinkedInLogo from '$lib/assets/linkedin.svg';
  import GitHubLogo from '$lib/assets/github.svg';
  import StackOverflowLogo from '$lib/assets/stackoverflow.svg';
  import EmailLogo from '$lib/assets/email.svg';

  export let href: string;

  const siteName = getSiteName(href);

  type site = 'Email' | 'LinkedIn' | 'GitHub' | 'Stack Overflow';

  function getSiteName(link: string): site {
    const url = new URL(link);
    switch (url.protocol) {
      case 'mailto:':
        return 'Email';
      case 'http:':
      case 'https:':
        const hostname = url.hostname.replace('www.', '');
        switch (hostname) {
          case 'linkedin.com':
            return 'LinkedIn';
          case 'github.com':
            return 'GitHub';
          case 'stackoverflow.com':
            return 'Stack Overflow';
          default:
            throw new Error(`Unknown host name: ${hostname}`);
        }
      default:
        throw new Error(`Unknown protocol: ${url.protocol}`);
    }
  }

  function getSiteLogo(name: site): string {
    switch (name) {
      case 'Email':
        return EmailLogo;
      case 'LinkedIn':
        return LinkedInLogo;
      case 'GitHub':
        return GitHubLogo;
      case 'Stack Overflow':
        return StackOverflowLogo;
    }
  }
</script>

<a {href}>
  <img src={getSiteLogo(siteName)} alt={siteName} />
</a>

<style>
  img {
    height: 5em;
    width: 5em;
  }

  @media (prefers-color-scheme: light) {
    img {
      filter: invert(100%);
    }
  }
</style>
