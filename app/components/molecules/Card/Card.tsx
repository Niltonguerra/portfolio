import React from "react";
import { CardProps } from "../../../types/Card";
import Image from "next/image";

const Card: React.FC<CardProps> = ({
  titulo,
  descricao,
  diferencial_do_post,
  tags,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <Image src={image} alt={titulo} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{titulo}</h2>
      <p className="text-gray-700 mb-4">{descricao}</p>
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Diferenciais:</h3>
        <ul className="list-disc list-inside space-y-1">
          {diferencial_do_post.map((dif, idx) => (
            <li key={idx}>
              <span className="font-bold">{dif.vetor}: </span>
              <span>{dif.texto}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;