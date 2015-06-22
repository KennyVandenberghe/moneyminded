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
});
