export interface product {
  name: string;
  image: string;
  price: string;
  description: string;
  rating: string;
  link: string;
}

export const products = [
  {
    id: 1,
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
    name: "A Brief History of Time Kindle Edition",
    image: "https://m.media-amazon.com/images/I/61cQQST7o9L.jpg",
    price: 13.99,
    rating: 4.7,
    description:
      "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries?",
    link:
      "https://www.amazon.com/Brief-History-Time-Stephen-Hawking-ebook/dp/B004WY3D0O/ref=sr_1_1?dchild=1&keywords=A+brief+history+of+time&qid=1614099923&s=books&sr=1-1"
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    name: "Who's in Charge?: Free Will and the Science of the Brain",
    image: "https://m.media-amazon.com/images/I/41cNAza7GkL.jpg",
    price: 9.49,
    rating: 4.3,
    description:
      "The father of cognitive neuroscience and author of Human offers a provocative argument against the common belief that our lives are wholly determined by physical processes and we are therefore not responsible for our actions.",
    link:
      "https://www.amazon.com/Whos-in-Charge-Michael-S-Gazzaniga-audio/dp/B006NTH5XW/ref=sr_1_1?dchild=1&keywords=Who+is+in+charge&qid=1614100428&s=audible&sr=1-1"
  },
  {
    id: 8,
    name:
      "The Origins of Virtue: Human Instincts and the Evolution of Cooperation 1st Edition",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51BcUojwk7L._SX319_BO1,204,203,200_.jpg",
    price: 15.2,
    rating: 4.3,
    description:
      "If, as Darwin suggests, evolution relentlessly encourages the survival of the fittest, why are humans compelled to live in cooperative, complex societies?.",
    link:
      "https://www.amazon.com/Origins-Virtue-Instincts-Evolution-Cooperation/dp/0140264450/ref=sr_1_fkmr0_1?dchild=1&keywords=The+origin+of+altruism+and+virtue.+From+instinct+to+cooperation&qid=1614102339&sr=8-1-fkmr0"
  },
  {
    id: 9,
    name: "Humble Pi: A Comedy of Maths Errors Paperback – International",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41ISQlbRH9L._SX323_BO1,204,203,200_.jpg",
    price: 48.35,
    rating: 4.7,
    description:
      "**The First Ever Maths Book to be a No.1 Bestseller**'Wonderful ... superb' Daily MailWhat makes a bridge wobble when it's not meant to Billions of dollars mysteriously vanish into thin air A building rock when its resonant frequency matches a gym class leaping to Snap's 1990",
    link:
      "https://www.amazon.com/Humble-Pi-Comedy-Maths-Errors/dp/0141989149/ref=sr_1_2?dchild=1&keywords=Humble+Pi&qid=1614103604&s=books&sr=1-2"
  },
  {
    id: 10,
    name: "The Greatest Show on Earth: The Evidence for Evolution",
    image: "https://m.media-amazon.com/images/I/61zewFaBaYL.jpg",
    price: 15.99,
    rating: 4.7,
    description:
      "In 2008, a Gallup poll showed that 44 percent of Americans believed God had created man in his present form within the last 10,000 years. In a Pew Forum poll in the same year, 42 percent believed that all life on earth has existed in its present form since the beginning of time.",
    link:
      "https://www.amazon.com/The-Greatest-Show-on-Earth-audiobook/dp/B002Q1IUP8/ref=sr_1_2?dchild=1&keywords=Evidence+for+evolution&qid=1614104160&s=books&sr=1-2"
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
