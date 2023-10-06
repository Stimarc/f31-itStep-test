import { 
  cards, 
  home, 
  page404,
} from "../components/pages";

export const routes = [
  { path: '/', component: home },
  { path: '/cards', component: cards },
  { path: '**',  component: page404 }
];