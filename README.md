# timeago.locales.min.js

It is just an attempt to make the `timeago.locales.min.js` file from the [hustcc/timeago.js](https://github.com/hustcc/timeago.js.git) project
even smaller by refactoring current locale files.

## Setup
1. Install [Node.js](https://nodejs.org/en/download/) (tested on `6.9.x`).
2. Download and unpack both projects

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

2. Install dependencies, build original minified files:
```
cd timeago.js
npm install
gulp mini
webpack
cd ..
cd timeago-min-locales-js
npm install
```

3. Copy all the source and locale files needed to build a new minified version:
```
cp -R ../timeago.js/src/* ./src/
cp -R ../timeago.js/dist/* ./dist/*
mv ./dist/timeago.locales.min.js ./dist/timeago.locales.min-orig.js
cp -R ../timeago.js/locales/*.js ./locales_orig/*
cp ../timeago.js/webpack.config.js ./
```

## Running
1. To build a new minified locales file go to the timeago.locales.min-orig.js directory
and run the command:
```
npm run mini-build
```
