import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { Container } from "./app/Components/Base";
import { Layout } from "./app/Components/Utilities";
function App() {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Routes>
          <Route path="/*" element={<Container />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;
