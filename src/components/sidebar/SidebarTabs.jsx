import { useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import MainContext from "../../context";
import { tabsData } from "../../constants/tabsData";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();
  const theme = useTheme();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          sx={{
            "&.MuiTab-root": {
              backgroundColor:
              theme.palette.mode === "dark"
              ? grey[800]
              : grey[500],
              colors: "text.primary",
              borderRadius: 2,
              my: 0.5,
              mx: 1,
              minHeight: 40,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          iconPosition="start"
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
