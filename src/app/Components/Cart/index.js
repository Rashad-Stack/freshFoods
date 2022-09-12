import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { ActionType } from "../../Context/Reducer";
import { useStateValue } from "../../Context/StateProvider";

function CartItems({ setFlag, flag }) {
  const [qty, setQty] = useState();
  const [{ cartItems }, dispatch] = useStateValue();
  const [updatedCartItems, setUpdatedCartItems] = useState([]);

  const cartDispatch = (filtered = updatedCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    dispatch({
      type: ActionType.SET_CART_ITEMS,
      cartItems: filtered,
    });
  };
  const updateCartItems = (action, id) => {
    if (action === "increment") {
      setQty(qty + 1);
      cartItems.forEach((food) => {
        if (food?.id === id) {
          food.qty += 1;
          setFlag(flag + 1);
        }
      });

      cartDispatch();
    } else if (action === "decrement") {
      if (qty <= 1) {
        const filtered = cartItems.filter((food) => food.id !== id);
        setUpdatedCartItems();
        cartDispatch(filtered);
        setFlag(flag + 1);
      } else {
        setQty(qty - 1);
        cartItems.forEach((food) => {
          if (food?.id === id) {
            food.qty -= 1;
            setFlag(flag + 1);
          }
          cartDispatch();
        });
      }
    }
  };

  useEffect(() => {
    cartItems.map((food) => setQty(food?.qty));
    setUpdatedCartItems(cartItems);
  }, [cartItems, updatedCartItems]);

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((food) => (
          <div
            key={food?.id}
            className="w-full p-3 rounded-lg bg-neutral-200 flex items-center justify-between gap-2 hover:shadow-sm"
          >
            <img
              src={food?.imageURL}
              alt=""
              className="w-20 h-20 max-w-15 object-contain"
            />
            <div className="flex flex-col gap-2">
              <p className="text-base text-primary">{food?.title}</p>
              <p className="text-sm block text-orange-900 font-semibold">
                ${food?.price * food?.qty}
              </p>
            </div>
            <div className="group flex items-center gap-2 self-end">
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="highlight-remove"
                onClick={() => {
                  updateCartItems("decrement", food?.id);
                }}
              >
                <BiMinus className="text-orange-900" />
              </motion.button>
              <span className="w-5 h-5 rounded-sm text-orange-900 flex items-center justify-center">
                {food?.qty}
              </span>
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="highlight-remove"
                onClick={() => {
                  updateCartItems("increment", food?.id);
                }}
              >
                <BiPlus className="text-orange-900" />
              </motion.button>
            </div>
          </div>
        ))
      ) : (
        <div
          className=" w-full h-full flex flex-col items-center justify-center
gap-6"
        >
          <img src="Assets/emptyCart.svg" alt="Cart Empty" />
          <p className="text-xl text-primary font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </>
  );
}

export default CartItems;
