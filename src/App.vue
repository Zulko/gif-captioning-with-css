<template lang='pug'>
#app
  page-content
  .footer.
    Copyright Zulko 2021 - This page's code is
    #[a(href='https://github.com/Zulko/gif-captioning-with-css') on Github]
    and published under the MIT licence.
    The page is styled with #[a(href='https://picocss.com/') PicoCSS] which works great.
    If you know other people who are into GIFs and CSS, consider sharing!
  social-sharing-badges(style='margin-top: 3em;')
</template>

<script>
import Content from './Content.vue';
import SocialSharingBadges from './SocialSharingBadges.vue';

export default {
  name: 'App',
  components: {
    'page-content': Content,
    'social-sharing-badges': SocialSharingBadges,
  },
};
</script>

<style>
#app {
  width: 800px;
  max-width: 90%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px auto;
}
.footer {
  margin-top: 3em;
  color: gray
}
</style>
