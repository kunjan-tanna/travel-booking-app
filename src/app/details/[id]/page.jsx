"use client";
import React, { useEffect, useRef, useState, use } from "react";
import hotel_image_1 from "../../../../public/assets/hr_1.jpg";
import hotel_image_2 from "../../../../public/assets/hr_2.jpg";
import { register } from "swiper/element/bundle";
import { AiFillStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaBed, FaWifi } from "react-icons/fa";
import { format } from "currency-formatter";
import Review from "./Review";
import Image from "next/image";
import BookModal from "@/components/book-modal/BookModal";

register();
const HotelDetails = (ctx) => {
  const { id } = use(ctx?.params);
  console.log("ctx", id);
  const [selectedStar, setSelectedStar] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const swiperRef = useRef(null);

  const handleShowModal = () => setShowModal((prev) => true);
  const handleHideModal = () => setShowModal((prev) => false);

  return (
    <div
      className={`min-h-screen w-full mt-24 ${showModal && "overflow-hidden"}`}
    >
      {showModal && <BookModal handleHideModal={handleHideModal} />}

      <div className="h-full w-3/4 mx-auto">
        <div>
          <div className="w-full h-[750px] overflow-hidden mx-auto">
            <div className="w-full h-full">
              <swiper-container
                ref={swiperRef}
                slides-per-view="1"
                navigation="true"
              >
                <swiper-slide>
                  <Image
                    src={hotel_image_1}
                    className="h-[750px] w-full object-cover"
                    alt="hotelImage"
                  />
                </swiper-slide>
                <swiper-slide>
                  <Image
                    src={hotel_image_2}
                    className="h-[750px] w-full object-cover"
                    alt="hotelImage"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
          </div>
          <div className="mt-12 px-6 w-full flex items-center justify-between">
            <h2 className="font-bold text-4xl">Arabin Paradise</h2>
            <div>
              <span className="p-2 px-4 text-[22px] rounded-full bg-blue-600 text-white flex items-center gap-2">
                <AiFillStar color="white" />
                <span className="text-white">4.7</span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-16 px-6 flex items-center gap-8">
          <span className="flex items-center gap-2">
            <CiLocationOn />
            Dubai, UAE
          </span>
          <span className="flex items-center gap-2">
            {format(325.5, { locale: "en-US" })}/night
          </span>
          <span className="flex items-center gap-2">
            2 <FaBed />
          </span>
          <span className="flex items-center gap-2">
            Free <FaWifi />
          </span>
        </div>
        <div className="mt-16 px-6 w-full flex items-end justify-between">
          <p className="text-xl max-w-xl text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            velit fuga perspiciatis itaque iste, aliquid dignissimos voluptate
            modi, tempore assumenda adipisci dolor hic atque quod consequuntur
            cupiditate. Quasi, nobis veritatis!
          </p>
          <button
            className="cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500"
            onClick={handleShowModal}
          >
            Book
          </button>
        </div>
        <div className="border-t-2 border-white-800 px-6 mt-16 mx-auto">
          <h1 className="mt-16 text-3xl font-bold">Reviews</h1>
          <div className="mt-8 flex items-center gap-6">
            {/* [0,1,2,3,4] */}
            {[...Array(5).keys()].map((number, index) => (
              <span
                key={index}
                onClick={() => setSelectedStar(number + 1)}
                className={`${
                  selectedStar === number + 1 ? "scale-125" : ""
                } cursor-pointer flex items-center gap-2 transition-all`}
              >
                {number + 1}
                <AiFillStar size={22} color="rgb(59,130, 246)" />
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center gap-28 border rounded-lg py-4 px-6 w-max">
          <input
            type="text"
            placeholder="Leave Your opinion.."
            className="outline-none "
          />
          <button className="cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 hover:bg-blue-400 transition-all">
            Post
          </button>
        </div>
        {/* Review Section */}
        <Review />
      </div>
    </div>
  );
};

export default HotelDetails;
