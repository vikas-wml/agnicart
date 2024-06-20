import Link from "next/link";

import FooterLinks from "../reusable/footer/FooterLinks";
import Media from "../reusable/footer/Media";
import FooterAccordian from "../reusable/footer/FooterAccordian";

export default function Footer() {
  const men = [
    {
      id: 1650,
      title: "Accessories & Shoes",
      link: "/men/accessories-and-shoes",
      type: "categories",
      child_items: [
        {
          id: 1661,
          title: "All Accessories",
          link: "/men/accessories-and-shoes/all-accessories",
          type: "categories",
          child_items: [],
        },
        {
          id: 1655,
          title: "Shoes & Sneakers",
          link: "/men/accessories-and-shoes/shoes-and-sneakers",
          type: "categories",
          child_items: [],
        },
        {
          id: 1657,
          title: "Ties & Bowties",
          link: "/men/accessories-and-shoes/ties-and-bowties",
          type: "categories",
          child_items: [],
        },
        {
          id: 1652,
          title: "Underwear",
          link: "/men/accessories-and-shoes/underwear",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1546,
      title: "Clothing",
      link: "/men/clothing",
      type: "categories",
      child_items: [
        {
          id: 1562,
          title: "Button Down Shirts",
          link: "/men/clothing/button-down-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1567,
          title: "Chinos & Joggers",
          link: "/men/clothing/chinos-and-joggers",
          type: "categories",
          child_items: [],
        },
        {
          id: 1554,
          title: "Full Suits",
          link: "/men/clothing/full-suits",
          type: "categories",
          child_items: [],
        },
        {
          id: 1572,
          title: "Jackets & Coats",
          link: "/men/clothing/jackets-and-coats",
          type: "categories",
          child_items: [],
        },
        {
          id: 1556,
          title: "Jeans",
          link: "/men/clothing/jeans",
          type: "categories",
          child_items: [],
        },
        {
          id: 1565,
          title: "Pants",
          link: "/men/clothing/pants",
          type: "categories",
          child_items: [],
        },
        {
          id: 1563,
          title: "Polos",
          link: "/men/clothing/polos",
          type: "categories",
          child_items: [],
        },
        {
          id: 1569,
          title: "Shorts",
          link: "/men/clothing/shorts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1551,
          title: "Spacial Sale",
          link: "/men/clothing/special-sale",
          type: "categories",
          child_items: [],
        },
        {
          id: 1575,
          title: "Suit Jackets & Blazers",
          link: "/men/clothing/suit-jackets-and-blazers",
          type: "categories",
          child_items: [],
        },
        {
          id: 1570,
          title: "Swim Trunks",
          link: "/men/clothing/swim-trunks",
          type: "categories",
          child_items: [],
        },
        {
          id: 1564,
          title: "T-Shirts",
          link: "/men/clothing/t-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1561,
          title: "Tops",
          link: "/men/clothing/tops",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1577,
      title: "NEW & NOW",
      link: "/men/new-and-now",
      type: "categories",
      child_items: [
        {
          id: 1581,
          title: "Linen Shop",
          link: "/men/new-and-now/linen-shop",
          type: "categories",
          child_items: [],
        },
        {
          id: 1583,
          title: "Matching Summer Sets",
          link: "/men/new-and-now/matching-summer-sets",
          type: "categories",
          child_items: [],
        },
        {
          id: 1579,
          title: "New Arrivals",
          link: "/men/new-and-now/new-arrivals",
          type: "categories",
          child_items: [],
        },
        {
          id: 1580,
          title: "Perfect Prima Cotton Tops",
          link: "/men/new-and-now/perfect-pima-cotton-tops",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1584,
      title: "SUIT SHOP",
      link: "/men/suit-shop",
      type: "categories",
      child_items: [
        {
          id: 1606,
          title: "All Shirts",
          link: "/men/shirt-shop/all-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1590,
          title: "Dress Pants",
          link: "/men/suit-shop/dress-pants",
          type: "categories",
          child_items: [],
        },
        {
          id: 1587,
          title: "Full Suits",
          link: "/men/suit-shop/full-suits",
          type: "categories",
          child_items: [],
        },
        {
          id: 1592,
          title: "Modern Tech Suits",
          link: "/men/suit-shop/modern-tech-suits",
          type: "categories",
          child_items: [],
        },
        {
          id: 1599,
          title: "Prom Shop",
          link: "/men/suit-shop/prom-shop",
          type: "categories",
          child_items: [],
        },
        {
          id: 1589,
          title: "Suit Jackets & Blazers",
          link: "/men/suit-shop/suit-jackets-and-blazers",
          type: "categories",
          child_items: [],
        },
        {
          id: 1597,
          title: "Wdding Shop",
          link: "/men/suit-shop/wedding-shop",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1604,
      title: "Shirt Shop",
      link: "/men/shirt-shop",
      type: "categories",
      child_items: [
        {
          id: 1622,
          title: "1MX Dress Shirts",
          link: "/men/shirt-shop/1mx-dress-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1615,
          title: "Caual Shirts",
          link: "/men/shirt-shop/casual-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1617,
          title: "Linen Shirts",
          link: "/men/shirt-shop/linen-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1620,
          title: "Performance Shirts",
          link: "/men/shirt-shop/performance-shirts",
          type: "categories",
          child_items: [],
        },
        {
          id: 1623,
          title: "Short Sleeve Button Ups",
          link: "/men/shirt-shop/short-sleeve-button-ups",
          type: "categories",
          child_items: [],
        },
      ],
    },
    {
      id: 1635,
      title: "Styling Community",
      link: "/men/styling-community",
      type: "categories",
      child_items: [
        {
          id: 1638,
          title: "Become A Style Editor",
          link: "/men/styling-community/become-a-style-editor",
          type: "categories",
          child_items: [],
        },
        {
          id: 1637,
          title: "Stylinng Community Inspo",
          link: "/men/styling-community/styling-community-inspo",
          type: "categories",
          child_items: [],
        },
      ],
    },
  ];

  return (
    <div className=" md:w-[80%] mx-auto bottom-full  bg-white px-10 py-20 space-y-10 border-t relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] items-start justify-center  ">
        <div className="hidden md:block">
          <Media />
        </div>
        <div className="space-y-24 md:col-span-1 lg:col-span-2 flex flex-col items-center justify-center md:block">
          <div className=" hidden md:grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 items-start justify-center">
            {men.map((item) => (
              <div key={item.id}>
                <h1 className=" font-bold capitalize">{item.title}</h1>
                {item.child_items.map((data) => (
                  <Link
                    key={data.id}
                    href={data.link}
                    className="cursor-pointer"
                  >
                    <p className="text-sm text-slate-600 hover:text-slate-900 hover:underline">
                      {data.title}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="block md:hidden w-full">
            {men.map((item) => (
              <FooterAccordian
                key={item.id}
                title={item.title}
                items={item.child_items}
              />
            ))}
          </div>
          <div>
            <div className="block md:hidden">
              <Media />
            </div>
          </div>
        </div>
      </div>
      <FooterLinks />
    </div>
  );
}
