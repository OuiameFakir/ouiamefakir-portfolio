import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { StaticImageData } from "next/image";
import {
  CertifCardContainer,
  CertifCardImgContainer,
  CertifCardPrincipalImgContainer,
} from "./card.style";

export function CertifCardPrincipal({
  id,
  img,
}: {
  id: number;
  img: StaticImageData;
}) {
  return (
    <CertifCardContainer key={id}>
      <CertifCardPrincipalImgContainer>
        <CardMedia
          component="img"
          image={img.src}
          sx={{ height: "100%", width: "100%" }}
        />
      </CertifCardPrincipalImgContainer>
    </CertifCardContainer>
  );
}
export function CertifCard({ id, img }: { id: number; img: StaticImageData }) {
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
