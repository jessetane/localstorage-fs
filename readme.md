# localstorage-fs
node's fs module for the browser backed by [localStorage](http://www.w3.org/TR/webstorage/#the-localstorage-attribute)

## why
there is [this](https://github.com/juliangruber/level-fs-browser), but i needed sync methods

## how
browserify and use it like you would in node land

## api
same as in node but a bunch of methods are not implemented yet, view the [source](https://github.com/jessetane/localstorage-fs/blob/master/index.js#L203)

## implementation details
* file data and file metadata are stored under two prefixes: 'file://' and 'file-meta://' respectively
* raw file data is stored as base64 encoded strings under the file:// prefix
* directory listings are indexed as comma separated lists of file names under the file:// prefix
* stats are indexed under the file-meta:// prefix
* `fs.WriteStream` and `fs.ReadStream` are unavailable until you call `fs.create[Read|Write]Stream`
* `process.chdir`, `process.cwd` and `process.umask` are shimmed by this module for now

## example
there is a *very* simple example: do `npm run exemplify` then open example/index.html in your browser console

## test
no tests yet - maybe node's fs tests would work?

## license
WTFPL