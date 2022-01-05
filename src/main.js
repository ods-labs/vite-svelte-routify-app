import "./app.scss";
import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";

const app = HMR(App, { target: document.body }, "vite-svelte-routify-app");

export default app;
