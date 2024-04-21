import * as React from "react";
import { SkillsCardContainer } from "./card.style";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
export default function SkillsCard({
  id,
  skill,
}: {
  id: number;
  skill: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const skillsAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (id: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * id,
      },
    }),
  };
  return (
    <motion.div
      key={id}
      ref={ref}
      variants={skillsAnimation}
      initial="initial"
      whileInView="animate"
      custom={id}
    >
      <SkillsCardContainer>
        <Typography variant="body2" className="fw-bold text-warning">
          {skill}
        </Typography>
      </SkillsCardContainer>
    </motion.div>
  );
}
