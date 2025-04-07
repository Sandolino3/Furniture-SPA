// @ts-ignore
import page from "../node_modules/page/page.mjs";
// Define the routes    
import { catalogView } from "./views/catalogView.js";
import { detailsView } from "./views/detailsView.js";
import { createView } from "./views/createView.js";
import { editView } from "./views/editView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { myFurnitureView } from "./views/myFurnitureView.js";


page('/', () => {
    catalogView();
});
page('/details/:id', (ctx) => {
    detailsView(ctx);
});
page('/create', () => {
    createView();
});
page('/edit/:id', (ctx) => {
    editView(ctx);
});
page('/login', () => {
    loginView();
});
page('/register', () => {
    registerView();
});
page('/my-furniture', () => {
    myFurnitureView();
});


// Start the application
page.start();
