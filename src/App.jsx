import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { AppBar } from "./components/AppBar/AppBar";

const Shops = lazy(() => import("../src/components/Shops/Shops"));
const ShopingCart = lazy(() => import("./components/ShopingCart/ShoppingCart"));

function App() {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Layout>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Routes>
            <Route path="/" element={<Shops />} />
            <Route path="/shopingcart" element={<ShopingCart />} />
            <Route path="*" element={<Shops />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
