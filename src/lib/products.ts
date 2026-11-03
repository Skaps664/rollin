export type Category = "Apparel" | "Headwear" | "Accessories" | "Stickers";

export type ArtKind =
  | "tee"
  | "hoodie"
  | "cap"
  | "beanie"
  | "sticker"
  | "patch"
  | "keychain"
  | "gaiter";

export type Product = {
  id: string;
  name: string;
  blurb: string;
  price: number; // PKR
  category: Category;
  art: ArtKind;
  tone: "black" | "olive" | "bone";
  sizes?: string[];
  badge?: string;
};

const apparelSizes = ["S", "M", "L", "XL", "XXL"];

// Placeholder catalogue — swap in your real merch, prices and photos.
export const products: Product[] = [
  {
    id: "street-journey-tee",
    name: "Street Journey Tee",
    blurb: "Heavyweight cotton, front wordmark, back print.",
    price: 2499,
    category: "Apparel",
    art: "tee",
    tone: "black",
    sizes: apparelSizes,
    badge: "Drop 01",
  },
  {
    id: "zero-chill-hoodie",
    name: "Zero Chill Hoodie",
    blurb: "Brushed fleece for cold morning rides.",
    price: 5499,
    category: "Apparel",
    art: "hoodie",
    tone: "olive",
    sizes: apparelSizes,
  },
  {
    id: "bone-tee",
    name: "Two Wheels Tee",
    blurb: "Off-white tee with the zebra stripe sleeve hit.",
    price: 2699,
    category: "Apparel",
    art: "tee",
    tone: "bone",
    sizes: apparelSizes,
  },
  {
    id: "rider-cap",
    name: "Rider Cap",
    blurb: "Six-panel, embroidered RGPK mark.",
    price: 1799,
    category: "Headwear",
    art: "cap",
    tone: "black",
  },
  {
    id: "garage-beanie",
    name: "Garage Beanie",
    blurb: "Rib knit, fits under nothing — wear it after the ride.",
    price: 1299,
    category: "Headwear",
    art: "beanie",
    tone: "olive",
  },
  {
    id: "zebra-neck-gaiter",
    name: "Zebra Neck Gaiter",
    blurb: "Dust, sun and wind cover for city traffic.",
    price: 1199,
    category: "Accessories",
    art: "gaiter",
    tone: "bone",
    badge: "Rider pick",
  },
  {
    id: "throttle-keychain",
    name: "Throttle Keychain",
    blurb: "Metal tag for the bike keys.",
    price: 899,
    category: "Accessories",
    art: "keychain",
    tone: "black",
  },
  {
    id: "iron-on-patch",
    name: "Journey Patch",
    blurb: "Embroidered patch for jackets and bags.",
    price: 599,
    category: "Accessories",
    art: "patch",
    tone: "olive",
  },
  {
    id: "sticker-pack",
    name: "Sticker Pack ×5",
    blurb: "Weatherproof vinyl for tanks, helmets and laptops.",
    price: 499,
    category: "Stickers",
    art: "sticker",
    tone: "black",
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "Apparel",
  "Headwear",
  "Accessories",
  "Stickers",
];

export const formatPKR = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;
