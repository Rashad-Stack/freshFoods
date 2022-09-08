import { motion } from "framer-motion";
import { useState } from "react";
import { categories } from "../../Data";
function MenuContainer() {
  const [filter, setFilter] = useState("chicken");

  return (
    <section id="menu" className="w-full my-6">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold uppercase relative text-quaternary before:absolute before:rounded-lg before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </h2>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories?.map((category) => (
              <motion.button
                whileTap={{ scale: 0.75 }}
                key={category?.id}
                onClick={() => setFilter(category?.urlParamName)}
              >
                <span
                  className={`group ${
                    filter === category?.urlParamName
                      ? "bg-tertiary"
                      : "bg-card-overlay-light"
                  }  hover:bg-tertiary w-24 min-w-[94px] h-28 rounded-lg shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out`}
                >
                  <span
                    className={`w-10 h-10 rounded-full ${
                      filter === category?.urlParamName
                        ? "bg-card-overlay-light"
                        : " bg-tertiary "
                    } bg-tertiary group-hover:bg-card-overlay-light flex items-center justify-center`}
                  >
                    <span
                      className={`${
                        filter === category?.urlParamName
                          ? "text-tertiary"
                          : " text-white "
                      } group-hover:text-tertiary text-2xl`}
                    >
                      {category?.icon}
                    </span>
                  </span>
                  <p
                    className={`${
                      filter === category?.urlParamName
                        ? "text-white "
                        : " text-primary "
                    } text-sm  group-hover:text-white`}
                  >
                    {category?.name}
                  </p>
                </span>
              </motion.button>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MenuContainer;
