import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { Cart } from "../../Components";
import { ActionType } from "../../Context/Reducer";
import { useStateValue } from "../../Context/StateProvider";
function CartContainer() {
  const [totalPrice, setTotalPrice] = useState();
  const [flag, setFlag] = useState(1);
  const [{ showCart, user, cartItems }, dispatch] = useStateValue();
  const hideShowCart = () => {
    dispatch({
      type: ActionType.SET_CART_SHOW,
      showCart: !showCart,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(
      (acc, food) => acc + food.price * food.qty,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItems, flag]);

  const clearCart = () => {
    dispatch({
      type: ActionType.SET_CART_ITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
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
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.button>
      </div>

      <div className="w-full h-full bg-neutral-100 rounded-t-3xl flex flex-col justify-between">
        <div className=" w-full h-128 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          <Cart flag={flag} setFlag={setFlag} />
        </div>
        <div className=" w-full max-h-86 flex-1 bg-neutral-200 rounded-t-3xl flex flex-col items-center justify-between px-8 py-10">
          <div className="w-full flex items-center justify-between mb-2">
            <p className="text-primary text-lg">Sub Total</p>
            <p className="text-primary text-lg">$ {totalPrice}</p>
          </div>
          <div className="w-full flex items-center justify-between mb-2">
            <p className="text-primary text-lg">Delivery</p>
            <p className="text-primary text-lg">$ 2.5</p>
          </div>
          <div className="w-full flex items-center justify-between border-t border-gray-400 pt-1">
            <p className="text-primary text-xl">Total</p>
            <p className="text-primary text-xl">$ {+totalPrice + 2.5}</p>
          </div>
          {user ? (
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg highlight-remove"
            >
              Check Out
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg highlight-remove"
            >
              Login
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default CartContainer;
