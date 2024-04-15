"use client";
import React from "react";
import { CardsContainer, Subtitle, Title } from "../portfolio.style";
import { certifData } from "@/_assets/variables/certifData";
import CertifCard from "@/components/card/cardCertif";
import SkillsCard from "@/components/card/cardSkills";
import { skillsData } from "@/_assets/variables/skillsData";

export default function Skills() {
  return (
    <div>
      <Title>Skills and Certificats</Title>
      <Subtitle>What Skills I Have</Subtitle>
      <CardsContainer>
        {skillsData.map((item) => (
          <SkillsCard id={item.id} skill={item.skill} />
        ))}
      </CardsContainer>
      <CardsContainer>
        {certifData.map((item) => (
          <CertifCard id={item.id} img={item.img} />
        ))}
      </CardsContainer>
    </div>
  );
}
