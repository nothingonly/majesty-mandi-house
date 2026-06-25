import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  // CHICKEN STARTERS
  { id: "c-start-1", name: "Chilli Chicken", category: "Chicken Starters", prices: { "Regular": 240 }, image: "/dishes/chilli chicken.png" },
  { id: "c-start-2", name: "Chicken 65", category: "Chicken Starters", prices: { "Regular": 260 }, image: "/dishes/chicken 65.png" },
  { id: "c-start-3", name: "Chicken Majestic", category: "Chicken Starters", prices: { "Regular": 260 }, image: "/dishes/chicken majestic.png" },
  // CHICKEN MANDI
  { id: "c-mandi-1", name: "Chicken Juicy Mandi", category: "Chicken Mandi", prices: { "1pc": 290, "2pc": 550, "3pc": 790, "4pc": 980 }, image: "/dishes/chicken juicy mandi.png" },
  { id: "c-mandi-2", name: "Chicken Fry Mandi", category: "Chicken Mandi", prices: { "1pc": 280, "2pc": 530, "3pc": 760, "4pc": 950 }, image: "/dishes/chicken fry mandi.png" },
  { id: "c-mandi-3", name: "Chicken Full Mandi", category: "Chicken Mandi", prices: { "4 Person": 1100, "6 Person": 1700 }, image: "/dishes/chicken full mandi.png" },
  { id: "c-mandi-4", name: "Chicken Broasted Mandi", category: "Chicken Mandi", prices: { "1pc": 310, "2pc": 590, "3pc": 850, "4pc": 1050 }, image: "/dishes/chicken broasted mandi.png" },
  { id: "c-mandi-5", name: "Chicken Crispy Mandi", category: "Chicken Mandi", prices: { "1pc": 300, "2pc": 570, "3pc": 820, "4pc": 1020 }, image: "/dishes/chicken crispy mandi.png" },
  { id: "c-mandi-6", name: "Chicken Faham Mandi", category: "Chicken Mandi", prices: { "1pc": 320, "2pc": 610, "3pc": 880, "4pc": 1080 }, image: "/dishes/chicken faham mandi.png" },
  { id: "c-mandi-7", name: "Chicken Lollipop Mandi", category: "Chicken Mandi", prices: { "1pc": 300, "2pc": 570, "3pc": 820, "4pc": 1020 }, image: "/dishes/chicken lollipop mandi.png" },
  { id: "c-mandi-8", name: "Chicken Madfoon Mandi", category: "Chicken Mandi", prices: { "1pc": 330, "2pc": 630, "3pc": 900, "4pc": 1100 }, image: "/dishes/chicken madfoon mandi.png" },
  // MUTTON MANDI
  { id: "m-mandi-1", name: "Mutton Fry Mandi", category: "Mutton Mandi", prices: { "1pc": 380, "2pc": 720, "3pc": 930, "4pc": 1120 }, image: "/dishes/mutton fry mandi.png" },
  { id: "m-mandi-2", name: "Mutton Juicy Mandi", category: "Mutton Mandi", prices: { "1pc": 390, "2pc": 730, "3pc": 960, "4pc": 1150 }, image: "/dishes/mutton juicy mandi.png" },
  // SEAFOOD MANDI
  { id: "s-mandi-1", name: "Fish Fry Mandi", category: "Seafood Mandi", prices: { "Half": 640, "Full": 1100 }, image: "/dishes/fish fry mandi.png" },
  { id: "s-mandi-2", name: "Prawns Juicy Mandi", category: "Seafood Mandi", prices: { "Half": 700, "Full": 1150 }, image: "/dishes/prawns juicy Mandi.png" },
  // VEG & EGG
  { id: "v-mandi-1", name: "Paneer Fry Mandi", category: "Veg & Egg", prices: { "Single": 280, "Half": 520, "Full": 780 }, image: "/dishes/paneer fry mandi.png" },
  { id: "v-start-1", name: "Babycorn 65", category: "Veg & Egg", prices: { "Regular": 220 }, image: "/dishes/babycorn 65.png" },
  // SPECIALS
  { id: "spec-1", name: "Eight Person Special Mandi", category: "Specials", prices: { "8 Person": 2490 }, description: "Chicken Fry, Chicken Juicy, Crispy, Mutton Fry, Mutton Juicy, Fish Platter, Fish Fry, Prawns, Lollipop", image: "/dishes/fish platter mandi.png" },
];
