import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';

export default {
    title: 'imterritidoly\'s blog',
    description: 'share papers and code',
    // base should be set to the subpath where your site will be deployed.
    // For example, if your site is deployed at https://foo.github.io/bar/, set base to '/bar/'.
    // If deploying at the root (e.g., https://foo.github.io/), set base to '/'.
    base: '/',
    theme: defaultTheme({
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'About', link: '/about/' }
        ],
        sidebar: {
            '/blog/': [
                {
                    title: 'Blog',
                    collapsable: false,
                    children: [
                        '',
                        '2025/08/23/20250823',        // 20250823.md        
                    ]
                }
            ]
        }
    }),
    bundler: viteBundler()
}