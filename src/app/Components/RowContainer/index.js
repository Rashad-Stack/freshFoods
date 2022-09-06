import { MdShoppingBasket } from "react-icons/md";
function index({ flag }) {
  return (
    <div
      className={`w-full my-12 ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-full md:w-58 h-auto backdrop-blur-lg">
        <figure className="w-full flex flex-col items-center justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/freshfoods-71978.appspot.com/o/Images%2F1662465854665-c7.png?alt=media&token=4fcea260-4738-4534-9323-ff09af41d898"
            alt=""
            className="w-40"
          />
          <button className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center cursor-pointer shadow-md highlight-remove">
            <MdShoppingBasket className="text-white" />
          </button>
          <figcaption className=" w-full flex  items-end justify-end">
            <p className="text-primary font-semibold text-base md:text-lg">
              Chocolate & Vanilla
            </p>
            <p
              className="mt-2 text-sm text-gray-500
            "
            >
              Calories
            </p>
          </figcaption>
          <figcaption className="flex items-center gap-8">
            <p className="text-lg text-quaternary font-semibold">
              <span className="text-sm text-red-500">$</span>5.25
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default index;
