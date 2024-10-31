import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ place }) => {
  return (
    <Link
      href={"/catalog"}
      className="cursor-pointer h-[500px] w-[350px] flex flex-wrap rounded-xl shadow-md"
    >
      <div className="relative h-2/3 w-full">
        <Image
          src={place.image}
          className="h-full w-full overflow-hidden rounded-tl-xl rounded-tr-xl object-cover"
          alt="PlaceImage"
        />
        <div className="absolute right-0 bottom-0 p-4 bg-blue-700 text-white rounded-tl-xl font-semibold">
          {place.city}
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-center text-2xl text-slate-800 font-semibold">
            {place.numOfPlaces} Places to stay
          </h2>
          <p className="text-center mt-2 text-lg text-slate-700">
            Discover the best hotel or apartment for your adventurous journey
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
