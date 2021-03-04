/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/doc/2019/02/18/hello/index.html","a5378a39d5528c5a5848117c1ea6514e"],["/doc/about/index.html","fb858e4d53c5438dd88615554356eb33"],["/doc/api/index.html","61437e4306c05699da676f2becd308dd"],["/doc/archives/2019/02/index.html","a6bb208bd6ce451f780c086e9eb16ea1"],["/doc/archives/2019/index.html","23530f309fd1231a9cf22e2a12061cb9"],["/doc/archives/index.html","d2271a7cf59a88dfb072cb8e4d416bd6"],["/doc/atom.xml","76dcfaa8f1d0b28107b74055bb07815b"],["/doc/browserconfig.xml","a1327babc882f9875f57f5b367c9ffc9"],["/doc/cookbook/23.html","7d27e194a977e6a16ee8ea97bca9eb5e"],["/doc/cookbook/app.html","15cb4e8816743da688185474aad160d3"],["/doc/cookbook/autoHeight.html","930c71ddd06868f6c63efa3f05f1b413"],["/doc/cookbook/bindingx.html","e625828af8cf043aca0136aaede4e38c"],["/doc/cookbook/bubble.html","346a6bb212b0c228203f17cf63c69cbd"],["/doc/cookbook/confirmType.html","31c3e1c7d71d16a438be6e90fd59baac"],["/doc/cookbook/created.html","f96b21c527c59a8deff7d670c491bd0a"],["/doc/cookbook/css.html","5e70f753aa492e79c585a9cf52f2f6d8"],["/doc/cookbook/git.html","c87351bd0dd8554c8c1517d593977a92"],["/doc/cookbook/globalVar.html","9cc91434656f0de2819a9a28213d85f0"],["/doc/cookbook/icon.html","f2bdefae75b1c7e6f4f973da6e3620be"],["/doc/cookbook/index.html","f122a60ad98fc4f8fb8839cbd6a15685"],["/doc/cookbook/lifecycle.html","769c951da5bcbdefae3f565c13158366"],["/doc/cookbook/nvueMargin.html","4ecc1b1e814f34d31b9f41188fab2e36"],["/doc/cookbook/nvueOrVue.html","dd97211b174eb6753a861220ac3152b7"],["/doc/cookbook/provideInject.html","72809849321978fc400136dab0211601"],["/doc/cookbook/radius.html","97bd09e1c5545c6686d386ec0e3bf387"],["/doc/cookbook/scroll.html","345669f5159912cd43d43f3647ca2a2d"],["/doc/cookbook/sort.html","47bc97bc4a02444dbf3f6281b9194608"],["/doc/cookbook/string.html","63ed3cdf6eabefd4e8d88f26a6db3522"],["/doc/cookbook/textarea.html","44603bee4b343117080e0f490e43e445"],["/doc/cookbook/v3.html","6b3bcf3784ca245ccb56dcc8ca8ee581"],["/doc/cookbook/weexAnimation.html","c160c48827aceab311804bc2c2f2f696"],["/doc/cookbook/windowScreen.html","959643458791a21ff956694931e4ff90"],["/doc/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/doc/css/index.css","bfc0f88dd8ef38c6fe0f7b46a11b80f2"],["/doc/css/page.css","d6a8826efec3fadc8b8171f679228f5d"],["/doc/css/search.css","98bc5fed33d9deaea04ed36de435afd7"],["/doc/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/doc/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/doc/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/doc/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/doc/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/doc/guide/contentBoxMixin.html","a41d6a02a36a1bdfefdb4f0004b4ac56"],["/doc/guide/design.html","08cb0af50b1515e1da47d7f104844034"],["/doc/guide/faq.html","3a064bc3a9f8b4330630e1ea3e85c4e8"],["/doc/guide/global.html","38180c234c419092a096a3760475a229"],["/doc/guide/history.html","c781bc6d0f98732ed8cafc28985a7364"],["/doc/guide/index.html","d3c4a64f6b386f051738a9b42a1bb3ec"],["/doc/guide/loading.html","6ad2fb37c65e76d23a465246f60ccae0"],["/doc/guide/myp-badge.html","1f0ee407d243173d9ef0cf72ffae5a5b"],["/doc/guide/myp-button-raw.html","2015db7362119b58c904eb8d255845e4"],["/doc/guide/myp-button.html","f3689180da3fc4afe5b27ac5577427d4"],["/doc/guide/myp-cell.html","3d9c34c4e7c5520f2b782ffcf9a0a1eb"],["/doc/guide/myp-check-item.html","170b56bbfb3dc6d7633c750dd3b9317e"],["/doc/guide/myp-check-static.html","ac30c844fb4d23f0bf336916e0430ff9"],["/doc/guide/myp-check.html","ad2a9a7a139dd3d447633311fb638f37"],["/doc/guide/myp-content-box.html","ef22dc31c8f46670db183db79769000a"],["/doc/guide/myp-countdown.html","9ccb62dfa5aa0441f797cca262d07cbf"],["/doc/guide/myp-divider.html","211466f1cf2d57a1e44fcffba5f80985"],["/doc/guide/myp-drawer.html","85d8ab9c40bdff5c11f67f47d0665639"],["/doc/guide/myp-flex.html","f788e83265f17482e3b9b2b33db7d5b4"],["/doc/guide/myp-fold.html","7cc90f10f9bb9b52940afb6de74d4f58"],["/doc/guide/myp-gallery-item.html","c079f14527b66b7d819bd6a07845cb36"],["/doc/guide/myp-gallery.html","263014b2f74e9258ad95ef171ad467ca"],["/doc/guide/myp-grid-static.html","079251ab43f575c5a50d1bb936da7ae7"],["/doc/guide/myp-height.html","d79b1743d178d9b1d9da840fa47bf540"],["/doc/guide/myp-icon.html","01fa1821628e233dbf423fcb1951a2d1"],["/doc/guide/myp-input-one.html","e870885a0a9a4dd9a1b2434ad9ff8388"],["/doc/guide/myp-input.html","09ec66882cb0ce1720dfcc62d3ebdc86"],["/doc/guide/myp-item.html","6783c677144a95aa39f5b4dbdec34e5e"],["/doc/guide/myp-list-cell.html","5b222298b422afc9a4780342e4cb5bae"],["/doc/guide/myp-list-header.html","a0c27e22e912084abdcc2bf68e79c079"],["/doc/guide/myp-list-index.html","f638e2dea48a609b25a36070c2084de4"],["/doc/guide/myp-list.html","4b0ec8f0aeb86a2874f18b6b5956d622"],["/doc/guide/myp-loader-n.html","9b3843613aaad4f99af004c9275ece39"],["/doc/guide/myp-loader.html","57a296e26480570446892fc36194841e"],["/doc/guide/myp-loading-indicator.html","9b9e8b3aabcdd8c728404066a9a65d33"],["/doc/guide/myp-loading.html","bf93206fc362728faff026605f7aff32"],["/doc/guide/myp-navbar.html","81fb90502884627c6c2ed5b8889d4204"],["/doc/guide/myp-notice-dynamic.html","fc8703eec94dda9fb4529313f5fa2257"],["/doc/guide/myp-notice.html","97836bf580afaaddf63d9c404df05660"],["/doc/guide/myp-overlay.html","333b5436d8966408f61bc10ee4893aef"],["/doc/guide/myp-picker-content.html","6c22b0974751e2c8f70e47f9429b42d2"],["/doc/guide/myp-picker-time-content.html","9aa8ecd717fa950179e3794ea2263c11"],["/doc/guide/myp-picker-time.html","dc33e65af704152fc4efbf2bbba7a5e2"],["/doc/guide/myp-picker.html","683eb8856614d4b8740edd8651e26760"],["/doc/guide/myp-popover.html","0d6e27aff38e4c9e91c6599c7ad7b723"],["/doc/guide/myp-popup-always.html","b18410139aa55c579518f28e843a6207"],["/doc/guide/myp-popup.html","b7460c941f43cab8631207ba871424ed"],["/doc/guide/myp-position.html","35dcb16727caffd396b5a7d6e3e08097"],["/doc/guide/myp-progress-circle.html","fb047e0d2f4799759ccec632480de71d"],["/doc/guide/myp-progress.html","869612af515328a83a4981c28c73ba15"],["/doc/guide/myp-refresher-n.html","eae22e68919da69f0a5bf4a4a6834171"],["/doc/guide/myp-refresher.html","c2dd03c8261c932fd6391360c87f99a1"],["/doc/guide/myp-result.html","719df150f0163bc9397653c772a41e94"],["/doc/guide/myp-scroll-h.html","32678c342463c154083b7cdef7bc2c7c"],["/doc/guide/myp-scroll-inline.html","a2a63d8f246701ac143591a48aebd6f3"],["/doc/guide/myp-search.html","d22ac2ce218900a8ffef8fe975943dd1"],["/doc/guide/myp-select.html","800f18cfce13d69af05f0b3594e96f25"],["/doc/guide/myp-slider-bar.html","37f3dded216b75b4be0ee51b62f53825"],["/doc/guide/myp-space.html","e73d22c080d21b6ee7d4f99d6ae43b4e"],["/doc/guide/myp-status.html","140da87e522e539e6d92bf93ca2fa6ef"],["/doc/guide/myp-stepper.html","f8d5a8f2789dca7a894a158971cc34bc"],["/doc/guide/myp-swiper-item.html","f0ba9668da37ea1d57f450dcb037b22b"],["/doc/guide/myp-swiper.html","6abd0b91c99c4c55e2d5c5ec7560f1df"],["/doc/guide/myp-switch.html","d701bd23151b472693504dc92094bd91"],["/doc/guide/myp-tab-container.html","f208b80a118fb224a904863bf010735b"],["/doc/guide/myp-tabbar.html","de8ba5ce343e6c7a67b73924d420ce46"],["/doc/guide/myp-tabs-h.html","6856ebd0957cc4238aab4c789b76f16c"],["/doc/guide/myp-tabs-v.html","595e26d331d265101a4a452d7144d2c7"],["/doc/guide/myp-tag-group.html","2c8c713fb262758ba0356e43d080cffd"],["/doc/guide/myp-tag.html","1c1084a95916a6921ac20c47990b2e8a"],["/doc/guide/myp-timeline-item.html","d357317acd2f8d1ce3dca6df3da15313"],["/doc/guide/myp-title.html","42dfdb2357d0de0fd16ebeccffcc4e22"],["/doc/guide/myp-toast.html","660f42e41455cc9e724f81c78245a488"],["/doc/guide/myp-waterfall-view.html","86e80791bd58c0d2e7cc2dbda8598413"],["/doc/guide/myp-waterfall.html","3f6164eed0f45d9642d998ac7a777320"],["/doc/guide/myp-wing.html","1b17fddf3a64ba50516d4f43512d516c"],["/doc/guide/myp-xbar.html","048c3d283e64fca77f7f44ae165699e7"],["/doc/guide/request.html","7dabced357e7f6c35433e8e56b1be541"],["/doc/guide/routing.html","67d00498a2f1b0cea1b72536784e04ed"],["/doc/guide/scene.html","abe1a652dcf15211beb92c34f3de3748"],["/doc/guide/share.html","554fbad84fde6d85b95b9189c63dce96"],["/doc/guide/system.html","cb38b7023015598468619ccc2e908b0b"],["/doc/guide/team.html","c6c923e68558cc8509d6a28b8999cede"],["/doc/guide/theme.html","b9919a284c131e97a7577869f4b08f41"],["/doc/guide/time.html","bad7af70b8597aaab93a4230be8ebe64"],["/doc/guide/toast.html","c349e77bc4c5be1da945f04bc6372099"],["/doc/guide/utils.html","ee1badeff7f33a25c906225bb25b1f7f"],["/doc/guide/validator.html","34d5bd8b647f874a59d83a5878d5a328"],["/doc/guide/why.html","01e1ecd04bca424b000e340b0bcc039e"],["/doc/images/check.png","c634675b753a1a03b587c43d8b535600"],["/doc/images/doc/badge.jpeg","b4122d1322b8194c352385a484582930"],["/doc/images/doc/button.png","195be8c366404983ed3ee0bf2c97946c"],["/doc/images/doc/button1.png","329f5d6eb9308752a5769d34044ed3bf"],["/doc/images/doc/cell-extra.jpg","518846271f0eeeb069be9a5aee81e373"],["/doc/images/doc/cell.jpeg","fbdee92438f4a82bbc939e82cea159db"],["/doc/images/doc/check.jpeg","2eba8dc5c283297f04996602b87d6193"],["/doc/images/doc/countdown.jpeg","1e1aa369cbf0e3ceaaa0437a7520567b"],["/doc/images/doc/divider.jpeg","f4055e563089103e7f3f5cfa609162b5"],["/doc/images/doc/drawer-close.png","195cbc0ac80073b46a4f4a3a5625b705"],["/doc/images/doc/drawer-open.png","d6457349f7b46d6692e00aaf43ddbbe1"],["/doc/images/doc/flex.png","a6162696e8670f39e44a9a9aad069124"],["/doc/images/doc/tabbar-bg.jpg","5298e79c0ecf9b977fe6b04d3a694242"],["/doc/images/doc/tabbar-hump-text.jpg","bd088736977dedac72c3455690975142"],["/doc/images/doc/tabbar-hump.jpg","9a883a5ccfab33b4016429a2985291f9"],["/doc/images/doc/tabbar-icon.jpg","60c5f0ef9f6c95743597e2a66209d1c8"],["/doc/images/doc/tabbar-normal.jpg","5c58a4eb0d8acd9a7cea3dc0d55776ed"],["/doc/images/down.png","2f948222df409af3121254d5fe0ed377"],["/doc/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/doc/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/doc/images/icons/android-icon-144x144.png","3c3d1747db2472a4abbf79131efdae95"],["/doc/images/icons/android-icon-192x192.png","9178ef38faaca9a50c2ce7c90d62a1d9"],["/doc/images/icons/android-icon-36x36.png","10b8aabdccbc4abff8acc25dff261b24"],["/doc/images/icons/android-icon-48x48.png","97cebe74545470d2cb2f5438ec2ec68d"],["/doc/images/icons/android-icon-72x72.png","b9a4f4af73391f05e9c4ab1f76d95587"],["/doc/images/icons/android-icon-96x96.png","50a760613db8acf7e66a9a9b6582b3a4"],["/doc/images/icons/apple-icon-114x114.png","cf4704efa5bffc95de9dff2bbff7b084"],["/doc/images/icons/apple-icon-120x120.png","7649091f1485704e3590b1d7a1299d06"],["/doc/images/icons/apple-icon-144x144.png","3c3d1747db2472a4abbf79131efdae95"],["/doc/images/icons/apple-icon-152x152.png","45510fa024df749abdb05739c6c646ea"],["/doc/images/icons/apple-icon-180x180.png","7534f313a12fb9d21c00ae07943aaf59"],["/doc/images/icons/apple-icon-57x57.png","ca82b2a8d42bbf56ecbcaf92cec446df"],["/doc/images/icons/apple-icon-60x60.png","96afdb420e15d1a080e75aaed64bae9a"],["/doc/images/icons/apple-icon-72x72.png","b9a4f4af73391f05e9c4ab1f76d95587"],["/doc/images/icons/apple-icon-76x76.png","0c4aeab565fdd0393f74dec3f9d0df7b"],["/doc/images/icons/apple-icon-precomposed.png","9178ef38faaca9a50c2ce7c90d62a1d9"],["/doc/images/icons/apple-icon.png","9178ef38faaca9a50c2ce7c90d62a1d9"],["/doc/images/icons/favicon-16x16.png","1f467ee7cc67a568bc0fb393c7bff874"],["/doc/images/icons/favicon-32x32.png","23496195d91bffa06df2f57840d2d8e1"],["/doc/images/icons/favicon-96x96.png","16f921bdd6a3b1545cf4b2abb44f65ce"],["/doc/images/icons/ms-icon-144x144.png","3c3d1747db2472a4abbf79131efdae95"],["/doc/images/icons/ms-icon-150x150.png","4168a0e96ed4152050083f87bf666b70"],["/doc/images/icons/ms-icon-310x310.png","37ed183233d8fdc947c35a45ff711dd4"],["/doc/images/icons/ms-icon-70x70.png","0fbb75bb4a64838d0453531f8070c42d"],["/doc/images/logo.png","bab28b25f87fbcf90a16d94c823e5528"],["/doc/images/mcui.png","b393f07a7a9cade12a13e1bb77a2e915"],["/doc/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/doc/images/pay_ali_68.png","52e90c65b1cb688990263ac5bac6e0fc"],["/doc/images/pay_wx_68.png","09a0d564724dd4ee2a766be8cc654c80"],["/doc/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/doc/images/small-school.png","04cea6129cb4a5d51ae978d13f3004cd"],["/doc/index.html","eae95b5db307353765c7c0ea7e89dff9"],["/doc/js/common.js","f38a71071048dd437ef83950614a5081"],["/doc/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/doc/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/doc/js/theme-data.js","351b24356577311c7630459b2a64bb6e"],["/doc/js/vue.js","cbe2b9b2fb6955decf033515d079e44b"],["/doc/js/vue.min.js","5283b86cbf48a538ee3cbebac633ccd4"],["/doc/manifest.json","95ab11de0e15ff6a0e07c073c369c577"],["/doc/menu/index.html","c0749f5f1191c36d9845abf4db78b3e9"],["/doc/resources/partners.html","e8f89ceb1eeefca68e32320a8188218d"],["/doc/resources/themes.html","df7837cb7e57f9d4f817bf6809640027"],["/doc/search/index.html","ee1bc13b509fa7f18aed90cf832afaac"],["/doc/support-mypui/index.html","6afea3dea676e44fd6088241105e9460"],["/doc/tool/component.html","65f5ff928e893bf25d21efb557576b23"],["/doc/tool/icon.html","72c26c7963f3f319993f0b03c0612a51"],["/doc/tool/props.html","c7f997a612ba2ad9c1a7a8b8db3a8f4a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




