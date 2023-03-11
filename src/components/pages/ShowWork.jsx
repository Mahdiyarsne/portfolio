import { workSamples } from "../../constants/workSamples";
import EllipsisText from "react-ellipsis-text";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ShowWork = ({loading}) => {
  return (
    <>
      {workSamples.map((workSamples, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card sx={{ minWidth: 345, backgroundColor: "#0288d1" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  width="150"
                  image={workSamples.image}
                  alt={workSamples.title}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {workSamples.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="left"
                    gutterBottom
                    sx={{ direction: "ltr" }}
                  >
                    <EllipsisText text={workSamples.info} length={"30"} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary" target="_blank">
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowWork;
