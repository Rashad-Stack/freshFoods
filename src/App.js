import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { Container, CreateContainer } from "./app/Components";
import { Layout } from "./app/Utilities";
function App() {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Routes>
          <Route path="/*" element={<Container />} />
          <Route path="/createnewitem" element={<CreateContainer />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;
