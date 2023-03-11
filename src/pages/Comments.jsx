import { Card, CardContent } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";

import { CustomDivider } from "./../components/common";
import { CommentsSlider } from "../components/pages";

const Comments = ({ helmetTitle }) => {
  return (
    <Card
      sx={{
        height: "100.3vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="success.main"
          cColor="success"
          icon={<ForumRounded />}
          align="center"
          text=" نظرات شما دوستان عزیز"
        />

        <CommentsSlider />
      </CardContent>
    </Card>
  );
};
export default Comments;
