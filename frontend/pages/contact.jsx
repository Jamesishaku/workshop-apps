import Head from "next/head";
import ContactHeader from "../components/contact-header";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
          <ContactHeader />
      </section>
    </div>
  );
}
