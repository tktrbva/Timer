import "./App.css";
import Date from "./components/dateIndication/date";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Date />
      </ThemeProvider>
    </div>
  );
}

export default App;
