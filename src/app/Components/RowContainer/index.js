import { motion } from "framer-motion";
import { useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { ActionType } from "../../Context/Reducer";
import { useStateValue } from "../../Context/StateProvider";
function Index({ food, cardRef }) {
  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: ActionType.SET_CART_ITEMS,
      cartItems: [...cartItems, food],
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <figure
      ref={cardRef}
      className="w-76 min-w-76 md:w-86 md:min-w-86 h-58 bg-gray-50 backdrop-blur-lg p-2 my-12 hover:drop-shadow-lg flex flex-col items-center justify-between"
    >
      <div className="w-full flex items-center justify-between">
        <motion.img
          src={food?.imageURL}
          loading="lazy"
          alt={food?.title}
          className="h-40 w-40 object-contain -mt-8 drop-shadow-2xl"
          whileHover={{ scale: 1.1 }}
        />
        <motion.button
          className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center cursor-pointer shadow-md highlight-remove"
          whileTap={{ scale: 0.75 }}
          onClick={addToCart}
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
