import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Products {
  id: number;
  tittle: string;
  rating?: string;
  price: string;
  old_price?: string;
  percent_Off?: string;
  img: string;
}

const product: Products[] = [
  {
    id: 5,
    tittle: "Vertical Striped Shirt",
    price: "$212",
    img: "/product5.png",
    old_price: "$232",
    percent_Off: "-20",
  },
  {
    id: 6,
    tittle: "Courage Graphic T-shirt",
    price: "$145",
    img: "/product6.png",
  },
  {
    id: 7,
    tittle: "Loose Fit Bermuda Shorts",
    price: "$80",
    img: "/product7.png",
  },
  {
    id: 8,
    tittle: "Faded Skinny Jeans",
    price: "$210",
    img: "/product8.png",
  },
];

const ratingStar = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];

const TopItems = () => {
  return (
    <div className="w-full h-[400px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Top SELLING
      </h1>
      <div className="flex flex-col md:flex-row  md:justify-between px-20 mt-10">
        {product.map((details) => {
          return (
            <div key={details.id}>
              <Link href={`/products/${details.id}`}>
                {" "}
                <div className="w-[200px] h-[200px] bg-[#F0EEED] rounded-[20px] ">
                  <Image
                    src={details.img}
                    alt={details.tittle}
                    width={100}
                    height={100}
                    className="w-full h-full"
                  ></Image>
                </div>
              </Link>
              <div>
                <p className="text-lg font-semibold">{details.tittle}</p>
                <p className="flex text-yellow-300">{ratingStar}</p>
                <p className="text-lg font-bold">
                  {details.price}{" "}
                  <span className="text-gray-400 pl-2 font-bold line-through">
                    {details.old_price}
                  </span>
                  <span className="text-xs text-red-500 pl-2">
                    {details.percent_Off}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopItems;
