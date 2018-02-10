import { Addon } from './addon.module';
const addon = new Addon();

if (typeof browser !== 'undefined') {
  browser.webRequest.onBeforeRequest.addListener(
    addon.redirect,
    {
      urls: ["https://www.amazon.de/*"],
      types: ["main_frame"]
    },
    ["blocking"]
  );
}
