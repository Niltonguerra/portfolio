export type Diferencial = {
  vetor: string;
  texto: string;
};

export type CardProps = {
  titulo: string;
  descricao: string;
  diferencial_do_post: Diferencial[];
  tags: string[];
  image: string;
};