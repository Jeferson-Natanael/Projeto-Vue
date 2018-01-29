const _products = [
  {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
  {'id': 2, 'title': 'iPad 4 Pro', 'price': 2000.99, 'inventory': 10,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
  {'id': 3, 'title': 'LG K10', 'price': 790.99, 'inventory': 5,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
  {'id': 4, 'title': 'Galaxy S7', 'price': 1390.99, 'inventory': 8,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
  {'id': 5, 'title': 'iPhone 7', 'price': 3010.53, 'inventory': 5,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
  {'id': 6, 'title': 'iPhone 7 Plus', 'price': 5250.33, 'inventory': 7,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
  {'id': 7, 'title': 'Nexus 5', 'price': 1250.80, 'inventory': 12,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
  {'id': 8, 'title': 'Nokia LUMIA 1020', 'price': 390.90, 'inventory': 3,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
  {'id': 9, 'title': 'Galaxy S5', 'price': 590.89, 'inventory': 9,
  'images': [
    'https://dummyimage.com/800/ffffff/000000',
    'https://dummyimage.com/1600/ffffff/000000',
    'https://dummyimage.com/1280/000000/ffffff',
    'https://dummyimage.com/400/000000/ffffff',
  ],
  'index': null},
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
