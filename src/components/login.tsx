import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>

      <center>
        <form>
          <input type="text" name="username" id="user" />
          <input type="password" name="password" id="pass" />
        </form>
      </center>
    </>
  );
}
