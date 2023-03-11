import { Divider, Chip, Box, Typography, LinearProgress } from "@mui/material";
const Skill = ({icon,color,name, value}) => {
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          "&::before,&::after": {
            borderColor: `${color}.main`,
          },
        mt:4
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30}} />}
          color={color}
          label={name}
          sx={{ color: "#000", p:2 }}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="purple">
            {Math.round(value)}%
          </Typography>
        </Box>
        <Box sx={{ width: "100%",mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ height: 8, borderRadius: 2 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
