import { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import { Page } from "../components/pages";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import { Home, About, Resume, WorkSamples, Comments, Contact } from "../pages";
const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);
  const handlePageNumber = (event, newPage) => {
    console.log(newPage);
    setPageNumber(newPage);
  };
  const handlePageChange = (index) => {
    setPageNumber(index);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />

        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageChange}>
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle=" سایت شخصی من |خانه اصلی" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle=" سایت شخصی من |درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle=" سایت شخصی من |رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <WorkSamples helmetTitle=" سایت شخصی من  نمونه کارهای من" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle=" سایت شخصی من |نظرات شما" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle="سایت شخصی من|ارتباط با من " />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
};

export default AppContainer;
