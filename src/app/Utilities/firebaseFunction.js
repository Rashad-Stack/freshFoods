import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
console.log(db);

// Saving new items
export const saveItem = async (data) => {
  await setDoc(doc(db, "foodItems", `${Date.now()}`, data, { merge: true }));
};
