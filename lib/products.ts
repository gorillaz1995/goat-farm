export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit?: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "lapte-crud",
    name: "Lapte Crud",
    description:
      "Lapte proaspăt de capră, nefiert și nepasteurizat, bogat în nutrienți și vitamine.",
    price: 6,
    unit: "litru",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cas-dulce",
    name: "Caș Dulce",
    description:
      "Caș proaspăt de capră, cu gust delicat și textură fină, perfect pentru salate sau aperitive.",
    price: 35,
    unit: "kg",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "cas-dospit",
    name: "Caș Dospit",
    description:
      "Caș maturat, cu gust mai intens și aromă distinctivă, ideal pentru preparate tradiționale.",
    price: 40,
    unit: "kg",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "telemea",
    name: "Telemea",
    description:
      "Brânză sărată de capră, cu textură fermă și gust caracteristic, perfectă pentru salate și aperitive.",
    price: 38,
    unit: "kg",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "kefir",
    name: "Kefir",
    description:
      "Băutură fermentată din lapte de capră, bogată în probiotice și benefică pentru sistemul digestiv.",
    price: 8,
    unit: "500g",
    image: "/placeholder.svg?height=200&width=300",
  },
];
