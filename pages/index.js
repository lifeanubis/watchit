import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
const API_KEY = process.env.API_KEY;

import Results from "../components/Results";
import styles from "../styles/Home.module.css";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Header />
      <Nav />
      <Results result={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
