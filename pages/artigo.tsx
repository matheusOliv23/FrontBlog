import { ArtigoStyle, Codes } from "../styles/Cards";
import GlobalStyle from "../styles/globals";

export default function Artigo() {
  return (
    <ArtigoStyle>
      <h1>Sobre o projeto e sua finalidade</h1>
      <p>
        Tanto o Javascript, o Typescript, ou qualquer outra linguagem de
        programação que vc utilize, exige de você <strong>MUITA PRÁTICA</strong>
        ! A prática só é obtida quando vc toma iniciativa de começar a codar e a
        apanhar bastante errando e tentando de novo. Não se preocupe, a
        frustação faz parte mas depois que você resolve o problema a sensação é
        incrível!
      </p>
      <p>
        A finalidade desse projeto foi treinar e praticar os conceitos básicos
        de React, que serão explicados durante o artigo.
      </p>
      <p>Agora chega de enrolar e vamos ao projeto!</p>
      <p>
        Utilizarei o NextJS, um framework muito bom do React. Não é difícil de
        utilizar e facilita muito em projetos que você precisa lidar com rotas.
        Mas fique tranquilo! Vai precisar dos seus conhecimentos de React, ele
        não fará tudo sozinho.
      </p>
      <p>
        Esse projeto foi feito tanto em JS quanto em TS (vou utilizar essas
        siglas para me referir a Javascript e Typescript, respectivamente). Vou
        disponibilizar o repositório das duas versões.
      </p>
      <p>
        A estilização foi feita com uma biblioteca muito famosa e útil chamada{" "}
        <strong>Styled Components</strong>. Mas fique a vontade para utilizar
        outras opções que tem no mercado.
      </p>
      <p>
        Utilizei o Nest, um framework de criação de API's do Node, para criar o
        pequeno back-end da aplicação. Ele será a primeira coisa que explicarei.
      </p>
      <h2>Precisei criar uma API! E agora??</h2>
      <p>
        Escolhi utilizar o MongoDB como banco de dados para minha API. Como o
        artigo ficará um pouco grande, não darei detalhes mas o processo é bem
        simples e, ao entrar pela primeira vez, o próprio site já te fornecerá o
        passo a passo pra criação do seu banco de dados e receberá uma senha.
        Guarde essa senha.
      </p>
      <p>
        Vamos começar instalando o Nest na nossa máquina e abrir o nosso
        projeto.
      </p>
      <p>
        Como eu estudo mais o front-end, confesso que achei que não precisaria
        criar uma API tão cedo no meu processo de aprendizado. A experiência foi
        um tanto quanto desesperadora mas no final tudo correu bem
      </p>
      <p>
        Para instalar o Nest no seu projeto, segundo a própria documentação do
        Nest
      </p>
      <p>IMAGEM AQUI</p>
      <p>
        {" "}
        Assim que abrir o projeto, pode excluir os arquivos:
        "app.controller.spec.ts", "app.controller.ts" e "app.service.ts".
      </p>
      <h3>API Rest CRUD</h3>
      <p>
        Para o nosso back-end, precisamos de um sistema que nos forneça uma
        opção para obter os dados, criar novos dados, deletar e editar(se
        necessário). Para isso, utilizaremos uma <strong>API Rest</strong>, que
        nada mais é do que um modelo de API que segue os padrões definidos de
        uma arquitetura Rest. O Rest é um conjunto de princípios de arquitetura
        de software.
      </p>
      <p>
        Um desses princípios permite a transferência independente de dados pelas
        APIs e navegadores. O caminho mais conhecido é o HTTP(HypeText Transfer
        Protocol), que permite operações de criação, atualização, pesquisa,
        execução e remoção de dados.{" "}
      </p>
      <h3>Mão na massa!</h3>
      <p>
        Para facilitar a nossa vida, o Nest possui um modelo CRUD pré
        configurado para que possamos apenas configurar o banco de dados e os
        tipos de dados que queremos.
      </p>
      <p>
        No terminal dentro da pasta do seu projeto, digite o comando{" "}
        <strong>nest g resource</strong>. Logo em seguida ele perguntará o nome
        da sua pasta resourse. Como meu projeto é unicamente posts, foi o nome
        que eu dei. Em seguida, mostrará alguns tipos de API que você poderá
        criar. Escolha Rest API. Na próxima pergunta você pode marcar 'yes', ele
        vai criar 'entry points', que são basicamente as variáveis já criadas
        com o nome que escolhemos para o resource. Adianta muito também. Agora
        ele vai começar a instalar.
      </p>
      <h3>Passo a passo da configuração</h3>
      <p>
        Na pasta <strong>dto</strong>, no arquivo 'create-post-dto.ts'(no meu
        caso é post pois escolhi na instalação, lembra?). Nesse arquivo você irá
        colocar todas as variáveis que seu projeto vai ter e tipa-las de acordo
        com o que você precisa. No meu caso, eu deixei assim:
      </p>
      <p>
        <script src="https://gist.github.com/matheusOliv23/57b124f26079e392a828dee5b35087af.js"></script>
      </p>
      <p>
        Pra continuar, instalaremos as dependências do Mongo ao nosso projeto:{" "}
        <strong>yarn add @nest/mongoose mongoose</strong>
      </p>
      <p>
        Um detalhe importante nessa etapa: eu precisei utilizar o sistema Linux
        para instalar o mongo pois há algum problema de compatibilidade com o
        windows. Caso você não tenha o Linux, pode ser que precise utilizar
        algum software de máquina virtual nessa etapa.
      </p>
    </ArtigoStyle>
  );
}
