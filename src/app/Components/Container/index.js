import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { HomeContainer, RowContainer } from "../../Components";

const Container = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl font-semibold uppercase relative text-quaternary before:absolute before:rounded-lg before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy foods
          </h2>
          <div className="hidden md:flex gap-3 items-center">
            <motion.button
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg highlight-remove"
              whileTap={{ scale: 0.75 }}
            >
              <MdChevronLeft className="text-4xl text-white" />
            </motion.button>
            <motion.button
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg highlight-remove"
              whileTap={{ scale: 0.75 }}
            >
              <MdChevronRight className="text-4xl text-white" />
            </motion.button>
          </div>
        </div>
        <RowContainer flag={false} />
      </section>
    </div>
  );
};

export default Container;
