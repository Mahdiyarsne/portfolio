import { useContext } from "react";
import { Box, Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import MainContext from "../../context";
const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        aria-label="sidebar"
        size="small"
        sx={{ m: 1.5, backgroundColor: deepOrange[500] }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
