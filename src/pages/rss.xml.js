import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { BLOG_NAME } from '../constants';

export async function GET(context) {
  return rss({
    title: BLOG_NAME,
    description: 'Important knowledge and here we share it',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}