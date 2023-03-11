import { useState } from "react";
import { Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alpahbetPersian";
import SocialMedia from "../SocialMedia";
import ThemeActionButton from "../ThemeActionButton";
import avatar from "../../assets/avatar.jpg";
import { CustomAvatar } from "../common";
const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={avatar} size={180} fallback="MS" />

      <Typography variant="h6" color="#F93c92">
        <Typography variant="caption" color="tomato">
          {"  {{ "}
        </Typography>

        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="مهدی یار ثنایی "
          onComplete={() => setStart(true)}
        />

        <Typography variant="caption" color="tomato">
          {"  }}"}
        </Typography>
      </Typography>

      {start && (
        <Typography variant="caption" color="gray">
          <Typography variant="caption" color="tomato">
            [[{" "}
          </Typography>
          <RandomReveal
            isPlaying
            characterSet={alphabetPersian}
            duration={4}
            characters="طراح فرانت اند"
          />
          <Typography variant="caption" color="tomato">
            {" "}
            ]]
          </Typography>
        </Typography>
      )}
      <SocialMedia />
    </>
  );
};

export default SidebarHeader;
