JS AMAZONA

1. Create Folder Structure
   1. create root folder as jsamazona
   2. add frontend and backend folder
   3. create src folder in frontend
   4. create index.html with heading jsamazona in src
   5. run npm init in frontend folder
   6. npm install live-server
   7. add start command as live-server src --verbose
   8. run npm start
   9. check result
2. Design Website
   1. create style.css
   2. link style.css to index.html
   3. create div.grid-container
   4. create header, main and footer
   5. style html, body
   6. style grid-container, header, main and footer
3. Create Static Home Screen
   1. create ul.products
   2. create li
   3. create div.product
   4. add .product-image, .product-name, .product-brand, .product-price
   5. style ul.products and internal divs
   6. duplicate 2 times to show 3 products
4. Render Dynamic Home Screen
   1. create data.js
   2. export an array of 6 products
   3. create screens/HomeScreen.js
   4. export HomeScreen as an object with render() method
   5. implement render()
   6. import data.js
   7. return products mapped to lis inside an ul
   8. create app.js
   9. link it to index.html as module
   10. set main id to main-container
   11. create router() function
   12. set main_container innerHTML to HomeScreen.render()
   13. set load event of window to router() function
5. Build Url Router
   1. create routes as route:screen object for home screen
   2. create utils.js
   3. export parseRequestURL()
   4. set url as hash address split by slash
   5. return resource, id and verb of url
   6. update router()
   7. set request as parseRequestURL()
   8. build parsedUrl and compare with routes
   9. if route exists render it, else render Error404
   10. create screens/Error404.js and render error message
6. Create Node.JS Server
   1. run npm init in root jsamazona folder
   2. npm install express
   3. create server.js
   4. add start command as node backend/server.js
   5. require express
   6. move data.js from frontend to backend
   7. create route for /api/products
   8. return products in data.js
   9. run npm start
7. Load Products From Backend
   1. edit HomeScreen.js
   2. make render async
   3. fetch products from '/api/products' in render()
   4. make router() async and call await HomeScreen.render()
   5. use cors on backend
   6. check the result
8. Add Webpack
   1. cd frontend
   2. npm install -D webpack webpack-cli webpack-dev-server
   3. npm uninstall live-server
   4. "start": "webpack-dev-server --mode development --watch-content-base --open"
   5. move index.html, style.css and images to frontend folder
   6. rename app.js to index.js
   7. update index.html
   8. add <script src="main.js"></script> before </body>
   9. npm start
   10. npm install axios
   11. change fetch to axios in HomeScreen
9. Install Babel For ES6 Syntax
   1. npm install -D babel core, cli, node, preset-env
   2. Create .babelrc and set presets to @babel/preset-env
   3. npm install -D nodemon
   4. set start: nodemon --watch backend --exec babel-node backend/server.js
   5. convert require to import in server.js
   6. npm start
10. Enable Code Linting
    1. npm install -D eslint
    2. install VSCode eslint extension
    3. create .eslintrc and set module.exports for env to node
    4. Set VSCode setting for editor.codeActionsOnSave source.fixAll.eslint to true
    5. check result for linting error
    6. npm install eslint-config-airbnb-base and eslint-plugin-import
    7. set extends to airbnb-base
    8. set parserOptions to ecmaVersion 11 and sourceType to module
    9. set rules for no-console to 0 to ignore linting error
11. Install VSCode Extension
    1. JavaScript (ES6) code snippets
    2. ES7 React/Redux/GraphQL/React-Native snippets
    3. Prettier - Code formatter
    4. HTML&LESS grammar injections
12. Create Rating Component
    1. create components/Rating.js
    2. link to fontawesome.css in index.html
    3. create div.rating
    4. define Rating object with render()
    5. if !props.value return empty div
    6. else use fa fa-star, fa-star-half-o and fa-star-o
    7. last span for props.text || ''
    8. style div.rating, span and last span
    9. Edit HomeScreen
    10. Add div.product-rating and use Rating component
13. Product Screen
    1. get product id from request
    2. implement /api/product/:id api
    3. send Ajax request to product api
