export interface product {
  categoryId: number;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  id: number;
}
export const categories = [
  {
    id: 1,
    name: "Books"
  },
  {
    id: 2,
    name: "Table Tennis Rackets"
  },
  {
    id: 3,
    name: "Football"
  },
  {
    id: 4,
    name: "PC"
  }
];

export const products = [
  {
    id: 1,
    categoryId: 1,
    name: "Sapiens: A Brief History of Humankind",
    image: "https://m.media-amazon.com/images/I/51XyWW6zEXL.jpg",
    price: 14.99,
    rating: 4.6,
    description:
      "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution - a number one international best seller - that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be «human».",
    link:
      "https://www.amazon.com/dp/B0741F3M7C/ref=s9_acsd_obs_hd_bw_b1D_c2_x_5_t?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-11&pf_rd_r=6Z2QPA1H74ZGABZEH16P&pf_rd_t=101&pf_rd_p=66292e9f-ef45-5df3-8fb4-c683567639a2&pf_rd_i=75"
  },

  {
    id: 2,
    categoryId: 1,
    name: "The Theory of Everything: The Origin and Fate of the Universe",
    image: "https://m.media-amazon.com/images/I/611i5bvBAML.jpg",
    price: 9.99,
    rating: 4.5,
    description:
      "In physicist Stephen Hawking's brilliant opus, A Brief History of Time, he presented us with a bold new look at our universe, how it began, and how our old views of physics and tired theories about the creation of the universe were no longer relevant.",
    link:
      "https://www.amazon.com/The-Theory-of-Everything-audiobook/dp/B002LL0OQ6/ref=sr_1_1?dchild=1&keywords=Theory+of+everything&qid=1614100188&s=books&sr=1-1"
  },
  {
    id: 3,
    categoryId: 1,
    name: "The Idea of the Brain: The Past and Future of Neuroscience",
    image: "https://m.media-amazon.com/images/I/51KZFFVvKtL.jpg",
    price: 19.99,
    rating: 4.6,
    description:
      "An «elegant», «engrossing» (Carol Tavris, Wall Street Journal) examination of what we think we know about the brain and why - despite technological advances - the workings of our most essential organ remain a mystery.",
    link:
      "https://www.amazon.com/Idea-Brain-Past-Future-Neuroscience/dp/B086Q1JXLM/ref=sr_1_1?crid=2RZ2BKZ0N0ID9&dchild=1&keywords=the+idea+of+the+brain&qid=1614105036&s=audible&sprefix=the+idea+of+th%2Caudible%2C317&sr=1-1"
  },
  {
    id: 4,
    categoryId: 1,
    name: "The Selfish Gene",
    image: "https://m.media-amazon.com/images/I/51iqpxo43PL.jpg",
    price: 8.16,
    rating: 4.6,
    description:
      "Richard Dawkins' brilliant reformulation of the theory of natural selection has the rare distinction of having provoked as much excitement and interest outside the scientific community as within it. His theories have helped change the whole nature of the study of social biology",
    link:
      "https://www.amazon.com/The-Selfish-Gene-Richard-Dawkins-audiobook/dp/B004U8NB2M/ref=sr_1_1?dchild=1&keywords=selfish+gene&qid=1614100085&s=books&sr=1-1"
  },
  {
    id: 5,
    categoryId: 1,
    name:
      "The Blind Watchmaker: Why the Evidence of Evolution Reveals a Universe Without Design",
    image: "https://m.media-amazon.com/images/I/51EySGZ-3aL.jpg",
    price: 10.74,
    rating: 4.5,
    description:
      "The Blind Watchmaker, knowledgably narrated by author Richard Dawkins and Lalla Ward, is as prescient and timely a book as ever. William Paley, argued that just as a watch is too complicated and functional to have sprung into existence by accident, so too must all living things.",
    link:
      "https://www.amazon.com/The-Blind-Watchmaker-audiobook/dp/B005ACDZX2/ref=sr_1_1?dchild=1&keywords=blind+watchmaker&qid=1614100302&s=books&sr=1-1"
  },
  {
    id: 6,
    categoryId: 2,
    name: "STIGA Evolution Performance-Level Table Tennis Racket",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71EPFsBsNwL._AC_SL1500_.jpg",
    price: "44.65",
    rating: "4.6",
    description:
      "Performance-Level Table Tennis Racket ITTF Approved Rubber for Tournament Play Features Shock Dispersion Technology (SDT) Performance Ratings- Speed: 96 Spin: 94 Control: 90 Premium Rubber, 2mm Sponge, and 6-Ply Light Blade",
    link:
      "https://www.amazon.com/STIGA-Evolution-Performance-Level-Approved-Tournament/dp/B00EFY9F1C/ref=sr_1_7?crid=3UYJUV0XB8EZ4&dchild=1&keywords=table+tennis+racket&qid=1614724158&sprefix=table+ten%2Caps%2C343&sr=8-7"
  },
  {
    id: 7,
    categoryId: 2,
    name: "Recreational Ping Pong Paddle, Table Tennis Racket with Wood Blade",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71TilN1JRjL._AC_SL1500_.jpg",
    price: "24.99",
    rating: "4.7",
    description:
      "SHARPEN YOUR SKILLS: The perfect table tennis paddle for learning basic strokes and perfecting ball control, this racket is designed for recreational ping pong players who want to improve their game",
    link:
      "https://www.amazon.com/Killerspin-JET200-BluVanilla-Ping-Racket/dp/B002GJY338/ref=sr_1_5?crid=3UYJUV0XB8EZ4&dchild=1&keywords=table+tennis+racket&qid=1614724681&sprefix=table+ten%2Caps%2C343&sr=8-5"
  },
  {
    id: 8,
    categoryId: 2,
    name: "Butterfly 401 Table Tennis Racket",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61VzCwGtKiL._AC_SL1500_.jpg",
    price: "27.99",
    rating: "4.6",
    description:
      "BUTTERFLY 401 PING PONG PADDLE – The Butterfly 401 Table Tennis Racket Set will give you the perfect amount of spin, speed, and control for competitive ping pong matches.",
    link:
      "https://www.amazon.com/Butterfly-401-Table-Tennis-Racket/dp/B003M4DS5U/ref=sr_1_8?crid=3UYJUV0XB8EZ4&dchild=1&keywords=table+tennis+racket&qid=1614724681&sprefix=table+ten%2Caps%2C343&sr=8-8"
  },
  {
    id: 9,
    categoryId: 2,
    name: "JOOLA Infinity Overdrive",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71gcD7JGBEL._AC_SL1500_.jpg",
    price: "63.53",
    rating: "4.5",
    description:
      "JOOLA - AN OLYMPIC TABLE TENNIS BRAND TRUSTED FOR 60+ YEARS: Launched in the 1950s, JOOLA has been the proud sponsor of the biggest tournaments in the world, Including the Olympics, World Championships, and US Open. Equipment designed for all levels.",
    link:
      "https://www.amazon.com/dp/B07K3HBJHX?pd_rd_i=B07K3HBJHX&pd_rd_w=cFxp9&pf_rd_p=2e62cf0a-1323-46ac-bbb9-19dc851997c6&pd_rd_wg=9FPd0&pf_rd_r=8BCZ5F74J4RYVSYW1AHM&pd_rd_r=f4edb7f0-c0a4-4c50-baf6-02a0f8ca1649"
  },
  {
    id: 10,
    categoryId: 2,
    name: "Ruixy Pro Carbon Performance-Level Table Tennis Racket",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81v2vCz2ABL._AC_SL1500_.jpg",
    price: "19.85",
    rating: "4.4",
    description:
      "Performance-Level Table Tennis Racket ITTF Approved ping pong paddle Rubber and wood for Match game Advance Features Shock Dispersion Technology (SDT) Ensure your excellent sports experience Advance Features Shock Dispersion Technology (SDT) Ensure your excellent sports experience",
    link:
      "https://www.amazon.com/Ruixy-Performance-Level-Technology-Tournament-Portable/dp/B07YWDF1QS/ref=sr_1_16_sspa?crid=3UYJUV0XB8EZ4&dchild=1&keywords=table+tennis+racket&qid=1614724681&sprefix=table+ten%2Caps%2C343&sr=8-16-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWlBJMzdZMUg0QldQJmVuY3J5cHRlZElkPUEwNzI3MjE2M0gxME9VR0lFVkhJJmVuY3J5cHRlZEFkSWQ9QTA4NDI4NDkyMFo3R0RUR1hQQjlQJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
  },
  {
    id: 11,
    categoryId: 3,
    name: "adidas MLS Club Ball",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61xD8UzedtL._AC_SL1280_.jpg",
    price: "12.98",
    rating: "4.6",
    description:
      "100% Polyurethane Imported A mini ball marking a major anniversary in North American soccer. Solid core mini ball Polyurethane foam core",
    link:
      "https://www.amazon.com/adidas-MLS-MINI-Top-Met-F13/dp/B07RXKZV2F/ref=sxin_9?ascsubtag=amzn1.osa.ea7135e2-7dc5-4e5a-a969-309b6c637754.ATVPDKIKX0DER.en_US&creativeASIN=B07RXKZV2F&cv_ct_cx=soccer+ball&cv_ct_id=amzn1.osa.ea7135e2-7dc5-4e5a-a969-309b6c637754.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=soccer+ball&linkCode=oas&pd_rd_i=B07RXKZV2F&pd_rd_r=76d56271-36e7-4585-bcf1-a06f610e2d07&pd_rd_w=umG7T&pd_rd_wg=6Y26i&pf_rd_p=35b32c02-1b41-4e49-9b89-0297af2446e1&pf_rd_r=1QENENZEW7YEH37F4KW3&qid=1614725452&sr=1-1-64f3a41a-73ca-403a-923c-8152c45485fe&tag=aimassociatesbp-20"
  },
  {
    id: 12,
    categoryId: 3,
    name: "adidas Starlancer Club",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71kuIkY3OGL._AC_SL1500_.jpg",
    price: "14.40",
    rating: "4.7",
    description:
      "100% Polyurethane Imported A hard-wearing ball for scrimmages. Club football Butyl bladder for best air retention",
    link:
      "https://www.amazon.com/adidas-Solar-Green-Black-Night/dp/B07V9K2CNK/ref=sr_1_5?dchild=1&keywords=soccer+ball&qid=1614725589&sr=8-5"
  },
  {
    id: 13,
    categoryId: 3,
    name: "Nike Nk Ptch Train-Sp19 Soccer Ball",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/812vn7Kj%2B1L._AC_SL1500_.jpg",
    price: "22.26",
    rating: "4.6",
    description:
      "The Nike Pitch Training Soccer Ball features high-contrast graphics for high visibility during play and practice, while a durable, 12-panel construction offers true and accurate flight off the foot. Visual acuity graphics improve tracking on the pitch. Durable and smooth casing for lasting play.",
    link:
      "https://www.amazon.com/NIKE-631331-Metallic-Running-Sneaker/dp/B00CZCA9L6/ref=sr_1_14?dchild=1&keywords=soccer+ball&qid=1614725589&sr=8-14"
  },
  {
    id: 14,
    categoryId: 3,
    name: "SELECT Numero 10 Soccer Ball",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81BomfqamDL._AC_SL1500_.jpg",
    price: "34.50",
    rating: "4.6",
    description:
      "QUALITY AT A GREAT PRICE: Select Sport's best-selling soccer ball, the Numero 10, in a 4-ball bulk pack(size 4) with duffle ball bag and a hand pump",
    link:
      "https://www.amazon.com/Select-Numero-Soccer-Ball-White/dp/B07FCHGBGP/ref=sr_1_30?dchild=1&keywords=soccer+ball&qid=1614725589&sr=8-30"
  },
  {
    id: 15,
    categoryId: 3,
    name: "adidas mens Juventus Turin Club Ball",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61z7XpthDIL._AC_SL1200_.jpg",
    price: "19.42",
    rating: "4.9",
    description:
      "100% Polyurethane Imported A durable football dressed in club colours. Machine-stitched surface Football for Juventus fans",
    link:
      "https://www.amazon.com/adidas-unisex-adult-Juventus-Turin-Pantone/dp/B08143GPTN/ref=sr_1_27?dchild=1&keywords=soccer+ball&qid=1614725589&sr=8-27"
  },
  {
    id: 16,
    categoryId: 4,
    name:
      "D'Addario EJ10 Bronze Acoustic Guitar Strings, Extra Light, 10-47, 3 Sets (EJ10-3D)",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61A7GDyX7tL._AC_SL1000_.jpg",
    price: "14.99",
    rating: "4.7",
    description:
      "Extra light gauging for playing ease Extra-bright tone Mixed with deep and projecting bottom end, corrosion resistant packaging for strings that are always fresh Made in the U. S. A. For the highest quality and performanceString gauges: plain steel . 010, . 014, Bronze wound . 023, . 030, . 039, . 047",
    link:
      "https://www.amazon.com/DAddario-Bronze-Acoustic-Strings-EJ10-3D/dp/B07QC3LCN9/ref=sr_1_1_sspa?crid=263XEKBHG3H39&dchild=1&keywords=acoustic+guitar+strings&qid=1614726319&sprefix=acoustic+guitar+s%2Caps%2C361&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVMkc3SVpXVzNWNk8mZW5jcnlwdGVkSWQ9QTA2ODE3MDMzTkc2NFRDVkZCUklPJmVuY3J5cHRlZEFkSWQ9QTA3MDAwODdCMUdHMEFFTjVCT1omd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
  },
  {
    id: 17,
    categoryId: 4,
    name:
      "Ernie Ball Earthwood Rock and Blues 80/20 Bronze Acoustic Set with plain G, .010 - .052",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91Knh9KnaFL._AC_SL1500_.jpg",
    price: "4.99",
    rating: "4.7",
    description:
      "Wound Strings are 80% copper, 20% zinc wire wrapped around hex shaped tin plated steel core wire Plain strings are made of specially tempered tin plated high carbon steel The most popular acoustic guitar string alloy provides well balanced projection with crisp pleasing highs Element Shield Packaging Prolongs string life and keeps strings as fresh as the day they were made",
    link:
      "https://www.amazon.com/Ernie-Ball-Earthwood-Bronze-Acoustic/dp/B0002DV6TO/ref=sr_1_10?crid=263XEKBHG3H39&dchild=1&keywords=acoustic+guitar+strings&qid=1614726435&sprefix=acoustic+guitar+s%2Caps%2C361&sr=8-10"
  },
  {
    id: 18,
    categoryId: 4,
    name: "Martin Guitar MA130S Authentic Acoustic Guitar Strings",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71bJ5jvuyKL._AC_SL1500_.jpg",
    price: "8.99",
    rating: "4.8",
    description:
      "BRIGHT TONES: Martin Authentic Acoustic Strings provide excellent tuning stability and playability with bright and rich tones. Discover your guitar's true voice with this professional-grade guitar string pack.",
    link:
      "https://www.amazon.com/Martin-Strings-Acoustic-Guitar-41Y18MA130S/dp/B07GT8PGJK/ref=sr_1_21?crid=263XEKBHG3H39&dchild=1&keywords=acoustic+guitar+strings&qid=1614726435&sprefix=acoustic+guitar+s%2Caps%2C361&sr=8-21"
  },
  {
    id: 19,
    categoryId: 4,
    name:
      "D'Addario NB1252BT Nickel Bronze Acoustic Guitar Strings, Balanced Tension Light, 12-52",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/919B5ZwYCsL._AC_SL1500_.jpg",
    price: "11.99",
    rating: "4.6",
    description:
      "String gauges optimized for an even feel across all six strings, allowing for easier chord transitions, smoother scales, and reduced fatigue. Delivers a full tonal spectrum, revealing the unique tonal qualities of your acoustic guitar",
    link:
      "https://www.amazon.com/DAddario-NB1252BT-Acoustic-Strings-Balanced/dp/B06X9TL6FZ/ref=sr_1_36?crid=263XEKBHG3H39&dchild=1&keywords=acoustic+guitar+strings&qid=1614726435&sprefix=acoustic+guitar+s%2Caps%2C361&sr=8-36"
  },
  {
    id: 20,
    categoryId: 4,
    name: "Ernie Ball Aluminum Bronze Medium Light Acoustic Set, .012 - .054",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81ZZEyOROHL._AC_SL1200_.jpg",
    price: "9.99",
    rating: "4.6",
    description:
      "Patented technology brings a new voice to acoustic guitarists who seek a more expressive and dynamic string Aluminum Oxide provides a significant corrosion barrier, without coating the string",
    link:
      "https://www.amazon.com/Ernie-Ball-Aluminum-Bronze-Acoustic/dp/B00JPSXCV2/ref=sr_1_60?crid=263XEKBHG3H39&dchild=1&keywords=acoustic+guitar+strings&qid=1614726435&sprefix=acoustic+guitar+s%2Caps%2C361&sr=8-60"
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
