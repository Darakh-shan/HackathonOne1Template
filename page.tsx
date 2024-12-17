import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import page from "../page";

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
    id: 1,
    tittle: "T-shirt with Tape Details",
    price: "$120",
    img: "/product1.png",
  },
  {
    id: 2,
    tittle: "Skinny fit jeans",
    price: "$240",
    img: "/product2.png",
    old_price: "$260",
    percent_Off: "-20%",
  },
  {
    id: 3,
    tittle: "Checkered Shirt",
    price: "$120",
    img: "/product3.png",
  },
  {
    id: 4,
    tittle: "Sleeve Striped T-shirt",
    price: "$120",
    img: "/product4.png",
    old_price: "$160",
    percent_Off: "-30%",
  },
];

const ratingStar = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];

const products = () => {
  return (
    <div className="w-full md:h-[400px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        NEW ARRIVALS
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

export default products;
