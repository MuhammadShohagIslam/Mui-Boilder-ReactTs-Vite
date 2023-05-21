import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import routers from "./routes/Routers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routers} />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
