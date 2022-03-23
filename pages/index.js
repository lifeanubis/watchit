import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
const API_KEY = process.env.API_KEY;

import styles from "../styles/Home.module.css";
import requests from "../utils/requests";

const Results = dynamic(() => import("../components/Results"), { ssr: false });

export default function Home({ results }) {
  return (
    <div className="overflow-x-hidden ">
      <Header />
      <Nav />
      <div>
        <Results result={results} />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  try {
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
  } catch (error) {
    return {
      props: {
        results: error.json(),
      },
    };
  }
}
