import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PrimaryButton } from "../button";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { CardContainer, CardFooter } from "./card.style";
import theme from "@/utils/theme";
import { useTranslation } from "@/src/app/i18n/client";

export default function ProjectCard({
  lng,
  id,
  projectName,
  projectDescription,
  img,
  code,
  site,
}: {
  lng: string;
  id: number;
  projectName: string;
  projectDescription: string;
  img: StaticImageData;
  code: string;
  site: string;
}) {
  const { t } = useTranslation(lng, "projects");
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
            title={t("code_url")}
            handleClick={() => {
              window.location.href = code;
            }}
          />
          <PrimaryButton
            title={t("site_url")}
            handleClick={() => {
              window.location.href = site;
            }}
          />
        </CardFooter>
      </Box>
    </CardContainer>
  );
}
