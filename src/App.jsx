import React, { useEffect, useState } from "react";
import Side from "./components/global/Sidebar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./utils/Theme";
import Topbar from "./components/global/Topbar";
import BottomAppBar from "./pages/Message";
import Setting from "./pages/Setting";
import Overview from "./pages/Overview";
import Report from "./pages/Report";
import AllCategories from "./pages/categories/AllCategories";
import TopSelling from "./pages/categories/TopSelling";
import AllBlogs from "./pages/blogs/AllBlogs";
import AddBlog from "./pages/blogs/AddBlog";
import EditBlog from "./pages/blogs/EditBlog";
import AddCategory from "./pages/categories/AddCategory";
import AddProduct from "./pages/products/AddProduct";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app">
          <Side />
          <Box className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/allBlogs" element={<AllBlogs />} />
              <Route path="/addBlog" element={<AddBlog />} />
              <Route path="/blogs/:id" element={<EditBlog />} />
              <Route path="/allBlogs" element={<AllBlogs />} />
              <Route path="/topCategories" element={<TopSelling />} />
              <Route path="/allCategories" element={<AllCategories />} />
              <Route path="/addCategory" element={<AddCategory />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/report" element={<Report />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/message" element={<BottomAppBar />} />
            </Routes>
          </Box>
        </Box>
        {/* <main className="content"> */}
        {/* </main> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
