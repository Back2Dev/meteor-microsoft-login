Package.describe({
  summary: "Microsoft OAuth flow",
  version: "0.0.2",
});

Package.onUse((api) => {
  api.use("accounts-base@2.2.6", ["server"]);
  api.use("ecmascript", ["client", "server"]);
  api.use("oauth2", ["client", "server"]);
  api.use("oauth", ["client", "server"]);
  api.use("fetch", "server");
  api.use("random", "client");
  api.use("service-configuration", ["client", "server"]);

  api.addFiles("microsoft_client.js", "client");
  api.addFiles("microsoft_server.js", "server");

  api.export("Microsoft");
});
