import "./style.css";
export async function getProducts() {
  const res = await fetch("/products.json");
  return await res.json();
}

import { showProductContainer } from "./homeProductCards";

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);