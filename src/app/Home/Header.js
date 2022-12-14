import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { ActionType } from "../Context/Reducer";
import { useStateValue } from "../Context/StateProvider";
import { app } from "../Firebase";
function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: ActionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: ActionType.SET_USER,
      user: null,
    });
  };
  const showCart = () => {
    dispatch({
      type: ActionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-6 md:px-16 bg-secondary">
      {/* Desktop and Tablet */}
      <nav className="hidden w-ful h-full md:flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Assets/logo.png" alt="logo" className="w-8 object-cover" />
          <p className="text-quaternary text-xl font-bold">Fresh Foods</p>
        </Link>
        <div className="flex gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-primary hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-primary hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-primary hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-primary hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="relative flex items-center highlight-remove"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-primary text-2xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-tertiary flex items-center justify-center">
                <span className="text-xs text-white font-semibold">
                  {cartItems.length}
                </span>
              </span>
            )}
          </motion.button>
          <div className="relative">
            <button className="highlight-remove" onClick={login}>
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user?.photoURL : "Assets/avatar.png"}
                alt="userprofile"
                className="w-10 min-w-10 min-h-10 drop-shadow-xl rounded-full"
              />
            </button>
            {isMenu && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-lg rounded-lg flex flex-col absolute top-12 right-0 py-2"
              >
                {user && user?.email === "tex.eng.rashed@gmail.com" && (
                  <Link to="createnewitem">
                    <button
                      className="flex items-center gap-3 px-5 py-1 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-primary text-base highlight-remove"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </button>
                  </Link>
                )}
                <button
                  className="flex items-center gap-3 px-5 py-1 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-primary text-base highlight-remove"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </button>
              </motion.span>
            )}
          </div>
        </div>
      </nav>
      {/* Mobile */}
      <nav className="flex items-center justify-between md:hidden w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Assets/logo.png" alt="logo" className="w-8 object-cover" />
          <p className="text-quaternary text-md font-semibold">Fresh Foods</p>
        </Link>

        <div className="flex items-center gap-5">
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="relative flex items-center active:bg-none highlight-remove"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-primary text-2xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-tertiary flex items-center justify-center">
              <span className="text-xs text-white font-semibold">2</span>
            </span>
          </motion.button>
          <div className="relative">
            <button className="highlight-remove" onClick={login}>
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user?.photoURL : "Assets/avatar.png"}
                alt="userprofile"
                className="w-10 min-w-10 min-h-10 drop-shadow-xl rounded-full"
              />
            </button>
            {isMenu && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-lg rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user?.email === "tex.eng.rashed@gmail.com" && (
                  <Link to="createnewitem">
                    <button
                      className="flex items-center gap-3 px-4 py-1 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-primary text-base highlight-remove"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </button>
                  </Link>
                )}

                <ul className="flex flex-col text-start gap-3">
                  <li
                    className="text-base text-primary hover:bg-slate-100 hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Home
                  </li>
                  <li
                    className="text-base text-primary hover:bg-slate-100 hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Menu
                  </li>
                  <li
                    className="text-base text-primary hover:bg-slate-100 hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    About Us
                  </li>
                  <li
                    className="text-base text-primary hover:bg-slate-100 hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer px-4 py-2"
                    onClick={() => setIsMenu(false)}
                  >
                    Service
                  </li>
                </ul>

                <button
                  className="flex items-center justify-center gap-3 cursor-pointer bg-gray-200  hover:bg-gray-300 transition-all duration-100 ease-in-out text-primary text-base m-2 p-2 shadow-md rounded-md highlight-remove"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </button>
              </motion.span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
