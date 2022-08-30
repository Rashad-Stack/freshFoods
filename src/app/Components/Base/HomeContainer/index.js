import React from "react";

const HomeContainer = () => {
  return (
    <section id="home" className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
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
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4">
          <div className="w-46 p-4 bg-card-overlay backdrop-blur-md rounded-md flex flex-col items-center justify-center">
            <img src="Assets/i1.png" alt="Ice cream" className="w-40 -mt-20 " />
            <p className="text-base font-semibold text-primary">
              Chocolate Vanilla
            </p>
            <p className="text-sm text-primary-light font-semibold">
              Chocolate & Vanilla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
