import { routes } from ".";
import { getHash } from "./../utils";

export const renderRoutes = (selector) => {
  let route = getHash();
  let resource;


  if (route === '') {
    route = '/';
  }

  console.log(route);

  resource = routes.find( r => r.path === route );

  if (!resource) {
    resource = routes.find( r => r.path === '**' );
  }

  render(resource.component, selector);
}

export function render(component, selector) {
  const outlet = document.querySelector(selector);
  outlet.innerHTML = component();
}