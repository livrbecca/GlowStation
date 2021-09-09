# Glow Station




Glow Station is a skincare E-commerce store with a focus on skin-education. It aims to make skincare 'simple' and easy for all, regardless of gender or skin tone.
The main feature is the 'Routine Builder', a personalised skin assessment which allows the user to answer questions directly relating to skin. Based on the combination of answers selected, the the Routine Builder will return an easy-to-follow skincare routine for them, that can be used Morning & Night.

After recieving their results, users can either add those items directly to cart and checkout via Paypal, or they can navigate to the 'Shop' section for more selection and browsing.

![Form](https://user-images.githubusercontent.com/69110329/105247960-853f1980-5b6d-11eb-89a3-089fc3779746.gif)
Landing Page

![image](https://user-images.githubusercontent.com/69110329/105247388-9fc4c300-5b6c-11eb-9390-482e105bc8b4.png)
Shop page, including dual filter functionality

![RB](https://user-images.githubusercontent.com/69110329/105247596-ef0af380-5b6c-11eb-833e-732ff21a4f1c.gif)
Routine Builder questions and possible set of results.

## Tech Stack

- HTML, CSS, Javascript, React, Node.js, MongoDB

## Features

Other features of this project include:
- Personalised user expierence, remembering and using the user's inputted name throughout the site.
- Search bar functionality 
- Shop page, with ability to add/remove products to a wishlist
- Two different types of product filtering - Filter & refine through the shop sidebar or through the suggested product graphics 
- Routine Builder
- Ability to recieve discounted price on products via a discount code
- Checkout with PayPal
- A 'Skin Education' section dedicated to further educating the user on skincare topics

## Possible API end points (all GET):

Backend Endpoints avaiable on localhost:5000

For all products: /products

To search and query the products, ingredients and brands: `GET /products/search?q=<search_term>`, 
- example: /products/search?q=Aloe
- /products/search?q=Vitamin, 
- /products/search?q=Hyaluronic

To fetch products by category: `GET/products/category/<category>`
- example: /products/category/Mists
- /products/category/Oils
- /products/category/Cleansers

To fetch products by skin type: `GET/products/skinType/<skin_type>`
- example: /products/skinType/Oily
- /products/skinType/Sensitive

To fetch products by skin concern: 

`GET/products/skinConcern/<skin_concern>`
- example: /products/skinConcern/Redness
- /products/skinConcern/Texture


## Running the Project

To run the project, in your terminal :

1) start the backend

```
cd backend

npm install

npm start

```
3) start the frontend
```
cd glowstation

npm install

npm start
```
Starting Endpoint http://localhost:3000/


Package informaton details about node package managers are detailed inside the glow station directory.
