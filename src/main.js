import '~/styles/index.css';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);

  // Add custom attributes to html, body
  head.htmlAttrs = { lang: 'en' };
  head.bodyAttrs = {
    class:
      'min-w-full min-h-full max-w-full w-screen bg-dark text-white font-sans antialised',
  };

  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png',
  });

  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  });

  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  });

  head.link.push({
    rel: 'manifest',
    href: '/site.webmanifest',
  });

  head.meta.push({
    name: 'msapplication-TileColor',
    content: '#da532c',
  });

  head.meta.push({
    name: 'theme-color',
    content: '#ffffff',
  });
}
