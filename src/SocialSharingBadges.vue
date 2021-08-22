<template lang="pug">
.social-sharing-badges
  ShareNetwork(
    v-for="network in networks"
    :network="network.network"
    :key="network.network"
    :style="{backgroundColor: network.color}"
    :url="sharing.url"
    :title="sharing.title"
    :description="sharing.description"
    :quote="sharing.quote"
    :hashtags="sharing.hashtags"
    :twitterUser="sharing.twitterUser"
  )
    i(:class="network.icon")
    span {{ network.name }}
</template>

<script>
export default {
  data() {
    return {
      sharing: {
        url: 'https://zulko.github.io/gif-captioning-with-css/',
        title: 'In-browser GIF captioning with 3D CSS animations',
        description: "Let's put some CSS animations in a GIF!",
        quote: 'https://zulko.github.io/gif-captioning-with-css/',
        hashtags: 'GIF,CSS,hack',
      },
      networks: [
        {
          network: 'email',
          name: 'Email',
          icon: 'far fah fa-lg fa-envelope',
          color: '#333333',
        },
        {
          network: 'twitter',
          name: 'Twitter',
          icon: 'fab fah fa-lg fa-twitter',
          color: '#1da1f2',
        },
        {
          network: 'reddit',
          name: 'Reddit',
          icon: 'fab fah fa-lg fa-reddit-alien',
          color: '#ff4500',
        },
        {
          network: 'hackernews',
          name: 'HackerNews',
          icon: 'fab fah fa-lg fa-hacker-news',
          color: '#ff4000',
        },
        {
          network: 'whatsapp',
          name: 'Whatsapp',
          icon: 'fab fah fa-lg fa-whatsapp',
          color: '#25d366',
        },
        {
          network: 'linkedin',
          name: 'LinkedIn',
          icon: 'fab fah fa-lg fa-linkedin',
          color: '#007bb5',
        },
        {
          network: 'facebook',
          name: 'Facebook',
          icon: 'fab fah fa-lg fa-facebook-f',
          color: '#1877f2',
        },
        {
          network: 'vk',
          name: 'Vk',
          icon: 'fab fah fa-lg fa-vk',
          color: '#4a76a8',
        },
        {
          network: 'weibo',
          name: 'Weibo',
          icon: 'fab fah fa-lg fa-weibo',
          color: '#e9152d',
        },
      ],
    };
  },
};
</script>

<style>
.social-sharing-badges {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
}
.social-sharing-badges  a {
  flex: none;
  color: #FFFFFF;
  background-color: #333;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px 10px 0;
  font-size: 0.8em;
}
.social-sharing-badges a .fah {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px;
  flex: 0 1 auto;
}
.social-sharing-badges a span {
  padding: 0 10px;
  flex: 1 1 0%;
  font-weight: 500;
}

</style>