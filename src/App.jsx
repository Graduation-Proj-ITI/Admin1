import Side from "./components/global/Sidebar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./utils/Theme";
import Topbar from "./components/global/Topbar";
import BottomAppBar from "./pages/Message";
import Setting from "./pages/Setting";
import Overview from "./pages/Overview";

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
