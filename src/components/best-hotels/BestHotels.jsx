import React from "react";
import image_1 from "../../../public/assets/hr_1.jpg";
import image_2 from "../../../public/assets/hr_2.jpg";
import image_3 from "../../../public/assets/hr_3.jpg";
import image_4 from "../../../public/assets/hr_4.jpg";
import Card from "./Card";

function BestHotels() {
  const data = [
    {
      name: "Arbian Paradise",
      image: image_1,
      price: 324.5,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE",
    },
    {
      name: "Arbian Paradise",
      image: image_2,
      price: 324.5,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE",
    },
    {
      name: "Arbian Paradise",
      image: image_3,
      price: 324.5,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE",
    },
    {
      name: "Arbian Paradise",
      image: image_4,
      price: 324.5,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE",
    },
  ];
  return (
    <div className="h-full w-full my-36">
      <div className="h-full w-5/6 mx-auto flex flex-col justify-start">
        <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">
          {" "}
          Explore Top
        </h5>
        <h2 className="text-4xl text-slate-800 font-bold mt-6 mb-12">
          Best Hotels
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {data?.map((place, index) => (
            <Card key={index} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestHotels;
