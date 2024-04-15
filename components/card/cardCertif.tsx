import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { StaticImageData } from "next/image";
import { CertifCardContainer, CertifCardImgContainer } from "./card.style";

export default function CertifCard({
  id,
  img,
}: {
  id: number;
  img: StaticImageData;
}) {
  return (
    <CertifCardContainer key={id}>
      <CertifCardImgContainer>
        <CardMedia
          component="img"
          image={img.src}
          sx={{ height: "100%", width: "100%" }}
        />
      </CertifCardImgContainer>
    </CertifCardContainer>
  );
}
