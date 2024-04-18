"use client";
import React from "react";
import { CardsContainer, Subtitle, Title } from "../portfolio.style";
import { certifData } from "@/_assets/variables/certifData";
import { CertifCard, CertifCardPrincipal } from "@/components/card/cardCertif";
import SkillsCard from "@/components/card/cardSkills";
import { skillsData } from "@/_assets/variables/skillsData";
import { useTranslation } from "../../i18n/client";

export default function Skills({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "skills");

  return (
    <div>
      <Title>{t("skills_and_certificates")}</Title>
      <Subtitle>{t("what_skills_i_have")}</Subtitle>
      <CardsContainer>
        {skillsData.map((item) => (
          <SkillsCard key={item.id} id={item.id} skill={item.skill} />
        ))}
      </CardsContainer>
      <CardsContainer>
        {certifData.map(
          (item) =>
            item.principal === true && (
              <CertifCardPrincipal key={item.id} id={item.id} img={item.img} />
            )
        )}
      </CardsContainer>
      <CardsContainer>
        {certifData.map(
          (item) =>
            item.principal === false && (
              <CertifCard key={item.id} id={item.id} img={item.img} />
            )
        )}
      </CardsContainer>
    </div>
  );
}
