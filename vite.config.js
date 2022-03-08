import {svelte} from "@sveltejs/vite-plugin-svelte";
import {VitePWA} from 'vite-plugin-pwa'
import {defineConfig} from "vite";

export default defineConfig({
    server: {
        port: 5000,
    },
    plugins: [
        svelte(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                inlineWorkboxRuntime: true,
                runtimeCaching: [
                    {
                        urlPattern: /.*\/api\/v2\/.*/,
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    }
                ]
            },
            includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'ODS-Labs starter kit',
                short_name: 'A vite + svelte / routify starter kit for PWA applications',
                description: '',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    }
                ]
            }
        })],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/styles/variables.scss";'
            },
        },
    },
});
