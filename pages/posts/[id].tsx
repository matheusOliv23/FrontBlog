import { useRouter } from "next/router";

export interface Iid {
  id: string;
}

export default function Artigo({ artigo }) {
  const router = useRouter();
  console.log(artigo);
  return (
    <div>
      <main>
        <div>
          <h2>Post:</h2>
          <h2>titul</h2>
        </div>
        <div>texto</div>
      </main>
    </div>
  );
}
export async function getStaticPaths() {
  const request = await fetch("https://crud-api2021.herokuapp.com/posts");
  const artigo = await request.json();
  const paths = artigo.map((item) => ({
    params: {
      _id: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const artigo = await fetch(`http://localhost:5000/posts/${params._id}`)
    .then((resposta) => resposta.json())
    .then((respostaObjeto) => respostaObjeto)
    .catch(() => console.log("deu errado"));
  return {
    props: {
      artigo,
    },
  };
}
