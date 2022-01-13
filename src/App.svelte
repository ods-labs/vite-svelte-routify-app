<!-- To turn this app into a PWA, uncomment below -->
<svelte:head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</svelte:head>

<script>
    import {Router} from "@roxi/routify";
    import {routes} from "../.routify/routes";
    import {metatags} from '@roxi/routify'

    metatags.title = 'ODS-Labs starter kit'
    metatags.description = 'A vite + svelte / routify starter kit for PWA applications'

    import { registerSW } from 'virtual:pwa-register'

    registerSW({
        onOfflineReady() {
            console.log("Offline support ready!");
        },
    })
</script>

<Router {routes}/>