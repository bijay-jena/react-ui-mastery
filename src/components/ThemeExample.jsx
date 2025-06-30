import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: { main: "#3498db" },
  },
});
const lightTheme = createTheme({
  palette: {
    primary: { main: "#1abc9c" },
  },
});
export default function ThemeExample() {
  return (
    <ThemeProvider theme={"dark" ? darkTheme : lightTheme}>
      <div style={{ color: lightTheme.palette.primary.main }}>Primary text</div>
    </ThemeProvider>
  );
}
