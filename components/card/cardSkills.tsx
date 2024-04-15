import * as React from "react";
import { SkillsCardContainer } from "./card.style";
import { Typography } from "@mui/material";

export default function SkillsCard({
  id,
  skill,
}: {
  id: number;
  skill: string;
}) {
  return (
    <SkillsCardContainer key={id}>
      <Typography variant="body2" className="fw-bold text-warning">
        {skill}
      </Typography>
    </SkillsCardContainer>
  );
}
