import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { app } from "../Firebase";
import { ActionType } from "../Utilities/Context/Reducer";
import { useStateValue } from "../Utilities/Context/StateProvider";
function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { StateProvider, providerData },
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
    console.log("ok");
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: ActionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-6 md:px-16">
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
          <button className="relative flex items-center">
            <MdShoppingBasket className="text-primary text-2xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-tertiary flex items-center justify-center">
              <span className="text-xs text-white font-semibold">2</span>
            </span>
          </button>
          <div className="relative highlight-remove">
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
                  <button className="flex items-center gap-3 px-5 py-1 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-primary text-base highlight-remove">
                    New Item <MdAdd />
                  </button>
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
          <button className="relative flex items-center active:bg-none highlight-remove">
            <MdShoppingBasket className="text-primary text-2xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-tertiary flex items-center justify-center">
              <span className="text-xs text-white font-semibold">2</span>
            </span>
          </button>
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
                  <button className="flex items-center gap-3 px-4 py-1 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-primary text-base highlight-remove">
                    New Item <MdAdd />
                  </button>
                )}

                <ul className="flex flex-col text-start gap-3">
                  <li className="text-base text-primary hover:bg-slate-100 hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Home
                  </li>
                  <li className="text-base text-primary hover:bg-slate-100 hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Menu
                  </li>
                  <li className="text-base text-primary hover:bg-slate-100 hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    About Us
                  </li>
                  <li className="text-base text-primary hover:bg-slate-100 hover:text-quaternary duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
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
