import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'ZENTINEL',
    social: {
      github: 'https://github.com/surelle-ha/zentineljs'
    },
    sidebar: [{
      label: 'Documentation',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Introduction',
        link: '/guides/introduction/'
      }, {
        label: 'Features',
        link: '/guides/features/'
      }, {
        label: 'Installation',
        link: '/guides/installation/'
      }, {
        label: 'Environment Variables',
        link: '/guides/environment/'
      }, {
        label: 'Basic Commands',
        link: '/guides/basic-command/'
      }, {
        label: 'Project Structure',
        link: '/guides/project-structure/'
      }, {
        label: 'API Composition',
        link: '/guides/api-composition/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  })]
});