# `Shopping Cart with Free Gift`
This React application simulates a simple shopping cart with product selection quantity adjustment and a free gift
feature

## Features

-  Display a list of products with quantity selectors
-  and "Add to Cart" buttons.
-  Show the shopping cart with added products, quantities and prices.
-  Enable users remove products quantities in the cart.
-  Automatically add a free gift when the cart subtotal reaches a specified threshold
-  Display a progress bar indicating how much more is needed to unlock the free gift.
-  Uses React's built-in-state management (useState, useEffect) for managing produucts
-  and cart data

### `Install dependencies(if applicable,using npm or yarn)`

 if using next.js\
 bash\
     npm install\
or \
bash \
    yarn install

### `Start the development server`
   npm start

### `Open your browser and access the application`

    The application should be running at http://localhost:3000 (or the appropriate port).

### `Project Structure`

-  src/ : Contains the React application source code.
-  App.js : Main application component.
-  components/ : Contains reusable components.
-  ProductList.js : Displays the list of products.
-  Cart.js : Displays the shopping cart.
-  ProgressBar.js : Displays the progress bar for the free gift.
-  public/ : Contains statci assets (if any).
-  

## Implementation Details

-  The application uses useState to manage the product list and cart items.
-  The useEffect hook is used to calculate the cart subtotal and determine if the free gift
-  should be added.
-  The free gift is added as a special item in the cart,
-  with logic to prevent its manual removal.
-  Quantity adjustment and item removals are handled by updating the cart state appropriately.
-  The progress bar dynamically reflects the user's progress towards unlocking the free gift.


**Notes**
-  This application is designed to be a simple demonstration and can be further enhanced
-  with more advanced features and stying.
-  No external libraries are used, adhering the project restriction.
-  The style and UI can be modified to fit the specific requirements.


