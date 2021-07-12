export { format } from 'date-fns';
import svelteComponent from "~ellx-hub/lib/utils/svelte.js";
// import { svelteComponent } from "@ellx/app";
import App from "./components/App.svelte";

import makeRouter from '@ellx/router';

export const app = svelteComponent(App);

export const timer = ms => ({
  subscribe: subscriber => {
    const id = setInterval(() => subscriber(Date.now()), ms);
    return () => clearInterval(id);
  }
});

export const router = makeRouter();
