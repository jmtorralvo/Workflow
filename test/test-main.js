var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

    paths: {
        'jquery': '../lib/jquery/jquery',
        'lodash': '../lib/lodash/dist/lodash',
        'templateLoader': '../../test/spec/templateLoader',
        'modules/toggle': 'modules/toggle',
        'modules/activePress': 'modules/activePress'
    },

    shim: {
        'templateLoader':{
            exports: 'loadTemplates',
            deps: ['lodash', 'jquery']
        },
        '../../test/spec/unit/formsSpec':{
            deps:['templateLoader']
        } 
    },
   

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});