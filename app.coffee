axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'

jeet         = require 'jeet'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf', 'wipSquireTeaser/**']

  extensions: [
    # js_pipeline(files: 'assets/js/*.coffee'),
    # js_pipeline(files: 'assets/js/*.js'),
    css_pipeline(files: 'assets/css/*.styl')
  ]

  stylus:
    use: [axis(), jeet(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    # sourcemap: true
    sourcemap: false

  jade:
    pretty: true
