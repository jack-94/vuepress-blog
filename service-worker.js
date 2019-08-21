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
    "revision": "1044ccbc89342ec6d8620b76cb235c70"
  },
  {
    "url": "about/about1.html",
    "revision": "1ef28cebd1a113f82d80ffd4a5a80061"
  },
  {
    "url": "about/about2.html",
    "revision": "4d75851a763decc330de5d1dd1824020"
  },
  {
    "url": "about/index.html",
    "revision": "e67cea5f3360d11e0aa80f09e2b8f7e1"
  },
  {
    "url": "assets/css/0.styles.ee9ae6c5.css",
    "revision": "f09a4b14cf083527220a50ea43560c3b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.167f87f1.js",
    "revision": "54fd2b71f4b67d4f32873ffda1840e08"
  },
  {
    "url": "assets/js/11.1316d29a.js",
    "revision": "7ed57d23fef55156dc892e5e096ae04a"
  },
  {
    "url": "assets/js/12.07f1ebc7.js",
    "revision": "ae5c85e755ff56d9b719e15bd5c2c511"
  },
  {
    "url": "assets/js/13.e65326a9.js",
    "revision": "1601f7ccaf5c3dd387969c3cc5b9956a"
  },
  {
    "url": "assets/js/14.ed617ac6.js",
    "revision": "049bd92b94a7f93eba78f68056266e27"
  },
  {
    "url": "assets/js/15.3a9be56d.js",
    "revision": "92eb4d101bd44e481dfbd0af110fa080"
  },
  {
    "url": "assets/js/2.1a956603.js",
    "revision": "4aab45edca281c5c9e2702722d962ba2"
  },
  {
    "url": "assets/js/3.7b4a87ad.js",
    "revision": "de6e1a4894ea9f2385091ad69344b27a"
  },
  {
    "url": "assets/js/4.726dbc7b.js",
    "revision": "229bf4a1b2385fc913b2fd417c2f1356"
  },
  {
    "url": "assets/js/5.12c708c0.js",
    "revision": "7b15ca94a8cf210367a8a0722f479314"
  },
  {
    "url": "assets/js/6.11b31d01.js",
    "revision": "939064f7b192bd6e8772942ed0ce841b"
  },
  {
    "url": "assets/js/7.bba3d4c2.js",
    "revision": "1c0b6d0fb575a4218cc688f3bb95dc8f"
  },
  {
    "url": "assets/js/8.caa33805.js",
    "revision": "6c761434c4593e915d510f6374f0779c"
  },
  {
    "url": "assets/js/9.871083fb.js",
    "revision": "d985275e2f2bc18a6e9c603be22d6d52"
  },
  {
    "url": "assets/js/app.38d86dab.js",
    "revision": "2bff976b0d5b055ef587364c96fa07f9"
  },
  {
    "url": "avatar.jpg",
    "revision": "f8ccf7c3d21dbeb0047c49724fb38eab"
  },
  {
    "url": "favicon.jpg",
    "revision": "b0841786a98366a3adc9d7aa7b9bcbff"
  },
  {
    "url": "index.html",
    "revision": "72c8ee360a8944eb587eec1f7832343c"
  },
  {
    "url": "news/index.html",
    "revision": "c928991838a24b3fd8db47836efcd131"
  },
  {
    "url": "news/news1.html",
    "revision": "06e7d6854847d42bea8ead1e5166133a"
  },
  {
    "url": "news/news2.html",
    "revision": "26922f15907d584d377d5e2a4f452c61"
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
