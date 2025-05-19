import React from "react";
import { CardProps } from "../../../types/Card";
import Image from "next/image";
import Link from "next/link";

const Card: React.FC<CardProps> = ({
  titulo,
  descricao,
  diferencial_do_post,
  tags,
  image,
}) => {
  return (
    <article className="z-50 flex flex-row items-stretch h-auto transition-all cursor-pointer rounded-xl hover:bg-secondary hover:shadow-lg">
      <Image src={image} 
      alt={titulo} 
      width={200} 
      height={200} 
      className="self-start object-cover h-full mr-4 aspect-video" />
      <div className="h-full">
        <h3 className="mb-1 text-2xl font-semibold font-Montserrat text-text">{titulo}</h3>
        <p className="my-1 text-base font-medium font-Inter text-text">{descricao}</p>
        <ul className="flex flex-wrap gap-2 my-1">
          {diferencial_do_post.map((dif, idx) => (
            <li key={idx}>
              <span>{dif.vetor}</span>
              <Link href="/" >
                <span className="text-sm font-bold font-Inter text-text hover:text-secondary">
                  {dif.texto}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2 my-2">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="bg-[rgba(16,185,129,0.3)] text-secondary pr-2 pl-2 py-1 rounded-2xl text-xs font-bold font-Inter"
            >
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Card;