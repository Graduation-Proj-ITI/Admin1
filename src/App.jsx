import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./utils/Theme";
import BottomAppBar from "./pages/Message";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import AllCategories from "./pages/categories/AllCategories";
import AllBlogs from "./pages/blogs/AllBlogs";
import AddBlog from "./pages/blogs/AddBlog";
import EditBlog from "./pages/blogs/EditBlog";
import AddCategory from "./pages/categories/AddCategory";
import AddProduct from "./pages/products/AddProduct";
import EditCategory from "./pages/categories/EditCategory";
import AllProducts from "./pages/products/AllProducts";
import EditProduct from "./pages/products/EditProduct";
import TopCategories from "./pages/categories/TopCategories";
import TopProducts from "./pages/products/TopProducts";
import Orders from "./pages/orders/Orders";
import AllUsers from "./pages/users/AllUsers";
import Login from "./pages/Login";
import UserDetails from "./pages/users/userDetails";
import OrderDetails from "./pages/orders/OrderDetails";
import Profile from "./pages/Profile";
import Protected from "./components/global/protected";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app">
          <Box className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />

              <Route
                path="/allBlogs"
                element={
                  <Protected>
                    <AllBlogs />
                  </Protected>
                }
              />
              <Route
                path="/addBlog"
                element={
                  <Protected>
                    <AddBlog />
                  </Protected>
                }
              />
              <Route
                path="/blogs/:blogId"
                element={
                  <Protected>
                    <EditBlog />
                  </Protected>
                }
              />

              <Route
                path="/allCategories"
                element={
                  <Protected>
                    <AllCategories />
                  </Protected>
                }
              />
              <Route
                path="/topCategories"
                element={
                  <Protected>
                    <TopCategories />
                  </Protected>
                }
              />
              <Route
                path="/addCategory"
                element={
                  <Protected>
                    <AddCategory />
                  </Protected>
                }
              />
              <Route
                path="/categories/:categoryId"
                element={
                  <Protected>
                    <EditCategory />
                  </Protected>
                }
              />

              <Route
                path="/allProducts"
                element={
                  <Protected>
                    <AllProducts />
                  </Protected>
                }
              />
              <Route
                path="/addProduct"
                element={
                  <Protected>
                    <AddProduct />
                  </Protected>
                }
              />
              <Route
                path="/products/:productId"
                element={
                  <Protected>
                    <EditProduct />
                  </Protected>
                }
              />
              <Route
                path="/topProducts"
                element={
                  <Protected>
                    <TopProducts />
                  </Protected>
                }
              />

              <Route
                path="/orders"
                element={
                  <Protected>
                    <Orders />
                  </Protected>
                }
              />
              <Route
                path="/orders/:orderDetailsId"
                element={<OrderDetails />}
              />

              <Route
                path="/users"
                element={
                  <Protected>
                    <AllUsers />
                  </Protected>
                }
              />
              <Route
                path="/users/:userId"
                element={
                  <Protected>
                    <UserDetails />
                  </Protected>
                }
              />

              <Route
                path="/report"
                element={
                  <Protected>
                    <Report />
                  </Protected>
                }
              />

              <Route
                path="/setting"
                element={
                  <Protected>
                    <Setting />
                  </Protected>
                }
              />

              <Route
                path="/message"
                element={
                  <Protected>
                    <BottomAppBar />
                  </Protected>
                }
              />

              <Route
                path="/profile"
                element={
                  <Protected>
                    <Profile />
                  </Protected>
                }
              />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
