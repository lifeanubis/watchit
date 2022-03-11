import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
const API_KEY = process.env.API_KEY;

import Results from "../components/Results";
import styles from "../styles/Home.module.css";
import requests from "../utils/requests";

export default function Home(props) {
  return (
    <div className={styles.container}>
      {console.log(props)}
      <Header />
      <Nav />
      <Results />
    </div>
  );
}
// export async function getServerSideProps(context) {
const genre = context.query;
//   // const request = await fetch(
//   //   `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
//   // ).then((res) => res.json());

//   return {
//     props: {
//       results: genre,
//     },
//   };
// }
