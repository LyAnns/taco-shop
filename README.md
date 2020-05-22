## Application concept and Wireframe
### Application concept
- This is a Taco Shop ordering app
- Full CRUD
    - GET taco orders
    - POST create new order
    - PUT update existing order
    - DELETE delete order

### Functionality
- Page will have a header with Taco Shop name
- When the page loads, it will display the available list of Tacos, the Taco Order list and a button to add a new order. 
- When we click the new order button, we select a Taco we want and we enter the customer name. 
- When a new order is created, it will be shown on the Taco Order list, including the order's customer name and selected Taco.
- Taco orders in the Taco Order list will show a delete button to delete the order and an option to change the selected Taco. 
- The Taco order list will update when an order is deleted

### Endpoints

- GET - fetches 3 tacos different Taco options that are available for ordering 
- GET - fetches list of Taco orders
- POST - pushes a new Taco order to the list of Taco orders
- PUT - update an existing Taco order
- DELETE - delete existing Taco order


### Component Architecture 
- App.js (functional)
  - Header.js (functional)
  - TacoList.js (functional)
    - Taco.js (functional)
  - OrderList.js (functional)
    - Order.js (stateful: hold order selection data)
  - NewOrderEntry (stateful, hold the new order data)
