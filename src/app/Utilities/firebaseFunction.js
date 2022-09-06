import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { fireStore } from "../Firebase";

// Saving new items
export const saveItem = async (data) => {
  const foodItemsRef = collection(fireStore, "foodItems");
  await setDoc(doc(foodItemsRef, `${Date.now()}`), data, {
    merge: true,
  });
};

// Get all food items
export const getAllFoodItems = async () => {
  const item = await getDocs(
    query(collection(fireStore, "foodItems"), orderBy("id", "desc"))
  );
  return item.docs.map((doc) => doc.data());
};
