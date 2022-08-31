import React from "react";
import { heroData as Foods } from "../../Data";
const HomeContainer = () => {
  return (
    <section
      id="home"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 py-2"
    >
      <div className="py-2 flex flex-1 flex-col items-start justify-center gap-5">
        <div className="flex items-center justify-center bg-orange-100 gap-2 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full drop-shadow-xl overflow-hidden">
            <img
              src="Assets/delivery.png"
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold tracking-wide text-quaternary">
          The Fasted Delivery in
          <span className="block text-orange-600 text-6xl lg:text-8xl mt-3">
            Your City
          </span>
        </h1>
        <p className="md:w-4/5 text-base text-primary text-justify md:text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nam
          nisi, quaerat repudiandae quaerat repudiandae unde temporibus
          doloribus? Obcaecati, soluta. Atque exercitationem fugiat, possimus
          neque architecto architecto cum?
        </p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 highlight-remove">
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src="Assets/heroBg.png"
          className=" ml-auto h-106 w-full lg:w-auto lg:h-200"
          alt="hero-bg"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-wrap gap-x-3 gap-y-16 lg:gap-y-32 items-center justify-center 2xl:px-40 py-16">
          {Foods.length &&
            Foods.map((food) => (
              <div
                key={food?.id}
                className=" lg:w-46 p-4 bg-card-overlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center shadow-md"
              >
                <img
                  src={food?.imageSrc}
                  alt="Ice cream"
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                />
                <div className="text-center">
                  <p className="text-base lg:text-xl  font-semibold text-primary">
                    {food?.name}
                  </p>
                  <p className="text-xs lg:text-sm text-primary-light font-semibold my-1 lg:my-3">
                    {food?.description}
                  </p>
                </div>
                <p className="text-sm font-semibold text-primary">
                  <span className="text-xs text-tertiary">$</span> {food?.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
