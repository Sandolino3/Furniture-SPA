// @ts-ignore
import page from "../node_modules/page/page.mjs";
// Define the routes    


page('/', () => {
    console.log('Home Page');
});
page('/details/:id', () => {
    console.log('Details Page');
});
page('/create', () => {
    console.log('Create Page');
});
page('/edit/:id', () => {
    console.log('Edit Page');
});
page('/login', () => {
    console.log('Login Page');
});
page('/register', () => {
    console.log('Register Page');
});
page('/my-furniture', () => {
    console.log('My Furniture Page');
});
// Start the application
page.start();
