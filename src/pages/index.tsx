import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauro Vera</title>
      </Head>
      <main className={styles.container}>
        <Image src="/assets/cover.png" alt="cover" width={125} height={125} />
        <span>
          Hi! I&apos;m Mauro, <br /> <b>Fullstack developer</b> <br /> with{" "}
          <b>React</b> and <b>Node</b>
        </span>
        <p>
          I&apos;m 20 years old and I&apos;m from Rosario, Argentina. Over the
          last 2 years, I have <br /> worked on various projects using mainly
          the MERN stack. One of the things I <br /> enjoy most about my work is
          paying close attention to details. I like to focus on <br /> design
          and user experience, and I make sure that my projects are not only{" "}
          <br /> functional but also beautiful and enjoyable to use. I am always
          up to date with <br /> the latest trends in technology and design.
        </p>
        <a href="mailto:maurovera069@gmail.com">Contact</a>

        <div className={styles.icons}>
          <Image
            src="/assets/linkedin.svg"
            height={25}
            width={25}
            alt="linkedin"
          />
          <Image src="/assets/github.svg" height={25} width={25} alt="github" />
          <Image
            src="/assets/youtube.svg"
            height={25}
            width={35}
            alt="youtube"
          />
        </div>
      </main>
    </>
  );
}
