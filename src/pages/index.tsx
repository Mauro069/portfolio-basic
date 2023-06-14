import DarkModeToggle from "@/components/DarkModeToggle";
import Image from "next/image";
import Head from "next/head";
import va from "@vercel/analytics";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauro Vera</title>
      </Head>

      <main className={styles.container}>
        <DarkModeToggle />
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
        <div className={styles.buttons}>
          <a className={styles.contact} href="mailto:maurovera069@gmail.com">
            Contact
          </a>
          <a
            className={styles.agend}
            href="https://calendly.com/maurovera/30min"
          >
            Calendly
          </a>
        </div>

        <div className={styles.icons}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/maurovera/"
            target="_blank"
            onClick={() => va.track("linkedin")}
          >
            <Image
              src="/assets/linkedin.svg"
              height={25}
              width={25}
              alt="linkedin"
            />
          </a>

          <a
            className={styles.link}
            href="https://github.com/Mauro069"
            target="_blank"
            onClick={() => va.track("github")}
          >
            <Image
              src="/assets/github.svg"
              height={25}
              width={25}
              alt="github"
            />
          </a>

          <a
            className={styles.link}
            href="https://www.youtube.com/channel/UCUORUOKKg8Ezj4tBJb_cRUQ"
            target="_blank"
            onClick={() => va.track("youtube")}
          >
            <Image
              src="/assets/youtube.svg"
              height={25}
              width={35}
              alt="youtube"
            />
          </a>
        </div>
      </main>
    </>
  );
}
