"use client";
import React from "react";
import { CardsContainer, Subtitle, Title } from "../portfolio.style";
import ProjectCard from "@/components/card/card";
import { Data } from "@/_assets/variables/projectsData";
export default function Projects({ lng }: { lng: string }) {
  const projectData = Data({ params: { lng } });
  return (
    <div>
      <Title>My Projects</Title>
      <Subtitle>My Recent Work</Subtitle>
      <CardsContainer>
        {projectData.map((item) => (
          <ProjectCard
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
