import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { StaticImageData } from "next/image";
import {
  CertifCardContainer,
  CertifCardImgContainer,
  CertifCardPrincipalImgContainer,
} from "./card.style";
import { motion } from "framer-motion";

export function CertifCardPrincipal({
  id,
  img,
}: {
  id: number;
  img: StaticImageData;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const certifAnimation = {
    initial: {
      opacity: 0,
    },
    animate: (id: number) => ({
      opacity: 1,
      transition: {
        delay: 0.05 * id,
      },
    }),
  };
  return (
    <motion.div
      key={id}
      ref={ref}
      variants={certifAnimation}
      initial="initial"
      whileInView="animate"
      custom={id}
    >
      <CertifCardContainer key={id}>
        <CertifCardPrincipalImgContainer>
          <CardMedia
            component="img"
            image={img.src}
            sx={{ height: "100%", width: "100%" }}
          />
        </CertifCardPrincipalImgContainer>
      </CertifCardContainer>
    </motion.div>
  );
}
export function CertifCard({ id, img }: { id: number; img: StaticImageData }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const certifAnimation = {
    initial: {
      opacity: 0,
    },
    animate: (id: number) => ({
      opacity: 1,
      transition: {
        delay: 0.05 * id,
      },
    }),
  };
  return (
    <motion.div
      key={id}
      ref={ref}
      variants={certifAnimation}
      initial="initial"
      whileInView="animate"
      custom={id}
    >
      <CertifCardContainer key={id}>
        <CertifCardImgContainer>
          <CardMedia
            component="img"
            image={img.src}
            sx={{ height: "100%", width: "100%" }}
          />
        </CertifCardImgContainer>
      </CertifCardContainer>
    </motion.div>
  );
}
