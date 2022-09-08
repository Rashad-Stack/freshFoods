import { motion } from "framer-motion";
import { createRef, useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HomeContainer, MenuContainer, RowContainer } from "../../Components";
import { useStateValue } from "../../Context/StateProvider";
const Container = () => {
  const [{ foodItems }] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const rowContainer = useRef();
  const cardRef = createRef();
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    setFilteredFoods(foodItems?.filter((food) => food.category === "fruits"));
  }, [foodItems]);

  useEffect(() => {
    rowContainer.current.scrollTo({
      left: scrollValue,
      behavior: "smooth",
    });
  }, [scrollValue]);

  const slideNextHandler = () => {
    const cardWidth = cardRef.current.clientWidth;
    const rowContainerWidth = rowContainer.current.clientWidth;
    if (scrollValue > rowContainerWidth + cardWidth) {
      setScrollValue(rowContainerWidth + cardWidth);
    } else {
      setScrollValue((prevValue) => prevValue + cardWidth);
    }
  };

  const slidePreviousHandler = () => {
    const cardWidth = cardRef.current.clientWidth;
    setScrollValue((prevVal) => {
      if (prevVal <= 0) return prevVal;
      return prevVal - cardWidth;
    });
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl font-semibold uppercase relative text-quaternary before:absolute before:rounded-lg before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </h2>
          <div className="hidden md:flex gap-3 items-center">
            <motion.button
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg highlight-remove"
              whileTap={{ scale: 0.75 }}
              onClick={slidePreviousHandler}
            >
              <MdChevronLeft className="text-4xl text-white" />
            </motion.button>
            <motion.button
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg highlight-remove"
              whileTap={{ scale: 0.75 }}
              onClick={slideNextHandler}
            >
              <MdChevronRight className="text-4xl text-white" />
            </motion.button>
          </div>
        </div>
        <div
          ref={rowContainer}
          className="w-full my-12 flex items-center gap-5 overflow-x-scroll scrollbar-none"
        >
          {filteredFoods &&
            filteredFoods?.map((food) => (
              <RowContainer key={food?.id} food={food} cardRef={cardRef} />
            ))}
        </div>
      </section>
      <MenuContainer />
    </div>
  );
};

export default Container;
