import { Header, Footer, Main, Row, Column } from './components/Layout.js';
import { Router } from './components/Router.js';
import { Button } from './components/Button.js';
import { Home, About, Archive } from './pages.js';
import { toKebabCase } from './lib/utils.js';

const components = [
    Header,
    Footer,
    Main,
    Row,
    Column,
    Button,
    Home,
    About,
    Archive
]

const routes = [
    { path: '/',      component: 'Home' },
    { path: '/home',      component: 'Home' },
    { path: '/about', component: 'About' },
    { path: '/archive', component: 'Archive' },
    { path: '/post/:slug', component: 'post-page' },
    { path: '*',      component: 'Home' }
]



const app = () => {
    components.forEach(c => {
        customElements.define(`x-${toKebabCase(c.name)}`, c);
    })

    const router = new Router(routes, document.querySelector('main'));
    
    router.resolve();
    
    document.querySelectorAll('.button.navigation').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        router.navigate(btn.pathname);
      });
    });
}

document.addEventListener('DOMContentLoaded', app);