import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import { categories } from "../../Data";
import { storage } from "../../Firebase";
import { Loader } from "../../Utilities";
import { saveItem } from "../../Utilities/firebaseFunction";

const CreateContainer = ({ fetchData }) => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setField] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      (error) => {
        console.log(error);
        setField(true);
        setMsg("Error while uploading : Try again 🤖");
        setAlertStatus("danger");
        setTimeout(() => {
          setField(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setField(true);
          setMsg("image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setField(false);
          }, 4000);
        });
      }
    );
  };
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setField(true);
      setMsg("Image delete successfully 👌");
      setAlertStatus("success");
      setTimeout(() => {
        setField(false);
      }, 4000);
    });
  };

  const saveDetail = () => {
    setField(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setField(true);
        setMsg("Required Fields cant't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setField(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setField(true);
        clearData();
        setMsg("Data uploaded successfully 👌");
        setAlertStatus("success");
        setTimeout(() => {
          setField(false);
        }, 4000);
      }
    } catch {
      setField(true);
      setMsg("Error while uploading : Try again 🤖");
      setAlertStatus("danger");
      setTimeout(() => {
        setField(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center gap-4">
      <div className="w-11/12 md:w-3/4 border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-3 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title..."
            className="w-full h-full text-lg bg-transparent font-semibold outlie-none border-none placeholer:text-gray-"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
          >
            <option className="bg-white">Select Category</option>
            {categories &&
              categories?.map((category) => (
                <option
                  key={category.id}
                  value={category?.urlParamName}
                  className="text-base border-0 outline-none capitalize bg-white text-primary"
                >
                  {category?.name}
                </option>
              ))}
          </select>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-58 md:h-106 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        Click to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      className="w-0 h-0"
                      onChange={uploadImage}
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="uploadiamge"
                      className="w-full h-full object-cover"
                    />
                    <button
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hove:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input
              type="text"
              value={calories}
              required
              placeholder="Calories"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-quaternary"
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <input
              type="text"
              value={price}
              required
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-quaternary"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center w-full mt-5">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetail}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateContainer;
