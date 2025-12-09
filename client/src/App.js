import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Header from './components/Header/Header';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Search from "./pages/SearchPage/SearchPage";


const AboutPage = () => <h1>Learn more About Us!</h1>;
const ContactPage = () => <ContactUs />;
const NotFoundPage = () => <h1>404 - Page Not Found</h1>;


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: (
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
        <AboutPage />
      </div>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <div>
        <ContactPage />
      </div>
    ),
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetails />,
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
    // <>
    // <Header />
    // <Footer />
    // </>
  );
}

export default App;
