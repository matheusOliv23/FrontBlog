import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

import {ButtonForm, Container,  Formulario, TextForm} from '../styles/Form'

export default function Form() {
  
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [autor, setAutor] = useState('')
  const [texto, setTexto] = useState('')

  const router = useRouter()

  const addPost = {
    titulo,
    descricao,
    autor,
    texto
  }
  function onSubmit(e) {
    e.preventDefault()

    axios
      .post('https://crud-api2021.herokuapp.com/posts', addPost)
      .then(resp => {
        router.push('/')
      })
      .catch(() => {
        console.log('deu errado')
      })
  }

  return (
    <Container>
      <Formulario>
           <Link href="/" >
          Pagina principal
        </Link>
        <div >
          <label>Titulo</label>
          <input
            required
            id="titulo"
            name="titulo"
            value={titulo}
            type="text"
            onChange={e => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição</label>
          <input
            required
            id="descricao"
            name="descricao"
            value={descricao}
            type="text"
            onChange={e => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <label>Autor</label>
          <input
            required
            id="autor"
            name="autor"
            value={autor}
            type="text"
            onChange={e => setAutor(e.target.value)}
          />
        </div>
        <label>Publicação</label>
         <TextForm
            required            
            id="texto"
            name="texto"
            value={texto}         
            onChange={e => setTexto(e.target.value)}
        />    
      </Formulario>
        <ButtonForm type="submit" onClick={onSubmit}>
          Publique
        </ButtonForm>
    </Container>
  )
}