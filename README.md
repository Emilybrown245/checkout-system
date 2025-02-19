# Checkout System

This is a simple checkout system built with React and TypeScript. It allows users to add items to a basket, view the total price with any applicable special offers, and clear the basket.


## Features:

- Add items to the basket.
- View the running total, including special offers.
- Clear the basket at any time.
- Calculations account for unit prices and special offer pricing.


## Installation & Setup:

1. **Clone the repository:**
    
    git clone https://github.com/Emilybrown245/checkout-system.git
    
2. **Navigate into the project fold**
    
    cd checkout-system
    
3. **Install dependencies:**
    
    This project uses `npm` as a package manager.
    
    npm install
    
4. ## Required Node.js Version:

    To run this project, you need Node.js **v14.x** or higher. You can check your Node.js version by running:

    node -v

If you need to install or update Node.js, you can download the latest version from the [official Node.js website](https://nodejs.org/).

5. **Run the development server:**

    npm run dev

This will start the development server, where you can view the application


## Usage:

1. **Add Items to the Basket:**

    - Click on the item buttons (A, B, C, D) to add items to the basket.

2. **View Total:**

    - The total price will be displayed, including any applicable special offers.

3. **Clear Basket:**

    - Click the "Clear Basket" button to reset the basket and total.


## Example Pricing Rules:

- **Item A**:
    - Unit Price: £50
    - Special Offer: Buy 3 for £130
- **Item B**:
    - Unit Price: £30
    - Special Offer: Buy 2 for £45
- **Item C**:
    - Unit Price: £20
- **Item D**:
    - Unit Price: £15


## Technologies Used:

- **React**: JavaScript library for building user interfaces.

- **TypeScript**: Superset of JavaScript for adding static types.

- **CSS**: For basic styling of components.



