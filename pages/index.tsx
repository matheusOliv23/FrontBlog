import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Posts from "../components/Post";
import axios from "axios";

const Home: React.FC = () => {
  // const { data } = useFetch<Post[]>("https://crud-api2021.herokuapp.com/posts");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://crud-api2021.herokuapp.com/posts?_order=desc&_sort=_id")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("deu errado");
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      {posts.map((post) => (
        <li key={post}>
          <Posts post={post} setPosts={setPosts} posts={posts} />
        </li>
      ))}
    </div>
  );
};

export default Home;
