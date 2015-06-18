Package.describe({
  summary: "MoneyMinded"
});

Package.on_use(function (api, where) {
  api.use(['mongo', 'sewdn:collection-behaviours', 'underscore']);
  api.use([
  ], ['client', 'server']);
  api.use([
    'ui'
  ], ['client']);

  api.imply([
  ], ['client', 'server']);

  // api.add_files([
  //   // 'namespace.js',
  //   'model.js'
  // ], ['client', 'server']);

  // api.export('MM');

  // api.add_files([
  //   'fixtures.js'
  // ], 'server');

});