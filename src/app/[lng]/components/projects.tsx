"use client";
import React from "react";
import { CardsContainer, Subtitle, Title } from "../portfolio.style";
import ProjectCard from "@/components/card/card";
import { Data } from "@/_assets/variables/projectsData";
import { useTranslation } from "../../i18n/client";

export default function Projects({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "projects");
  const projectData = Data({ params: { lng } });
  return (
    <div>
      <Title>{t("my_projects")}</Title>
      <Subtitle>{t("my_recent_work")}</Subtitle>
      <CardsContainer>
        {projectData.map((item) => (
          <ProjectCard
            lng={lng}
            key={item.id}
            id={item.id}
            projectName={item.title}
            projectDescription={item.desc}
            img={item.img}
            code={item.code_url}
            site={item.site_url}
          />
        ))}
      </CardsContainer>
    </div>
  );
}
