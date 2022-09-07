import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, CreateContainer } from "./app/Components";
import { ActionType } from "./app/Context/Reducer";
import { useStateValue } from "./app/Context/StateProvider";
import { Layout } from "./app/Utilities";
import { getAllFoodItems } from "./app/Utilities/firebaseFunction";
function App() {
  const [{ foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: ActionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Routes>
          <Route path="/*" element={<Container foodItems={foodItems} />} />
          <Route
            path="/createnewitem"
            element={<CreateContainer fetchData={fetchData} />}
          />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;
