# timeago.locales.min.js

It is just an attempt to make the `timeago.locales.min.js` file from the [hustcc/timeago.js](https://github.com/hustcc/timeago.js.git) project
even smaller by refactoring current locale files.

## Progress
* Refactored files (<!-- replace:miniFilesNum -->37<!-- end:replace:miniFilesNum -->): <!-- replace:miniFiles -->bg, ca, da, de, el, en, en_short, es, eu, fa, fi, fr, gl, he, hu, in_BG, in_HI, in_ID, it, ja, ko, ml, my, nb_NO, nl, nn_NO, pl, pt_BR, ro, ru, sv, ta, th, tr, vi, zh_CN, zh_TW<!-- end:replace:miniFiles -->

* Files to refactor (<!-- replace:todoFilesNum -->5<!-- end:replace:todoFilesNum -->): <!-- replace:todoFiles -->ar, be, sq, sr, uk<!-- end:replace:todoFiles -->

* Minified size after refactoring: <!-- replace:miniBytes -->20187<!-- end:replace:miniBytes --> bytes (<!-- replace:diffPercent -->64.69<!-- end:replace:diffPercent -->% of original <!-- replace:origBytes -->31208<!-- end:replace:origBytes --> bytes)

* Saved: <!-- replace:diffBytes -->11021<!-- end:replace:diffBytes --> bytes (<!-- replace:savedPercent -->35.31<!-- end:replace:savedPercent -->%)

## Setup
* Install [Node.js](https://nodejs.org/en/download/) (tested on `6.9.x`).
* Download and unpack both projects

using git:
```
git clone https://github.com/hustcc/timeago.js.git;
git clone https://github.com/greg-dev/timeago.locales.min.js.git;
```
or using cUrl:
```
curl -LOk https://github.com/hustcc/timeago.js/archive/master.zip;
unzip master.zip;
mv timeago.js-master timeago.js;
curl -LOk https://github.com/greg-dev/timeago.locales.min.js/archive/master.zip;
unzip master.zip;
mv timeago.locales.min.js-master timeago.locales.min.js;
rm master.zip;
```
* Install dependencies, build original minified files:
```
cd timeago.js
npm install
gulp mini
webpack
cd ..
cd timeago.locales.min.js
npm install
```
* Copy all the source and locale files needed to build a new minified version:
```
cp -R ../timeago.js/src/* ./src/
cp -R ../timeago.js/dist/* ./dist/
mv ./dist/timeago.locales.min.js ./dist/timeago.locales.min-orig.js
cp -R ../timeago.js/locales/*.js ./locales_orig/
cp ../timeago.js/webpack.config.js ./
```

## Running
* To build a new minified locales file go to the timeago.locales.min.js directory
and run the command:
```
npm run mini-build
```

* To make sure that new locales give the same output as the old ones use:
```
npm run mini-regression-tests
```

* To compare the speed of new and old locales run:
```
npm run mini-performance-tests
```

## Credits
https://github.com/hustcc/timeago.js/graphs/contributors
