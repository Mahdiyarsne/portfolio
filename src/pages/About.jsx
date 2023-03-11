import { Card, CardContent } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { CodeRounded, Person4Rounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { DevInfo, DevWorkCount, Skills } from "../components/pages";
import avatar from "../assets/avatar02.png";
import CustomAvatar from "./../components/common/CustomAvatar";
import { CustomDivider } from "../components/common";
const About = ({ helmetTitle }) => {
  return (
    <Card
      sx={{
        height: "100.3vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text="توسعه دهنده فرانت اند"
            />

            <Grid container>
              <Grid
                xs={4}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  mt: 3,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
                <DevWorkCount />
              </Grid>
              <Grid xs={12} sm={8} md={9} lg={9}>
               <DevInfo/>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar avatar={avatar} size={200} fa />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<Person4Rounded />}
              align="center"
              text=" مهارت های من"
            />

            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
