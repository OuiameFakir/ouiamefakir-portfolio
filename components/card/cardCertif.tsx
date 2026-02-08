import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { StaticImageData } from "next/image";
import {
  CertifCardContainer,
  CertifCardImgContainer,
  CertifCardPrincipalImgContainer,
} from "./card.style";
import { motion } from "framer-motion";
import { hoverLift, staggerFadeUp } from "@/utils/motion";

export function CertifCardPrincipal({
  id,
  img,
}: {
  id: number;
  img: StaticImageData;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <motion.div
      key={id}
      ref={ref}
      variants={staggerFadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      custom={id}
      whileHover={hoverLift}
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
  return (
    <motion.div
      key={id}
      ref={ref}
      variants={staggerFadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      custom={id}
      whileHover={hoverLift}
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
