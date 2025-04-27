
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/T2_Task05_E-commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/T2_Task05_E-commerce"
  },
  {
    "renderMode": 2,
    "route": "/T2_Task05_E-commerce/catalog"
  },
  {
    "renderMode": 2,
    "route": "/T2_Task05_E-commerce/cart"
  },
  {
    "renderMode": 2,
    "redirectTo": "/T2_Task05_E-commerce",
    "route": "/T2_Task05_E-commerce/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 514, hash: '386aa91f93edc2c89a8828c7b3855b19e663a10e4bb3b6769b814c93bc4ec166', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '52390fac25e616ab5e5954d8f59448e2092a2504f4b990c7dd8bfc871ef3ccdc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'catalog/index.html': {size: 69289, hash: '471c2069f0f764d49c4c16dc2f5a6f24e663e7cd6f862efaa00d6a26ff41ae6a', text: () => import('./assets-chunks/catalog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6585, hash: '201d53070f74328c920ecad2eb6e839bad5fd8d6c0ceae0adf32a837a35facf8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 4732, hash: 'a972dafe88289a315d0a5ed452b3134d8c3faf1c6de6bb16da37b94652394d0a', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
