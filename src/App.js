import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Details from "./pages/Details/Details";
import Login from "./pages/Login/Login";
import NewBlog from "./pages/NewBlog/NewBlog";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";
import RoutePrivate from "./private/RoutePrivate";

function App() {
  
  return (
    <div className="App">
      <Provider store={store} >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<RoutePrivate />}>
            <Route path="/newblog" element={<NewBlog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateblog" element={<UpdateBlog />} />
            <Route path="/details/:id" element={<Details />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
