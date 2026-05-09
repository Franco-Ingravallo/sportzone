import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Equipo from "./pages/Equipo";
import Developer from "./pages/Developer";
import NotFound from "./pages/NotFound";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/productos",
    element: <Layout><Productos /></Layout>,
  },
  {
    path: "/equipo",
    element: <Layout><Equipo /></Layout>,
  },
  {
    path: "/developer",
    element: (
      <Layout>
        <Developer
          nombre="Franco Ingravallo"
          carrera="Ingeniería Civil Informática"
          ciudad="Talca"
          github="Franco-Ingravallo"
        />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <Layout><NotFound /></Layout>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;