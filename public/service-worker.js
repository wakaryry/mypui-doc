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

var precacheConfig = [["/2019/02/18/hello/index.html","06534ea4efe9ec74b796c731440ad87a"],["/about/index.html","795878a9d8e9be8bdc46277e5e98efd7"],["/archives/2019/02/index.html","90dc6e42548e3d334feeeda40807834c"],["/archives/2019/index.html","d62e6d5565f46d84a515ee35bb5e4076"],["/archives/index.html","fd09a5a722e5c2437173118047314c37"],["/atom.xml","b4e2ab477d35146bd06f93859052ec5d"],["/browserconfig.xml","a1327babc882f9875f57f5b367c9ffc9"],["/coc/index.html","689fb31eeca961b2d8e9e83263676c12"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","bfc0f88dd8ef38c6fe0f7b46a11b80f2"],["/css/page.css","53c6436e4e25fd937b2fa0f29e9665af"],["/css/search.css","98bc5fed33d9deaea04ed36de435afd7"],["/doc/api/index.html","2f87c58b5e9ff06bda670bbd8bca7ace"],["/doc/cookbook/23.html","0c2119310d569fcf9a650523709981ab"],["/doc/cookbook/app.html","7eef599698c653f8a5b2245098d58f92"],["/doc/cookbook/autoHeight.html","b195e1b3dfc54baddffd0e58d352495b"],["/doc/cookbook/bindingx.html","b0f20389dc8136ca3478273ce9d2a005"],["/doc/cookbook/bubble.html","15a3a37ba9276c929fb7affe9355fd63"],["/doc/cookbook/confirmType.html","cb9180cee340b2cc3171e56237c45e32"],["/doc/cookbook/created.html","f6173446b32591ce88d1d17004807993"],["/doc/cookbook/css.html","41c6be689b2c960b7b94b3fd8cccae33"],["/doc/cookbook/git.html","0c7922937e328297d02d8ce8219949c7"],["/doc/cookbook/globalVar.html","28daa1c0a3184868cc7324b3b543d9f1"],["/doc/cookbook/icon.html","962a224266585d9514034f50545ad664"],["/doc/cookbook/index.html","7879155285c57a0953ca0358b1c72f2c"],["/doc/cookbook/lifecycle.html","1987ca9cbfbd2279fd1b8f4d28b6ad7d"],["/doc/cookbook/nvueMargin.html","e7c4b224e2b0138f583a1a0902b6c02c"],["/doc/cookbook/nvueOrVue.html","c5922946c53305af4a3583af3cf3e60f"],["/doc/cookbook/provideInject.html","68e14a049a094c4203fef2986525f6c7"],["/doc/cookbook/radius.html","ff2335e8f794ce7ee278b7ad4796ee5e"],["/doc/cookbook/scroll.html","f88919d97f8fa8941b3bea91b23321c0"],["/doc/cookbook/sort.html","d9ed2f9c8417aa6e17e8b06cab013791"],["/doc/cookbook/string.html","aa5976469ccbc6faa297c1cf503f3b7c"],["/doc/cookbook/textarea.html","4b51dfae8aa4899f5cfd3e77786c2d43"],["/doc/cookbook/v3.html","3d27f48a13afd753b6864071755cd971"],["/doc/cookbook/weexAnimation.html","87cbcd9c0057b1c936b60ceea210bdf5"],["/doc/cookbook/windowScreen.html","af2ca68c547db0ca3f1055e54ff8cc4f"],["/doc/guide/contentBoxMixin.html","0895feb3ff911c6fd40ea2b67305559d"],["/doc/guide/design.html","3a1419d9efb03bd5ddf0a678aa758e28"],["/doc/guide/faq.html","9b036c4fa07177fc8f37c0af23ec1808"],["/doc/guide/global.html","fb42e62abae16b6d6859de28ee8aae65"],["/doc/guide/history.html","977896292c4bb9ee975e201be0736e30"],["/doc/guide/index.html","978223504df9caa337e64211bad7ea95"],["/doc/guide/loading.html","e1039abb42a6481540f183abec45a5b9"],["/doc/guide/myp-badge.html","8476c4a6798907647145bdb62af915e5"],["/doc/guide/myp-button.html","e9bc5eb1b228551a12c243d41e737caf"],["/doc/guide/myp-cell.html","ed2f80b6cd65991b181ecd071b77d065"],["/doc/guide/myp-check-item.html","754944ed6c9e240e4a123067642de0c9"],["/doc/guide/myp-check-static.html","4633afa02e7aecc6930dfa0996b8c6ad"],["/doc/guide/myp-check.html","0ff8db619995353034542871aef0ea56"],["/doc/guide/myp-content-box.html","d2ae3c1b65cba790992c52e9e5145994"],["/doc/guide/myp-countdown.html","c7d4e3f01800130facba075b9ee1e09b"],["/doc/guide/myp-divider.html","accf7bb822dde3a88d280f0ee7badaca"],["/doc/guide/myp-drawer.html","8c115b201a46063b8a166f64cd70bb59"],["/doc/guide/myp-flex.html","7772b5e3d2f3a102ec9d9e8ab536025e"],["/doc/guide/myp-fold.html","7aa4561a0eb2212fe9c89a7074cdd90d"],["/doc/guide/myp-grid-item.html","d84952be00b014a8161fa84d019cfb65"],["/doc/guide/myp-grid.html","10fccf7c17652d4ff28d1092464039c1"],["/doc/guide/myp-height.html","ed5051767193bf6cba6af7b801ef933c"],["/doc/guide/myp-icon.html","73dc835b9e6c625484c4b4d4f2785f43"],["/doc/guide/myp-input-one.html","16fdb22545f868010e5eaad4aa9f1c48"],["/doc/guide/myp-input.html","c3f1125f1b8884aca2d1faa07a745289"],["/doc/guide/myp-item.html","5b9a73a79e174d86b26896b2e93bb767"],["/doc/guide/myp-list-cell.html","8ad6ccef6ad5ba5bc6f368f73b253720"],["/doc/guide/myp-list-chat.html","32ec8e03392fac152276cf1e67cc2d71"],["/doc/guide/myp-list-header.html","9a16846a402837af57e22806afd0f8ab"],["/doc/guide/myp-list-index.html","838f42e50084fb063826516128357775"],["/doc/guide/myp-list-simple.html","74895d38cf3797dc15e7344722851cb6"],["/doc/guide/myp-list.html","86cfa772b3508c3b54e6b1dad8d3b32b"],["/doc/guide/myp-loader-n.html","e4e2f3cded67351e17ac3f11e8c05779"],["/doc/guide/myp-loader.html","d8385229c4411bd059b5583261b48907"],["/doc/guide/myp-loading-indicator.html","7fd34128efa9b395ec474cc42dad4e57"],["/doc/guide/myp-loading.html","9a8a4b98f7162517599735bd68fd9059"],["/doc/guide/myp-message-image.html","f76ff6538d332174a71d9388b14d28be"],["/doc/guide/myp-message-text.html","5f498849d309142ff8b45c24c66d8549"],["/doc/guide/myp-message-time.html","29e295a1d1cb8dc8b2ac2b58275505ed"],["/doc/guide/myp-navbar.html","d7ae90a2afbf5466a74c73db0c016956"],["/doc/guide/myp-notice-dynamic.html","ac67ba004ba82830cf7c06c376c9aae8"],["/doc/guide/myp-notice.html","32874cb80b729b7ea5f3796a5a5f68d0"],["/doc/guide/myp-overlay.html","021376b52a3423a555c63fcf050afabe"],["/doc/guide/myp-picker-content.html","aa8ecb6c6e8e4dca4cc58d5950098ccd"],["/doc/guide/myp-picker-time-content.html","b2dd255d6dc076138f0fed31bb18d294"],["/doc/guide/myp-picker-time.html","ed5ada8963dc39b013bef3b94b466524"],["/doc/guide/myp-picker.html","00cc3b6f489cee5aef6d15360913adbc"],["/doc/guide/myp-popover.html","9136e0fea3bc29516c630d16b21a8353"],["/doc/guide/myp-popup-always.html","4f30737689e964b71712090a7475c93e"],["/doc/guide/myp-popup.html","caf2525a88e95fc5dfd4448f0acb6a4d"],["/doc/guide/myp-position.html","1ef000b8cd084f1e6fdcd630a5b87d41"],["/doc/guide/myp-progress-circle.html","b59dda8dc9c10e0dd9eeb3588ea176b9"],["/doc/guide/myp-progress.html","fcb9c145deb6d804cfd6ecb90d54d824"],["/doc/guide/myp-refresher-n.html","3cb0b08df09942688080d2e2f70b78e6"],["/doc/guide/myp-refresher.html","e80c9e652130a7d5b44578e3f2aa34f0"],["/doc/guide/myp-result.html","4ebba52273d3944a07cb07a271ed1788"],["/doc/guide/myp-scroll-h.html","eff679108ac6289c4ba21a9d23a3ef6a"],["/doc/guide/myp-scroll-inline.html","eaa07097f876b28709d762af1158c2d7"],["/doc/guide/myp-scroll-scale-item.html","7598851af33aa1e4338ac18af0cbdf52"],["/doc/guide/myp-scroll-scale.html","7b4f36d61f00d2f1691e95421884143d"],["/doc/guide/myp-search.html","4137d7b08a2b24dc4fd149bf1cb917c0"],["/doc/guide/myp-select.html","0ac7e084cbe94dc97baa0150a3eb5fb9"],["/doc/guide/myp-slider.html","e764c4e8b0479b66098575e156803997"],["/doc/guide/myp-space.html","e4515060b99c598ed0ebfd245119e32d"],["/doc/guide/myp-status.html","ff0860b1e402f1034d34a57dd8bfb70a"],["/doc/guide/myp-stepper.html","4ed514dd146015948c89e50d7e9062b1"],["/doc/guide/myp-switch.html","dd2444de9d05ebda6d2ac2bad4725acf"],["/doc/guide/myp-tabbar.html","c9ec84f315a31eabc39623a5cfacc6ba"],["/doc/guide/myp-tabs-h.html","25ca8c9f00b98185335bae2e20140fb0"],["/doc/guide/myp-tabs-v.html","ca5689430b40a0215c05f8a663eb2982"],["/doc/guide/myp-tag-group.html","86431e59c76030a44d0f2bc2bc8f9b42"],["/doc/guide/myp-tag.html","eb9d469c17b5d8c72313d889b1d9f94f"],["/doc/guide/myp-timeline-item.html","85960a695d58fb2e73c2ea43aec53af5"],["/doc/guide/myp-title.html","21d0ef9f34d3ff66b4877a60b8e9f386"],["/doc/guide/myp-toast.html","af2beaae233c5838a3aee0d30dc37103"],["/doc/guide/myp-waterfall.html","a89340dcdf4444163e3702f78d8f4266"],["/doc/guide/myp-wing.html","b80d88fbef9039fe3754cfa52a31bccc"],["/doc/guide/myp-xbar.html","d563262d91f6fcc5e01c4818a9803180"],["/doc/guide/request.html","19307d9e31a782e9dd7b5597bc99bae5"],["/doc/guide/routing.html","edee8c17e0e58722f3cc14e6df2e4546"],["/doc/guide/scene.html","3a818bfe516060c337501a2a65ce192d"],["/doc/guide/share.html","4847107476440615c71d2f6f4fa57143"],["/doc/guide/system.html","43d388ea7df59d3528e80daa8aed95ac"],["/doc/guide/team.html","016d61730710b1aae07b93d9521121c4"],["/doc/guide/theme.html","ea44379260c668ab8e16485ebf970667"],["/doc/guide/time.html","0071868fab5bd8e248ff857cff91a19b"],["/doc/guide/toast.html","d1a936c548cf60fd6b05052d561480d9"],["/doc/guide/utils.html","24fcea0b53708b15f46915a9bf8965d2"],["/doc/guide/validator.html","14459835d4088ea4f89e9af63c86b767"],["/doc/guide/why.html","785f8294e4b736228bdc50ad0127fcd1"],["/doc/search/index.html","c0a2f63107ae4699f85d8501aad58c0f"],["/doc/style-guide/index.html","7bbc7ad4684cc63ae1edd8cc5feb3619"],["/doc/tool/component.html","37d9d9720d71a62eda9217f30d845de7"],["/doc/tool/icon.html","d98d8baef340eca711f336e4a38f2d18"],["/doc/tool/props.html","5f0da8a56a697afa0dbdf49c01e9a187"],["/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/images/check.png","c634675b753a1a03b587c43d8b535600"],["/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/images/doc/badge.jpeg","b4122d1322b8194c352385a484582930"],["/images/doc/button.png","195be8c366404983ed3ee0bf2c97946c"],["/images/doc/button1.png","329f5d6eb9308752a5769d34044ed3bf"],["/images/doc/cell-extra.jpg","518846271f0eeeb069be9a5aee81e373"],["/images/doc/cell.jpeg","fbdee92438f4a82bbc939e82cea159db"],["/images/doc/check.jpeg","2eba8dc5c283297f04996602b87d6193"],["/images/doc/countdown.jpeg","1e1aa369cbf0e3ceaaa0437a7520567b"],["/images/doc/divider.jpeg","f4055e563089103e7f3f5cfa609162b5"],["/images/doc/drawer-close.png","195cbc0ac80073b46a4f4a3a5625b705"],["/images/doc/drawer-open.png","d6457349f7b46d6692e00aaf43ddbbe1"],["/images/doc/flex.png","a6162696e8670f39e44a9a9aad069124"],["/images/doc/tabbar-bg.jpg","5298e79c0ecf9b977fe6b04d3a694242"],["/images/doc/tabbar-hump-text.jpg","bd088736977dedac72c3455690975142"],["/images/doc/tabbar-hump.jpg","9a883a5ccfab33b4016429a2985291f9"],["/images/doc/tabbar-icon.jpg","60c5f0ef9f6c95743597e2a66209d1c8"],["/images/doc/tabbar-normal.jpg","5c58a4eb0d8acd9a7cea3dc0d55776ed"],["/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/images/down.png","2f948222df409af3121254d5fe0ed377"],["/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/images/icons/android-icon-144x144.png","3c3d1747db2472a4abbf79131efdae95"],["/images/icons/android-icon-192x192.png","9178ef38faaca9a50c2ce7c90d62a1d9"],["/images/icons/android-icon-36x36.png","10b8aabdccbc4abff8acc25dff261b24"],["/images/icons/android-icon-48x48.png","97cebe74545470d2cb2f5438ec2ec68d"],["/images/icons/android-icon-72x72.png","b9a4f4af73391f05e9c4ab1f76d95587"],["/images/icons/android-icon-96x96.png","50a760613db8acf7e66a9a9b6582b3a4"],["/images/icons/apple-icon-114x114.png","cf4704efa5bffc95de9dff2bbff7b084"],["/images/icons/apple-icon-120x120.png","7649091f1485704e3590b1d7a1299d06"],["/images/icons/apple-icon-144x144.png","3c3d1747db2472a4abbf79131efdae95"],["/images/icons/apple-icon-152x152.png","45510fa024df749abdb05739c6c646ea"],["/images/icons/apple-icon-180x180.png","7534f313a12fb9d21c00ae07943aaf59"],["/images/icons/apple-icon-57x57.png","ca82b2a8d42bbf56ecbcaf92cec446df"],["/images/icons/apple-icon-60x60.png","96afdb420e15d1a080e75aaed64bae9a"],["/images/icons/apple-icon-72x72.png","b9a4f4af73391f05e9c4ab1f76d95587"],["/images/icons/apple-icon-76x76.png","0c4aeab565fdd0393f74dec3f9d0df7b"],["/images/icons/apple-icon-precomposed.png","9178ef38faaca9a50c2ce7c90d62a1d9"],["/images/icons/apple-icon.png","9178ef38faaca9a50c2ce7c90d62a1d9"],["/images/icons/favicon-16x16.png","1f467ee7cc67a568bc0fb393c7bff874"],["/images/icons/favicon-32x32.png","23496195d91bffa06df2f57840d2d8e1"],["/images/icons/favicon-96x96.png","16f921bdd6a3b1545cf4b2abb44f65ce"],["/images/icons/ms-icon-144x144.png","3c3d1747db2472a4abbf79131efdae95"],["/images/icons/ms-icon-150x150.png","4168a0e96ed4152050083f87bf666b70"],["/images/icons/ms-icon-310x310.png","37ed183233d8fdc947c35a45ff711dd4"],["/images/icons/ms-icon-70x70.png","0fbb75bb4a64838d0453531f8070c42d"],["/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/images/logo.png","bab28b25f87fbcf90a16d94c823e5528"],["/images/mcui.png","b393f07a7a9cade12a13e1bb77a2e915"],["/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/images/pay_ali_68.png","52e90c65b1cb688990263ac5bac6e0fc"],["/images/pay_wx_68.png","09a0d564724dd4ee2a766be8cc654c80"],["/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/images/small-school.png","04cea6129cb4a5d51ae978d13f3004cd"],["/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/index.html","0d64e0d5a49a7caadf238fb5620e9826"],["/js/common.js","4cd0a2256c9c3662142ca8c261ea3ccb"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/js/theme-data.js","351b24356577311c7630459b2a64bb6e"],["/js/vue.js","cbe2b9b2fb6955decf033515d079e44b"],["/js/vue.min.js","5283b86cbf48a538ee3cbebac633ccd4"],["/manifest.json","95ab11de0e15ff6a0e07c073c369c577"],["/menu/index.html","9e0df27a8446cf61926991a194841d4a"],["/perf/index.html","097953978ab81135a993d974fe9648c4"],["/resources/partners.html","3d0ef10714c0610891c36374930bc9cc"],["/resources/themes.html","55ed3eddaff94a309e4eb8078981fc74"],["/support-mypui/index.html","dea3199535980702260970219f305344"]];
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




