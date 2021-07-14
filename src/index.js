export { format } from 'date-fns';
import svelteComponent from "~ellx-hub/lib/utils/svelte.js";
// import { svelteComponent } from "@ellx/app";
import App from "./components/App.svelte";

import makeRouter from '@ellx/router';
import initAuth from '@ellx/auth';

export const app = svelteComponent(App);

export const timer = ms => ({
  subscribe: subscriber => {
    const id = setInterval(() => subscriber(Date.now()), ms);
    return () => clearInterval(id);
  }
});

export const router = makeRouter();

const appId = 'MY-RANDOM-APP';

export const { auth, login, logout } = initAuth({ appId });

export { initFirebase } from '@ellx/auth';
