import img1 from "../../../public/PackagesImg/Rectangle 13 (1).png";
import img2 from "../../../public/PackagesImg/Rectangle 13 (2).png";
import img3 from "../../../public/PackagesImg/Rectangle 13 (3).png";
import img4 from "../../../public/PackagesImg/Rectangle 13 (4).png";
import img5 from "../../../public/PackagesImg/Rectangle 13 (5).png";
import img6 from "../../../public/PackagesImg/Rectangle 13 (6).png";
import {StaticImageData} from "next/image";

export interface GoogleReview {
  name: string;
  image: StaticImageData ; 
  description : string;
  title: string;
  rating : number;
  date : string;
}

export const TourCardDetails = [
  {
    id: 1,
    image: img1,
    title: 'Cultural Heritage Tour',
    duration: '8 Days / 7 Nights',
    price: 900,
    rating: 5
  },
  {
    id: 2,
    image: img2,
    title: 'Beach Paradise Getaway',
    duration: '5 Days / 4 Nights',
    price: 650,
    rating: 4
  },
  {
    id: 3,
    image: img3,
    title: 'Mountain Trekking Adventure',
    duration: '6 Days / 5 Nights',
    price: 750,
    rating: 4.5
  },
  {
    id: 4,
    image: img4,
    title: 'City Explorer Package',
    duration: '4 Days / 3 Nights',
    price: 500,
    rating: 4
  },
  {
    id: 5,
    image: img5,
    title: 'Mountain Trekking Adventure',
    duration: '6 Days / 5 Nights',
    price: 750,
    rating: 3
  },
  {
    id: 6,
    image: img6,
    title: 'City Explorer Package',
    duration: '4 Days / 3 Nights',
    price: 500,
    rating: 4
  },
  {
    id: 5,
    image: img5,
    title: 'Mountain Trekking Adventure',
    duration: '6 Days / 5 Nights',
    price: 750,
    rating: 2
  },
  {
    id: 6,
    image: img6,
    title: 'City Explorer Package',
    duration: '4 Days / 3 Nights',
    price: 500,
    rating: 3
  }
];


export const googleReview :GoogleReview []= [
  { name: 'Isuru',
    image: img1 ,
    title: 'City Explorer Package',
    description : 'Lorem ipsum dolor sit amet consectetur aliquid vero sit. Excepturi dolorum mollitia recusandae eligendi. Eos corporis tenetur ipsum non, architecto quo fugit.',
    rating : 5,
    date:'2024/03/11'
  },
  { name: 'madusanka',
    image: img1 ,
    title: 'City Explorer Package',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio dolor maxime. A. Eos corporis tenetur ipsum non, architecto quo fugit.',
    rating : 3,
    date:'2024/09/11'
  },
  { name: 'kavindu',
    image: img1 ,
    title: 'City Explorer Package',
    description : 'lor emuasgy dfuafgyaufga suygfyasg fuoasgd fuyabgusdf ygyahf',
    rating : 1,
    date:'2024/09/05'
  },
  { name: 'kavindu madu',
    image: img1 ,
    title: 'City Explorer Package',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam od Eos corporis tenetur ipsum non, architecto quo fugit.',
    rating : 4,
    date:'2024/10/11'
  },
  { name: 'madusanka',
    image: img1 ,
    title: 'City Explorer Package',
    description : 'loremuasgydfuafg yaufgasuygfyasg fuoasgdfuy abgusdfygyahf',
    rating : 3,
    date:'2024/09/11'
  },
  { name: 'kavindu',
    image: img1 ,
    title: 'City Explorer Package',
    description : 'lore muasg ydfuafg yaufgasu ygfyasgf uoasgdfu yabgusd fygyahf',
    rating : 1,
    date:'2024/09/05'
  },
  { name: 'kavindu madu',
    image: img1 ,
    title: 'City Explorer Package',
    description : 'lo remuasgyd fuafg yaufga suyg fya sgfuoasgdf uyabgusd fygyahf',
    rating : 4,
    date:'2024/10/11'
  },
]
