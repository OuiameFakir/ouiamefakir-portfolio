"use client";
import React from "react";
import { CardsContainer, Title } from "../portfolio.style";
import ProjectCard from "@/components/card";
import { projectData } from "@/_assets/variables/projectsData";

export default function Projects({ lng }: { lng: string }) {
  return (
    <div>
      <Title>PROJECTS</Title>
      <CardsContainer>
        {projectData.map((item) => (
          <ProjectCard
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
