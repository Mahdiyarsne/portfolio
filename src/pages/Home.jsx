import { useEffect, useRef, useCallback, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Typography, Box } from "@mui/material";
import bg04 from "../assets/bg04.jpeg";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";
import Particles from "react-particles";
import { hexagon, links } from "../constants/particles";
import { loadFull } from "tsparticles";


const Home = ({helmetTitle}) => {
  const [index, setIndex] = useState(0);

  const nameEl = useRef(null);

  const strings = [
    "  توسعه دهنده فرانت اند هستم ",
    " توسعه دهنده ری اکت هستم ",
    " فریلنسر هستم ",
    "دیزاینز هستم ",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: [" مهدی یار ثنایی "],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(intervalId);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoad = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg04})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
           <Helmet>
            <title> {helmetTitle}</title>
          </Helmet>
      <Particles
        id="particles"
        init={particlesInit}
        loaded={particlesLoad}
        options={links}
      />
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h3" sx={{ color: "#80deea" }}>
          {" <<"}
        </Typography>
        <Typography
          ref={nameEl}
          variant="h3"
          sx={{ color: "#009688" }}
        ></Typography>
        <Typography variant="h3" sx={{ color: "#80deea" }}>
          {">>  "}
        </Typography>
      </Box>

      <Box component="div" sx={{ display: "flex" }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              color: "whitesmoke",
              textDecoration: "underline",
              textDecorationColor: "#009688",
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h4" color="whitesmoke" sx={{ mt: 2, mr: 1 }}>
          من یک
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
