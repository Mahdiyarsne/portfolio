import { Box, IconButton } from "@mui/material";
import { GitHub, Telegram, WhatsApp } from "@mui/icons-material";
const SocialMedia = () => {
  return (
    <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
      <IconButton aria-label="Github">
        <a
          href="https://github.com/Mahdiyarsne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "gray" }} />
        </a>
      </IconButton>
      <IconButton aria-label="telegram">
        <a href="" target="_blank" rel="noopener noreferrer">
          <Telegram sx={{ color: "gray" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Whatsapp">
        <a href="" target="_blank" rel="noopener noreferrer">
          <WhatsApp sx={{ color: "gray" }} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMedia;