14. Product Screen UI
    1. create back to result link
    2. create div.details with 3 columns
    3. column 1 for product image
    4. column 2 for product information
    5. column 3 form product action
    6. style .details and all columns
    7. create add to cart button with add-button id
15. Product Screen Action
    1. after_render() to add event to the button
    2. add event handler for the button
    3. redirect user to cart/:product_id
    4. implement after_render in index.js
16. Add To Cart Action
    1. create CartScreen.js
    2. parseRequestUrl
    3. getProduct(request.id)
    4. addToCart
    5. getCartItems
    6. cartItems.find
    7. if existItem update qty
    8. else add item
    9. setCartItems
17. Cart Screen UI
    1. cartItems = getCartItems()
    2. create 2 columns for cart items and cart action
    3. cartItems.length === 0 ? cart is empty
    4. show item image, name, qty and price
    5. cart action
    6. Subtotal
    7. Proceed to Checkout button
    8. Add CSS Style
18. Update and Delete Cart Items
    1. add qty select next to each item
    2. after_render()
    3. add change event to qty select
    4. getCartItems() and pass to addToCart()
    5. set force to true to addToCart()
    6. create rerender() as (component, areaName = 'content')
    7. component.render and component.after_render
    8. if force is true then rerender()
    9. add delete button next to each item
    10. add click event to qty button
    11. call removeFromCart(deleteButton.id)
    12. implement removeFromCart(id)
    13. setCartItems( getCartItems().filter)
    14. if id === parseRequestUrl().id? redirect to '/cart'
    15. else rerender(CartScreen);
19. Connect To MongoDB and Create Admin User
    1. npm install mongoose
    2. connect to mongodb
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create userRoute
    9. create createadmin route
20. Sign-in Screen UI
    2. create SigninScreen
    3. render email and password fields
    4. style signin form
21. Sign-in Screen Action
    1. after_render handle form submit
    2. create signin request in frontend
    3. create signin api in backend
22. Create Header Component
    1. update index.html
    1. add header render and after render to router function
    1. show header menu based on user logged in or not
23. Register Screen Action
    1. after_render handle form submit
    2. create register request in frontend
    3. create register api in backend
24. Create Checkout Wizard Header Component
    1. create component
    2. style component
25. Shipping Screen
    1. create ShippingScreen.js
    2. style elements
    3. handle form submit
26. Payment Screen
    1. create PaymentScreen.js
    2. style elements
    3. handle form submit
27. PlaceOrder Screen UI
    1. create PlaceOrder.js
    2. style elements
28. PlaceOrder Screen Action
    1. handle form submit
    2. create backend api to create order
29. Order Screen
    1. create OrderScreen.js
    2. style elements
30. PayPal Payment
    1. add paypal checkout script
    2. show paypal button
    3. update order after payment
31. User Profile UI
    1. create ProfileScreen.js
    2. style elements
32. User Profile Data
    1. Create profile info backend api
    2. Create user orders api
    3. Call apis in the backend
33. Update Profile
    1. handle form submit
    2. send request to backend
    3. create api to update profile
34. Admin Products UI
    1. create Admin Order menu in header
    2. create ProductListScreen.js
    3. show products with edit and delete button
    4. show create product button
    5. implement create product backend
    6. redirect user to edit product screen
35. Edit Product
    1. create ProductListScreen.js
    2. load product data from backend
    3. handle form submit
    4. save product in backend
36. Delete Product
    1. update ProductListScreen.js
    2. handle delete button
    3. rerender after deletion
37. Admin Orders
    1. create Admin Order menu in header
    2. create AdminOrder.js
    3. load orders from backend
    4. list them in the screen
    5. show delete and edit button
    6. redirect to order details on edit action
38. Edit Order
    1. if order is payed show deliver button for admin
    2. handle click on deliver button
    3. set state to delivered
39. Delete Order
    1. update OrderListScreen.js
    2. handle delete button
    3. rerender after deletion
40. Publish heroku
    1. publish steps
