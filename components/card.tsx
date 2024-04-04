import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ecomerce from "@/_assets/images/ecommerce.png";
import { PrimaryButton } from "./button";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";

export default function ProjectCard({
  projectName,
  projectDescription,
  img,
  code,
  site,
}: {
  projectName: string;
  projectDescription: string;
  img: StaticImageData;
  code: string;
  site: string;
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{
            width: "60%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "0.5rem",
          }}
          image={img.src}
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
          <CardActions>
            {/* <PrimaryButton title={"Source Code"} />
          <PrimaryButton title={"Web Site Hosted"} /> */}
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}
