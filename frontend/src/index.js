import HomeScreen from './srceens/HomeScreen';
import ProductScreen from './srceens/ProductScreen';
import { parseRequestUrl } from './utils';
import Error404Screen from './srceens/Error404Screen';
import CartScreen from './srceens/CartScreen';
import SigninScreen from './srceens/SigninScreen';

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
  '/cart/:id': CartScreen,
  '/cart': CartScreen,
  '/signin': SigninScreen,
};
const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
  await screen.after_render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
