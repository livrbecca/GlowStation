import React from "react";


export const SidebarData = [
  {
    title: "Skin Concern",
    code: "skinConcern",
    icon: <img src="concern.png" className="icon" alt="concern icon" />,
    topics: [
      "Acne & Blackheads",
      "Texture",
      "Eye Concerns",
      "Brightening & Hyperpigmentation",
      "Lines & Wrinkles",
      "Redness",
      "Visable Pores",
      "Lines & wrinkles",
    ],
  },
  {
    title: "Product Type",
    code: "category",
    icon: <img src="producttype.png" className="icon" alt="product icon" />,
    topics: [
      "Cleansers",
      "Toners & Essence",
      "Mists",
      "Exfoliators",
      "Serums",
      "Moisturisers",
      "Oils",
      "SPF",
      "Masks",
    ],
  },
  {
    title: "Skin Type",
    code: "skinType",
    icon: <img src="skintype.png" className="icon" alt="concern icon" />,
    topics: ["Sensitive", "Oily", "Dry", "Combination"],
  },
  {
    title: "Brands",
    code: "brand",
    icon: <img src="brands.png" className="icon" alt="brands icon" />,
    topics: ["Indie Lee", "PSA Skin", "The Inkey List", "COSRX"],
  },
];
