/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/rootsinsuits/precache-manifest.e32a6c0f2ca13b566da27e75ba99c37d.js"
=======
  "/rootsinsuits/precache-manifest.a78aaa33aa0a2b087060e0509ae0c4f0.js"
>>>>>>> 406a60d20316e35ffc2211c345d327fab2ca1f0a
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/rootsinsuits/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
