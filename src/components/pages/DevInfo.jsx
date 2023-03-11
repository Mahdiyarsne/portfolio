import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";
const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "bottom", color: "aqua" }}
      />
    </Typography>
  );
};

 const DevInfo = () => {

  return (
    <>
      <Info>نام و نام خانوادگی : مهدی یار ثنایی مقدم</Info>
      <Info>سن: 24</Info>
      <Info> شهر : مشهد </Info>
      <Info>mahdiyarsne98@gmail.com :ادرس ایمیل</Info>
      <Info> شماره موبایل :09156682355</Info>
    </>
  );
};

export default DevInfo;
