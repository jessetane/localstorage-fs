# localstorage-fs
node's [`fs`](http://nodejs.org/api/fs.html) module backed by [`localStorage`](http://www.w3.org/TR/webstorage/#the-localstorage-attribute)

[![Browser Support](http://ci.testling.com/jessetane/localstorage-fs.png)](http://ci.testling.com/jessetane/localstorage-fs)

## why
[this](https://github.com/juliangruber/level-fs-browser) would be way better, but i needed the sync methods

## how
browserify and use like you would in node land

## api
the highest level methods are supported, though many others could probably be implemented: here is a [list](https://github.com/jessetane/localstorage-fs/blob/master/index.js#L203)

## example
a very simple example: do `npm run exemplify`, then open example/index.html in your browser and inspect. `window.fs` should be defined so you can play around in the console

## test
do `npm test` if you have bash, otherwise `browserify test/index.js -o test/bundle.js` and open test/index.html in your browser

## implementation
* file data and directory listings are keyed by `'/path/name'` under the prefix: `'file://'`
* meta data (also keyed by path name) is stored as JSON stringified `fs.Stats` instances under `'file-meta://'`
* file contents are stored as base64 encoded strings which means binary files work
* directory listings are stored as newline delimited plain strings (like `ls(1)`)

## caveat
* `fs.WriteStream` and `fs.ReadStream` are unavailable until you call `fs.create[Read|Write]Stream()` at least 1x
* some `fs` related [`process`](https://github.com/jessetane/localstorage-fs/blob/master/index.js#L441) methods are shimmed out by this module for now

## license
WTFPL