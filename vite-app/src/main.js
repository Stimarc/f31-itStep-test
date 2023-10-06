import { header } from './components/header';
import { browserRouter, render } from './routes';
import './scss/style.scss';

browserRouter('#app');

render(header, '.header');