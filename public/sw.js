if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>i(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c2890cc20981ea98ecd78951a8cfd7ac"},{url:"/_next/static/630Io-dBKNG3_n1YAqQmi/_buildManifest.js",revision:"0f30b333d8f5bdecf313e9da0e269f58"},{url:"/_next/static/630Io-dBKNG3_n1YAqQmi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/164f4fb6.4c8cbdc1e4f8acd7.js",revision:"4c8cbdc1e4f8acd7"},{url:"/_next/static/chunks/173-1be1ed053383dc39.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/30a37ab2-bfb4099b5c83ffbd.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/4bd1b696-49dfdb1645950f8a.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/517-306fecb8c05ff4f0.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/565-e70ae47cc4111611.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/7.cb699dbe6a0c1316.js",revision:"cb699dbe6a0c1316"},{url:"/_next/static/chunks/756.947973e9680079bf.js",revision:"947973e9680079bf"},{url:"/_next/static/chunks/839.ed0e57d442704b1d.js",revision:"ed0e57d442704b1d"},{url:"/_next/static/chunks/863-3b6e44a7c9150ab2.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/8e1d74a4-cc0d37134aef17c9.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/ad2866b8.696ea9185f6b6ceb.js",revision:"696ea9185f6b6ceb"},{url:"/_next/static/chunks/app/_not-found/page-6fb529cbb89b7150.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/app/about/page-28f11289eb89d20f.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/app/cv/page-7cf8f1e9e31be1b2.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/app/layout-40737b04251a764b.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/app/my-projects/page-507c456eb9ca28eb.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/app/page-e156d23749527cce.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/b645e135.43ac3f72e4c77be8.js",revision:"43ac3f72e4c77be8"},{url:"/_next/static/chunks/bc98253f.8f7cc1b1f4fb5ae4.js",revision:"8f7cc1b1f4fb5ae4"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/main-app-78e15b7bdb3abe1c.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/main-ed09ac6d70a3e1d5.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-a6b8e8fa2a0d8ecc.js",revision:"630Io-dBKNG3_n1YAqQmi"},{url:"/_next/static/css/0e0b94011bf5f436.css",revision:"0e0b94011bf5f436"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/_next/static/media/boekiebot.60f35df0.png",revision:"070ab0e40e5fce66a3142a4f6fbd1378"},{url:"/_next/static/media/image1.d0aa536c.jpg",revision:"ccc5b2f24c764c006652a28aa878faf7"},{url:"/_next/static/media/image2.5de0f3a4.jpg",revision:"1515815703873d81432154e9ff295935"},{url:"/_next/static/media/image3.c294e015.jpg",revision:"59de762404edfe1d8423c937e257f1f4"},{url:"/_next/static/media/image4.9155b1e0.jpg",revision:"af99c262b7a62fa1033f7e8f91a3fbda"},{url:"/_next/static/media/logo.52c04738.webp",revision:"cfdb2b777a16ca0c626defc54ea143a2"},{url:"/_next/static/media/upscore.b0c9dcab.png",revision:"686cb237594341d14ee392fc03a0614e"},{url:"/assets/boekiebot.png",revision:"070ab0e40e5fce66a3142a4f6fbd1378"},{url:"/assets/image1.jpg",revision:"ccc5b2f24c764c006652a28aa878faf7"},{url:"/assets/image2.jpg",revision:"1515815703873d81432154e9ff295935"},{url:"/assets/image3.jpg",revision:"59de762404edfe1d8423c937e257f1f4"},{url:"/assets/image4.jpg",revision:"af99c262b7a62fa1033f7e8f91a3fbda"},{url:"/assets/shrm.png",revision:"cf6a477d4ca78744982dfe583d8e3096"},{url:"/assets/upscore.png",revision:"686cb237594341d14ee392fc03a0614e"},{url:"/elnur.jpg",revision:"08c74245ade68b11bc66fcd29576f313"},{url:"/icons/icon-128x128.png",revision:"00c64bbc0fdf1eebba8f7cdf44921629"},{url:"/icons/icon-144x144.png",revision:"c5d9d4247fc506bf9b3b9b1a09885ec3"},{url:"/icons/icon-152x152.png",revision:"bd3976a1d9c7b59b845b14bfdb63586b"},{url:"/icons/icon-192x192.png",revision:"6ec091fbabf870c0b6c767a84e1d76b2"},{url:"/icons/icon-384x384.png",revision:"4a63388631b8dace1f30611e2ad98718"},{url:"/icons/icon-512x512.png",revision:"395d4795a767d1b3102e9b23a984ed5e"},{url:"/icons/icon-72x72.png",revision:"9a7190279f84db1eead43ce426e6858b"},{url:"/icons/icon-96x96.png",revision:"da4570f26ff5f04b745fbec72f31f046"},{url:"/logo.webp",revision:"cfdb2b777a16ca0c626defc54ea143a2"},{url:"/manifest.json",revision:"e9ed93ba373be8f064779217c0f6dd96"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));