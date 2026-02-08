import * as React from "react";
import { SkillsCardContainer } from "./card.style";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { hoverLift, staggerFadeUp } from "@/utils/motion";
export default function SkillsCard({
  id,
  skill,
}: {
  id: number;
  skill: string;
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
      <SkillsCardContainer>
        <Typography variant="body2" sx={{ fontWeight: 800, color: "primary.main" }}>
          {skill}
        </Typography>
      </SkillsCardContainer>
    </motion.div>
  );
}
