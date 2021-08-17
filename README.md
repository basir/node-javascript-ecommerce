# JS AMAZONA
# Amazona ECommerce Website
![amazona](/frontend/images/jsamazona.jpg)

# JavaScript Tutorial - Full ECommerce in 7 Hours [2021]

Welcome to my React and Node tutorial to build a fully-functional e-commerce website exactly like amazon. Open your code editor and follow me for the next hours to build an e-commerce website using Vanilla JavaScript and Node.JS, ExpressJS and MongoDB.

## Watch YouTube Video
[https://www.youtube.com/watch?v=N3FDyheHVMM](https://www.youtube.com/watch?v=N3FDyheHVMM)

## Demo Website

- 👉 Heroku : [https://jsamazona.herokuapp.com](https://jsamazona.herokuapp.com)
- 👉 AWS : [https://jsamazona.webacademy.pro](https://jsamazona.webacademy.pro)


## You Will Learn

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- JavaScript: ES6+, Array Functions, Rendering System
- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
- Development: ESLint, Babel, Git, Github,
- Deployment: Heroku
- Watch React & Node Tutorial

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:basir/node-javascript-ecommerce.git
$ cd node-javascript-ecommerce
```

### 2. Setup MongoDB
 - Download and Install it from [mongodb.com](https://www.mongodb.com/try/download/community)

### 3. Create .env file
- Create .env file in project folder
- Enter these lines to that:

```
MONGODB_URL=mongodb://localhost/jsamazona
JWT_SECRET=somethingsecret
PAYPAL_CLIENT_ID="your paypal client id" or sb
```

### 4. Run Backend

```
$ npm install
$ npm run build
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Create Admin User

- Run this on chrome: http://localhost:5000/api/users/createadmin
- Note admin email and password

### 7. Admin Login

- Run http://localhost:8080/#/signin
- Enter admin email and password and click signin
- Click Dashboard Link on Header Menu
- Click Products on left sidebar
- Click Create Product Button
- Enter Product Information
- Go to home page (http://localhost:8080) and test Ecommerce Website

## Support

- Q/A: https://codingwithbasir.com
- Contact Instructor: [Basir](mailto:basir.jafarzadeh@gmail.com)


# Features

1. Home Screen
   1. Static Web Page Design
   2. CSS Grid to create website layout
   3. Flexbox to shape product thumbnails and responsive design
2. Product Screen
   1. create single page application
   2. Create buttons and add events to buttons
3. Cart Screen
   1. Save and retrieve data in local storage
   2. Master in javascript array functions
   3. Use combo box and add event to it
   4. re-render screen based on changes in item count
4. Sign-in and Register Screen
   1. Create dynamic form
   2. Input validation in frontend and backend
   3. Create web server using node.js
   4. Connect to Mongodb database
   5. Add registered user to the database
   6. Authenticate user based on email and password
   7. Using Jsonwebtoken to authorize users
5. Shipping and Payment Screen
   1. Create wizard form to get user data in multiple steps
   2. Save user info in the local storage
6. Place Order Screen
   1. Validate and create order in the database
7. Order Screen
   1. Payment with paypal
   2. Show order state based on user and admin activities
8. Profile Screen
   1. Create authenticated routes
   2. enable user to update their informations
   3. enable user to logout and clear local storage
   4. show list of orders to user and link it to details
9. Dashboard Screen
   1. Create professional dashboard using pure CSS
   2. Using chart library to show sales information
10. Order Screen
    1. Enable admin to mange orders
    2. show loading message and alert message
11. Product Screen
    1. enable admin to manage products
    2. upload product images to server

# Lessons

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
   8. add script main.js before body tag
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
    1. create SigninScreen
    2. render email and password fields
    3. style signin form
21. Sign-in Screen Backend
    1. create signin api in backend
    2. create route for /api/users/signin
    3. create check user name and password
    4. if it is not ok the return 401 error
    5. install express-async-handler
    6. wrap it in expressAsyncHandler
    7. add error middleware in server.js
    8. install Postman
    9. send post request
    10. test with invalid user password
    11. otherwise generate token
    12. install jsonwebtoken
    13. set config.JWT_SECRET to somethingsecret
    14. add generateToken to utils.js
    15. return token
    16. test with correct user and password
22. Sign-in Screen Action
    1. after_render handle form submit
    2. create signin request in frontend
    3. show alert if email or password is incorrect
    4. Add getUserInfo and setUserInfo to localStorage
    5. create Header component
    6. if userInfo.email exist show user name otherwise show signin
23. Create Progress Indicator and Alert Component
    1. create overlay loading div in index.html
    2. Style overlay loading
    3. create showLoading() function
    4. set loading-overlay classList add active
    5. create hideLoading() function
    6. create overlay message div in index.html
    7. add style overlay message
    8. create showMessage(message, callback)
    9. document message-overlay set inner HTML
    10. div > div id message-overlay-content
    11. show message
    12. button id message-overlay-close-button OK
    13. add class active to it
    14. add event listener for button to call callback
24. Register Screen
    1. create RegisterScreen.js
    2. add form elements
    3. after_render handle form submit
    4. create register request in frontend
    5. create register api in backend
25. User Profile Screen
    1. create ProfileScreen.js
    2. add form elements
    3. after_render handle form submit
    4. create profile update request in frontend
    5. create profile update api in backend
    6. create isAuth in utils.js and use in update profile
    7. implement sign out
26. Checkout Wizard
    1. create CheckoutSteps.js
    2. create div elements for step 1 to 4
    3. create redirectUser() in utils.js
    4. copy profile screen and as shipping screen
    5. use CheckoutStep
    6. define getShipping and setShipping
    7. copy shipping screen and as payment screen
    8. define getPayment and setPayment
    9. redirect user to PlaceOrder.js
27. PlaceOrder Screen UI
    1. create PlaceOrder.js
    2. style elements
28. PlaceOrder Screen Action
    1. handle place order button click
    2. createOrder api
    3. create orderModel
    4. create orderRouter
    5. create post order route
29. Order Screen
    1. create OrderScreen.js
    2. style elements
30. PayPal Payment
    1. get client id from paypal
    2. set it in .env file
    3. create route form /api/paypal/clientId
    4. create getPaypalClientID in api.js
    5. add paypal checkout script in OrderScreen.js
    6. show paypal button
    7. update order after payment
    8. create payOrder in api.js
    9. create route for /:id/pay in orderRouter.js
    10. rerender after pay order
31. Display Orders History
    1. create customer orders api
    2. create api for getMyOrders
    3. show orders in profile screen
    4. style orders
32. Admin Dashboard UI
    1. Header.js
    2. if user is admin show Dashboard
    3. create DashboardScreen
    4. create DashboardMenu
    5. Style dashboard
33. Admin Products UI
    1. create ProductListScreen.js
    2. show products with edit and delete button
    3. show create product button
34. Create Product
    1. create product model
    2. implement create product route
    3. create product function in api.js
    4. call create product function in ProductListScreen
    5. redirect to edit product
35. Edit Product UI
    1. create ProductEditScreen.js
    2. load product data from backend
    3. handle form submit
    4. save product in backend
36. Edit Product Backend
    1. handle form submit
    2. create updateProduct
    3. save product in backend
37. Upload Product Image
    1. npm install multer
    2. create routes/uploadRoute.js
    3. import express and multer
    4. create disk storage with Date.now().jpg as filename
    5. set upload as multer({ storage })
    6. router.post('/', upload.single('image'))
    7. return req.file.path
    8. app.use('/api/uploads',uploadRoute) in server.js
    9. create uploads folder and put empty file.txt there.
    10. ProductEditScreen.js
    11. create file input and set id to image-file
    12. after_render() handle image-file change
    13. create form data
    14. call uploadProductImage()
    15. create uploadProductImage in api.js
    16. update server.js
38. Build Project
    1. create build script for frontend
    2. create build script for backend
    3. update sever.js to serve frontend build folder and uploads folder
    4. stop running frontend
    5. npm run build
    6. check localhost:5000 for running website and showing images
39. Delete Product
    1. update ProductListScreen.js
    2. handle delete button
    3. rerender after deletion
40. Admin Orders
    1. create Admin Order menu in header
    2. create AdminOrder.js
    3. load orders from backend
    4. list them in the screen
    5. show delete and edit button
    6. redirect to order details on edit action
41. Deliver Order
    1. if order is payed show deliver button for admin
    2. handle click on deliver button
    3. set state to delivered
42. Show Summary Report in Dashboard
    1. create summary section
    2. style summary
    3. create summary backend
    4. create getSummary in api.js
    5. load data in dashboard screen
    6. show 3 boxes for Users, Orders and Sales
43. Show Chart in Dashboard
    1. import chartist
    2. add chartist css to index.html
    3. create linear chart for daily sales
    4. create pie chart for product categories
44. Publish heroku
    1. Create git repository
    2. Create heroku account
    3. install Heroku CLI
    4. heroku login
    5. heroku apps:create <yourname>jsamazona
    6. Edit package.json for heroku-prebuild
    7. Edit package.json for heroku-postbuild
    8. Edit package.json for node engines
    9. Create Procfile
    10. Edit server.js for PORT
    11. Create mongodb atlas database
    12. create MongoDB Account
    13. open cloud.mongodb.com
    14. add new user and save username and password
    15. set Network Access to accept all requests
    16. Create new database
    17. create connection string based on db name and user and password
    18. Set Cloud MongoDB connection in heroku env variables
    19. Commit and push
45. Product Search Bar
    1. create search bar in Header.js
    2. add style
    3. handle submit form
    4. edit parse url to get query string
    5. update product list api for search keyword
46. Show Categories In Sidebar Menu
    1. create aside-open-button in Header.js
    2. add event to open aside
    3. create Aside.js component
    4. Add style aside
    5. after render close it on click on close button
    6. Use it in index.html
    7. Update index.js to render aside 9.
    8. call getCategories
    9. create getCategories in api.js
47. Review Products
    1.  create review model
    2.  create review form
    3.  create review api
    4.  style review form
