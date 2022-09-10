import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { ActionType } from "../../Context/Reducer";
import { useStateValue } from "../../Context/StateProvider";
function CartContainer() {
  const [{ foodItems, showCart }, dispatch] = useStateValue();
  const hideShowCart = () => {
    dispatch({
      type: ActionType.SET_CART_SHOW,
      showCart: !showCart,
    });
  };
  return (
    <motion.div
      className="fixed top-0 right-0 w-full md:w-94 h-screen bg-white drop-shadow-md flex flex-col z-60"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <div className="w-full flex items-center justify-between p-4">
        <motion.button
          whileTap={{ scale: 0.75 }}
          className="highlight-remove"
          onClick={hideShowCart}
        >
          <MdOutlineKeyboardBackspace className="text-primary text-3xl" />
        </motion.button>
        <h4 className="text-primary text-lg font-semibold">Cart</h4>
        <motion.button
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px2 my-2 bg-gray-100 rounded-md hover:shadow-md text-primary text-base highlight-remove"
        >
          Clear <RiRefreshFill />
        </motion.button>
      </div>
      <div className="w-full h-full bg-neutral-100 rounded-t-3xl flex flex-col justify-between">
        <div className=" w-full h-86 md:h-44 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          <div className="w-full py-3 px-2 rounded-lg bg-neutral-200 flex items-center gap-2 hover:shadow-sm">
            <img
              src={foodItems && foodItems[0]?.imageURL}
              alt=""
              className="w-20 h-20 max-w-15 object-contain"
            />
            <div className="flex flex-col gap-2">
              <p className="text-base text-primary">Chocolate vanilla</p>
              <p className="text-sm block text-orange-900 font-semibold">
                $8.5
              </p>
            </div>
            <div className="group flex items-center gap-2 self-end">
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="highlight-remove"
              >
                <BiPlus className="text-orange-900" />
              </motion.button>
              <span className="w-5 h-5 rounded-sm text-orange-900 flex items-center justify-center">
                1
              </span>
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="highlight-remove"
              >
                <BiMinus className="text-orange-900" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className=" w-full max-h-86 flex-1 bg-neutral-200 rounded-t-3xl flex flex-col items-center justify-between px-8 py-10">
          <div className="w-full flex items-center justify-between mb-2">
            <p className="text-primary text-lg">Sub Total</p>
            <p className="text-primary text-lg">$ 8.5</p>
          </div>
          <div className="w-full flex items-center justify-between mb-2">
            <p className="text-primary text-lg">Delivery</p>
            <p className="text-primary text-lg">$ 2.5</p>
          </div>
          <div className="w-full flex items-center justify-between border-t border-gray-400 pt-1">
            <p className="text-primary text-xl">Total</p>
            <p className="text-primary text-xl">$11.5</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg highlight-remove"
          >
            Check Out
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default CartContainer;
