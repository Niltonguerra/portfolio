import React from "react";
import Card from "../../molecules/Card/Card";
import { TestContext } from "node:test";

const SectionExperiencias: React.FC = () => {
  const exemploCard = {
  titulo: "Projeto Portfólio",
  descricao: "Um site moderno para apresentar meus projetos e habilidades como desenvolvedor.",
  diferencial_do_post: [
    { vetor: '⭐', texto: "Layout responsivo e moderno" },
    { vetor: '👑', texto: "Carregamento rápido e otimizado" },
    { vetor: '🌞', texto: "Compatível com leitores de tela" },
  ],
  tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
  image: "/images/teste.jpg", // coloque o caminho da imagem na pasta public
};


  return (
    <section className="px-4 py-8">
    <Card
        titulo={exemploCard.titulo}
        descricao={exemploCard.descricao}
        diferencial_do_post={exemploCard.diferencial_do_post}
        tags={exemploCard.tags}
        image={exemploCard.image}
      /> 
    </section>
  );
};

export default SectionExperiencias;