// import { flatRoutes } from "@remix-run/fs-routes";

// console.log("Routes",flatRoutes())

// export default flatRoutes();

// Static route configuration for production
const staticRoutes = [
  {
    id: "routes/webhooks.app.uninstalled",
    file: "routes/webhooks.app.uninstalled.jsx",
    path: "webhooks/app/uninstalled",
    index: undefined,
    caseSensitive: undefined,
  },
  {
    id: "routes/auth.login",
    file: "routes/auth.login/route.jsx",
    path: "auth/login",
    index: undefined,
    caseSensitive: undefined,
  },
  {
    id: "routes/auth.$",
    file: "routes/auth.$.jsx",
    path: "auth/*",
    index: undefined,
    caseSensitive: undefined,
  },
  {
    id: "routes/_index",
    file: "routes/_index/route.jsx",
    path: undefined,
    index: true,
    caseSensitive: undefined,
  },
  {
    id: "routes/app",
    file: "routes/app.jsx",
    path: "app",
    index: undefined,
    caseSensitive: undefined,
    children: [
      // Add child routes here if necessary
    ],
  },
];

const routes =  staticRoutes;

console.log("Routes:", routes);

export default routes;
