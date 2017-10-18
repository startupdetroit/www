"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d79304c26c4b31a6cacf47982a475774"],["/static/css/main.f672050e.css","697781fe106dd3e4a4992f16b52bc644"],["/static/js/main.270478e6.js","0ddfb6d42f4859954869bf2160c12755"],["/static/media/header.2f25fdf3.jpg","2f25fdf3cee837906d9c9f73f673973f"],["/static/media/hero-logo.208775f7.png","208775f755544ba40c98b2f98aa7e188"],["/static/media/logo-bamboo.ebe6c74f.png","ebe6c74fcd274779ef16cd69dbc15d67"],["/static/media/logo-castle.584ff053.png","584ff053c67e6492429948221c399f1f"],["/static/media/logo-distilnetworks.33e3b3eb.png","33e3b3eb79f81fb6fe8553b1f2123a95"],["/static/media/logo-duo.3e0dd59c.png","3e0dd59c2e17351f05129a64fb064a9b"],["/static/media/logo-lunar.18ffb04a.png","18ffb04a5dac4b25221347af49a95a75"],["/static/media/logo-mapbox.b96e838c.png","b96e838c077735197d1452e833f47f03"],["/static/media/logo-mightyai.be321964.svg","be321964ba413df2adaebfe49cc6be6c"],["/static/media/logo-mvca.a77937bf.png","a77937bf5f66efc7ea0714e4e5e1421c"],["/static/media/logo-myswimpro.fce687a1.png","fce687a1307e630c13d0e0c21b328681"],["/static/media/logo-repurpose.e5554f64.jpg","e5554f64bcc85be1e594a8a9e4411ca5"],["/static/media/logo-skyspecs.90c2db6a.png","90c2db6aee6fa29f5ff26fedded28c9b"],["/static/media/logo-splt.c3647f92.png","c3647f92047602870849cd7235d9d6b9"],["/static/media/logo-spothero.5490a752.png","5490a7520dcb49ad52d5854ce33dcf9f"],["/static/media/logo-stockx.1459a27e.jpg","1459a27e33200b45df8879c2653ef93f"],["/static/media/logo-techstars.07c42782.png","07c42782fef5cb54460a0fbba057fa00"],["/static/media/logo-techtown.8c42facb.png","8c42facb6d6b039908fee4e5893b729d"],["/static/media/logo-trucks.4de17e0b.png","4de17e0b4ee2a7be436e530f2967e4b5"],["/static/media/logo-vfa.fe4f3301.png","fe4f330146d8b2123d14438a9ceef5e1"],["/static/media/logo-waymark.5a6d3ca5.png","5a6d3ca57385ddb7fdd5de1e932f1b04"],["/static/media/logo-wsu.1bbffea4.png","1bbffea4f64dce591341aef05fb0c9fb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});