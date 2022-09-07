import { motion } from "framer-motion";

import { MdShoppingBasket } from "react-icons/md";
function Index({ food, cardRef }) {
  return (
    <figure
      ref={cardRef}
      className="w-76 min-w-76 md:w-86 md:min-w-86 h-auto bg-gray-100 backdrop-blur-lg p-2 my-12"
    >
      <div className="w-full flex items-center justify-between">
        <motion.img
          src={food?.imageURL}
          alt={food?.title}
          className="w-40"
          whileHover={{ scale: 1.1 }}
        />
        <motion.button
          className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center cursor-pointer shadow-md highlight-remove"
          whileTap={{ scale: 0.75 }}
        >
          <MdShoppingBasket className="text-white" />
        </motion.button>
      </div>

      <figcaption className=" w-full flex flex-col items-end justify-end">
        <p className="text-primary font-semibold text-base md:text-lg capitalize">
          {food?.title}
        </p>
        <p className="mt-2 text-sm text-gray-500">{food?.calories} Calories</p>

        <div className="flex items-center gap-8">
          <p className="text-lg text-quaternary font-semibold">
            <span className="text-sm text-red-500">$</span>
            {food?.price}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Index;
