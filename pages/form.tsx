import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

import { ButtonForm, Container, Formulario, TextForm } from "../styles/Form";

const valorInicial = {
  titulo: "",
  descricao: "",
  autor: "",
  texto: "",
};

const Form: React.FC = () => {
  const [valor, setValor] = useState(valorInicial);

  function handleChange(event) {
    const { name, value } = event.target;

    setValor({ ...valor, [name]: value });
  }

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://crud-api2021.herokuapp.com/posts", valor)
      .then((resp) => {
        router.push("/");
      })
      .catch(() => {
        console.log("deu errado");
      });
  }

  /*const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");*/

  /*const addPost = {
    titulo,
    descricao,
    autor,
    texto,
  };
  console.log({ addPost });
  /*function onSubmit(e) {
    e.preventDefault();

    axios
      .post("https://crud-api2021.herokuapp.com/posts", addPost)
      .then((resp) => {
        router.push("/");
      })
      .catch(() => {
        console.log("deu errado");
      });
  }*/

  return (
    <Container>
      <Formulario>
        <Link href="/">Pagina principal</Link>
        <div>
          <label>Titulo</label>
          <input
            required
            id="titulo"
            name="titulo"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descrição</label>
          <input
            required
            id="descricao"
            name="descricao"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Autor</label>
          <input
            required
            id="autor"
            name="autor"
            type="text"
            onChange={handleChange}
          />
        </div>
        <label>Publicação</label>
        <TextForm required id="texto" name="texto" onChange={handleChange} />
      </Formulario>
      <ButtonForm onClick={handleSubmit}>Publique</ButtonForm>
    </Container>
  );
};

export default Form;

