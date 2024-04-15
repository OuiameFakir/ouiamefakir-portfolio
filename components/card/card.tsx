import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PrimaryButton } from "../button";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { CardContainer, CardFooter } from "./card.style";
import theme from "@/utils/theme";

export default function ProjectCard({
  id,
  projectName,
  projectDescription,
  img,
  code,
  site,
}: {
  id: number;
  projectName: string;
  projectDescription: string;
  img: StaticImageData;
  code: string;
  site: string;
}) {
  return (
    <CardContainer key={id}>
      <CardMedia
        component="img"
        image={img.src}
        sx={{
          width: "60%",
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {projectDescription}
          </Typography>
        </CardContent>
        <CardFooter>
          <PrimaryButton
            title={"Source Code"}
            handleClick={() => {
              window.location.href = code;
            }}
          />
          <PrimaryButton
            title={"Web Site Hosted"}
            handleClick={() => {
              window.location.href = site;
            }}
          />
        </CardFooter>
      </Box>
    </CardContainer>
  );
}
