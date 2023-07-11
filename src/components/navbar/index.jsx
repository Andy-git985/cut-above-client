import { useMediaQuery } from "@mui/material/";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { theme } from "../../styles/styles";

export default function NavBar() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ marginBottom: 2 }}>
      <AppBar
        component="nav"
        position="relative"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>{isMobile ? <NavDesktop /> : <NavMobile />}</Toolbar>
      </AppBar>
    </div>
  );
}
