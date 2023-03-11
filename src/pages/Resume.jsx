import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
} from "@mui/material";

import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import {CustomDivider} from "./../components/common";
import {DevExpTimeline,DevEduTimeline} from "../components/pages";
const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
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
        <CustomDivider
          bColor=" primary.main"
          cColor="primary"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="رزومه من"
        />

        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor=" warning.main"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات "
            />

            <DevExpTimeline loading={loading}/>
          </Grid>
          <Grid xs={6}>
            <CustomDivider
              bColor=" info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text=" تحصیلات"
            />

          <DevEduTimeline loading={loading}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
