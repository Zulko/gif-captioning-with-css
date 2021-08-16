<template lang="pug">
.code-snippet
  .description in {{snippets[name].language}}:
  vue-code-highlight(
    :language='snippets[name].language'
  ) {{ snippets[name].content }}
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import 'vue-code-highlight/themes/prism-okaidia.css';

const snippets = {
  'animate-example': {
    language: 'HTML',
    content: require('raw-loader!./snippets/animate-example.html').default,
  },
  'animate-example-css': {
    language: 'CSS',
    content:
      "@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');",
  },
  'animated-svg': {
    language: 'HTML',
    content: require('raw-loader!./snippets/animated-svg.html').default,
  },
  'caption-svg-base': {
    language: 'HTML',
    content: require('raw-loader!./snippets/caption-svg-base.html').default,
  },
  'caption-css': {
    language: 'CSS',
    content: require('raw-loader!./snippets/caption.css.txt').default,
  },
  'caption-blink-js': {
    language: 'Javascript',
    content:
      'mounted() { setInterval(() => {showCaption = !showCaption}, 2000)}',
  },
  'caption-blink-html': {
    language: 'HTML',
    content:
      "<text class='caption' v-if='timeSeconds > 0.5 && timeSeconds < 2'> {{ caption }} </text>",
  },
  captionImgSrc: {
    language: 'Javascript',
    content: require('raw-loader!./snippets/captionImgSrc.txt').default,
  },
  'captionImg-html': {
    language: 'HTML',
    content: require('raw-loader!./snippets/captionImg.html').default,
  },
  'clock-html': {
    language: 'HTML',
    content: 'Current time: {{ timeSeconds.toFixed(2) }} seconds',
  },
  'clock-js': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/clock-js.txt').default,
  },
  'computed-style': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/computed-style.txt').default,
  },
  'compute-style-loop': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/compute-style-loop.txt').default,
  },
  'gif-draw-canvas-html': {
    language: 'HTML',
    content: require('raw-loader!./snippets/gif-draw-canvas.html').default,
  },
  'gif-draw-canvas-js': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/gif-draw-canvas.txt').default,
  },
  'gif-loader-html': {
    language: 'HTML',
    content: require('raw-loader!./snippets/gif-loader.html').default,
  },
  'gif-loader-js': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/gif-loader.txt').default,
  },
  'inline-style': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/inline-styles.txt').default,
  },
  'merge-gif-and-caption': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/merge-gif-and-caption.txt').default,
  },
  onRecordButtonClicked: {
    language: 'Javascript',
    content: require('raw-loader!./snippets/onRecordButtonClicked.txt').default,
  },
  'onRecordButtonClicked-html': {
    language: 'HTML',
    content: require('raw-loader!./snippets/onRecordButtonClicked.html')
      .default,
  },
  'project-img-onto-canvas': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/project-img-onto-canvas.txt')
      .default,
  },
  'recording-main-loop': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/recording-main-loop.txt').default,
  },
  'rendered-gif-html': {
    language: 'HTML',
    content: "<img :src='renderedGif'/>",
  },
  'render-gif': {
    language: 'Javascript',
    content: require('raw-loader!./snippets/render-gif.txt').default,
  },
  'text-with-classes': {
    language: 'SVG',
    content: require('raw-loader!./snippets/text-with-classes.txt').default,
  },
  'text-with-styles': {
    language: 'SVG',
    content: require('raw-loader!./snippets/text-with-styles.txt').default,
  },
  'user-gif-img-simple': {
    language: 'HTML',
    content: require('raw-loader!./snippets/user-gif-img-simple.html').default,
  },
};
export default {
  props: {
    name: { type: String },
  },
  data() {
    if (!snippets[this.name]) {
      console.error(`${this.name} not in snippets`);
    }
    return {
      snippets,
    };
  },
  components: {
    VueCodeHighlight,
  },
};
</script>
<style>
.code-snippet .description {
  color: gray;
  margin-bottom: -1em;
  font-style: italic;
}
</style>