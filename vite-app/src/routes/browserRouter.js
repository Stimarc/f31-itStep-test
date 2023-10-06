import { renderRoutes } from "."

export const browserRouter = (selector) => {
  renderRoutes(selector);

  addEventListener('hashchange', () => renderRoutes(selector));
}