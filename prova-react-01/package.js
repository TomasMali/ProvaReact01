Package.describe({
  name: 'prova-react-01',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
/*
Npm.depends({
  'packaged-app-reactjs':'0.1.3'
})*/

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.2');
	api.use(['rocketchat:lib@0.0.1'], ['client', 'server'], { weak: true, unordered: false })

  api.use(['ecmascript','rocketchat:lib',
        'rocketchat:ui-message',
	'templating']);
  //api.mainModule('prova-react-01.js');
	/*api.use([
		'cosmos:browserify@0.9.3',
		'templating'
	], 'client');*/
	api.addFiles([
		'client/bubbles.js',
		//'client/package.browserify.js',
		//'client/package.browserify.options.json',
		'client/views/bubble_menu.html',
		'client/views/bubble_menu.js',
		'client/views/bubble_view.html',
		'client/views/bubble_view.js',
		'client/views/bv_render.js',
		'client/views/bm_render.js'
	], ['client']);
	api.addFiles('server/index.js', ['server']);
//api.addAssets('client/views/flyin.html', 'client');
api.addAssets('client/views/main.css', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('prova-react-01');

});
