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

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "43d45f1bd6b89890915c847599ea9325"
  },
  {
    "url": "about/about1.html",
    "revision": "42274092512dc388be07cf0411195208"
  },
  {
    "url": "about/about2.html",
    "revision": "e41c7b9290d64d392334cbe2fc9a5bb8"
  },
  {
    "url": "about/index.html",
    "revision": "1ee3ba6e0c5fa875d4caec9f997c08cf"
  },
  {
    "url": "assets/css/0.styles.616a884d.css",
    "revision": "b2ada2ca65e0b4e2f5c8b473ed3604b6"
  },
  {
    "url": "assets/img/image.6a51cade.jpg",
    "revision": "6a51cadeefacc57b7e59ad1d14240177"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f4a21fab.js",
    "revision": "4b67a7f25f58cc3f7efac9ae64746365"
  },
  {
    "url": "assets/js/11.2043090c.js",
    "revision": "0ef35fc2b9178d24679fa7167a4967f2"
  },
  {
    "url": "assets/js/12.62acbae3.js",
    "revision": "0e087652a9d0af5064d03d7844d9d363"
  },
  {
    "url": "assets/js/2.e530e628.js",
    "revision": "2470228301e79c768ea361cd539aad90"
  },
  {
    "url": "assets/js/3.6ea53033.js",
    "revision": "ac195e8c0f0aaf49f8bba1543b971557"
  },
  {
    "url": "assets/js/4.e1d13e47.js",
    "revision": "247fa598837bdba23a3e0c254d0c8e3a"
  },
  {
    "url": "assets/js/5.57e7d668.js",
    "revision": "4fb8cbb63b9524e29b01c81b06289bea"
  },
  {
    "url": "assets/js/6.a93aea48.js",
    "revision": "edee7bb5fe6b3569c3f175cb958b84c1"
  },
  {
    "url": "assets/js/7.0ae9e049.js",
    "revision": "6acb645bf16602b2fde52c1df31b8bc4"
  },
  {
    "url": "assets/js/8.a6014dd5.js",
    "revision": "aae8f7becdb761c374513f56feb608a7"
  },
  {
    "url": "assets/js/9.8756036c.js",
    "revision": "0b437ec978b291df66175468738b3c73"
  },
  {
    "url": "assets/js/app.01ef380d.js",
    "revision": "22ede1cdfb37e0cd7399c8fcebd8fe01"
  },
  {
    "url": "avatar.jpg",
    "revision": "b0841786a98366a3adc9d7aa7b9bcbff"
  },
  {
    "url": "index.html",
    "revision": "658b66f5c38f4b8b006536d27395db97"
  },
  {
    "url": "news/index.html",
    "revision": "b662a288e527348b4ce6ea5eab512cb8"
  },
  {
    "url": "news/news1.html",
    "revision": "1907c9a2aa6309ad1ccf5a750bda2a04"
  },
  {
    "url": "news/news2.html",
    "revision": "8ef555fc0bfc15ded99c91c075f2a760"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
