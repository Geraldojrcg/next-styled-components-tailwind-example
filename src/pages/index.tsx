import Head from "next/head";
import Login from "../components/Login";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Example Login Page</title>
      </Head>
      <Login></Login>
    </div>
  );
};

export default Home;
