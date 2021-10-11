import { BtnDel, Card, Container, ImgCard, Texto } from "../styles/Cards";
import { useFetch } from "../components/Hooks/useFetch";
import axios from "axios";
import { useState } from "react";
import Link from "next/dist/client/link";

export interface IPost {
  titulo: string;
  descricao: string;
  autor: string;
  texto: string;
}

const Posts = ({ post: IPost, setPosts, posts }): any => {
  function excluirPost(id) {
    axios.delete(`http://localhost:5000/posts/${IPost._id}`).then(() => {
      setPosts(posts.filter((conteudo) => conteudo._id !== id));
    });
  }
  const conteudo = useFetch("https://crud-api2021.herokuapp.com/posts");

  return (
    <Card>
      <Container>
        <ImgCard></ImgCard>
        <div>
          <Link href={`/posts/${IPost._id}`}>
            <a>{IPost.titulo}</a>
          </Link>
          <Texto>{IPost.descricao}</Texto>
          <Texto>Publicado em 20/09/2021</Texto>
          <Texto>Autor:{IPost.autor}</Texto>
          <Texto>id:{IPost._id}</Texto>
          <div>
            <div>
              <BtnDel onClick={() => excluirPost(IPost._id)}>Deletar</BtnDel>
            </div>
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default Posts;
