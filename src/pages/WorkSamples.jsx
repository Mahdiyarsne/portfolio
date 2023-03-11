import { useState, useEffect } from "react";
import {
  Card,
  CardContent,

} from "@mui/material";

import { SelfImprovementRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";

import Grid from "@mui/material/Unstable_Grid2";
import { CustomDivider } from "../components/common";
import {ShowWork} from "../components/pages";

const WorkSamples = ({ helmetTitle }) => {
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
        bColor="primary.main"
        cColor="primary"
        icon={<SelfImprovementRounded />}
        align="center"
        text="نمونه کار ها "
        />
        <Grid container sx={{ mx: 2, mt: 5 }}>
          <ShowWork loading={loading}/>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WorkSamples;
