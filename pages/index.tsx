import type { NextPage, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Home } from "@components/templates";
// import useTheme from "../src/hooks/useTheme";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { getSortedPostsData, PostData } from "../src/lib/posts";
import Logo from "../public/logo.png";
import {
  Web,
  ReactIcon,
  Node,
  MongoDB,
  Express,
  NextJs,
  AWS,
  Docker,
  SocketIO,
  Tailwind,
  Bootstrap,
  TypeScript,
  Sass,
  Jest,
  Redux,
  PostgreSql,
  JWT,
  Graphql,
  Twitter,
  Linkedin,
  Fiverr,
  Github,
} from "../src/assets/images";

export async function getStaticProps({ locale }: { locale: any }) {
  const allPostsData = getSortedPostsData(3);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
      allPostsData,
    },
  };
}

// export const getStaticProps: GetStaticProps<Props> = async ({}) => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

type Contact = {
  name: string;
  email: string;
  message: string;
  disabled: boolean;
};

type Props = {
  allPostsData: PostData[];
};

const HomePage: NextPage<Props> = (props) => {
  const { t } = useTranslation("home");
  const { theme, setTheme, resolvedTheme } = useTheme();
  // const { handleTheme, theme } = useTheme();
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const { allPostsData } = props;
  const d = new Date();
  const currentYear = d.getFullYear();

  const [select, setSelect] = useState({
    name: router.locale?.toLocaleUpperCase(),
  });

  const [form, setForm] = useState<Contact>({
    name: "",
    email: "",
    message: "",
    disabled: false,
  });

  useEffect(() => {
    const locale = select?.name?.toLowerCase();
    if (locale && locale !== router.locale) {
      router.push(router.pathname, router.asPath, {
        locale,
      });
    }
  }, [select, router]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (form.name && form.email && form.message) {
      setForm({ ...form, disabled: true });
      axios({
        method: "post",
        url: "/api/send-email",
        data: form,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
        .then(() =>
          setForm({
            name: "",
            email: "",
            message: "",
            disabled: false,
          })
        )
        .catch((error) => {
          console.log(error);
          setForm({
            ...form,
            disabled: false,
          });
        });
    }
  };

  const goToPortfolio = () => {
    router.push("/portfolio");
  };

  const goToWebsite = (url: string) => {
    window.open(url, "_ blank");
  };

  const scrollToContact = () => {
    const section = document.querySelector("#contact-me");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Home
      header={{
        brand: {
          src: Logo,
          width: "60px",
          height: "60px",
        },
        items: [
          {
            id: 1,
            name: t("home"),
            href: "/",
            locale: router.locale,
            active: router.pathname === "/",
          },
          {
            id: 2,
            name: t("portfolio"),
            href: "/portfolio",
            locale: router.locale,
            active: router.pathname === "/portfolio",
          },
        ],
        button: {
          children: "Contact",
          onClick: () =>
            resolvedTheme === "dark" ? setTheme("ligth") : setTheme("dark"),
          icon: theme && (resolvedTheme === "dark" ? "sun" : "moon"),
        },
        options: [
          {
            id: 1,
            name: "EN",
          },
          {
            id: 2,
            name: "ES",
          },
        ],
        setSelect,
        select,
      }}
      heroSection={{
        title: t("title"),
        description: t("description"),
        button: {
          children: t("contact_me"),
          onClick: scrollToContact,
        },
        image: { src: Web, width: "500px", height: "400px" },
        slider: [
          { src: ReactIcon, width: "100px", height: "100px" },
          { src: NextJs, width: "100px", height: "100px" },
          { src: Node, width: "100px", height: "100px" },
          { src: Express, width: "100px", height: "100px" },

          { src: MongoDB, width: "100px", height: "100px" },
          { src: AWS, width: "100px", height: "100px" },
          { src: SocketIO, width: "100px", height: "100px" },
          { src: TypeScript, width: "100px", height: "100px" },
          { src: Docker, width: "100px", height: "100px" },

          { src: Sass, width: "100px", height: "100px" },
          { src: Tailwind, width: "100px", height: "100px" },
          { src: Bootstrap, width: "100px", height: "100px" },

          { src: PostgreSql, width: "100px", height: "100px" },
          { src: JWT, width: "100px", height: "100px" },

          { src: Jest, width: "100px", height: "100px" },
          { src: Redux, width: "100px", height: "100px" },
          { src: Graphql, width: "100px", height: "100px" },
        ],
      }}
      infoSection={{
        title: t("about_me"),
        description: t("profile"),
        button: {
          children: t("download_cv"),
        },
        pdf: t("cv"),
      }}
      featureSection={{
        title: t("portfolio"),
        items: [
          ...allPostsData.map((p, idx) => ({
            title: t(p.title),
            description: t(p.description),
            image: {
              src: `/portfolio/${p.image}`,
              alt: p.title,
              width: 1000,
              height: 500,
            },
            position: idx % 2 ? "right" : "left",
            technologies: p.technologies,
            button: {
              children: t("view_demo"),
              onClick: () => goToWebsite(p.website),
            },
            link: {
              children: t("view_repo"),
              href: p.repo,
              target: "_blank",
            },
          })),
        ],
        button: {
          children: t("see_more"),
          onClick: goToPortfolio,
        },
      }}
      contactSection={{
        title: t("contact"),
        formGroup: {
          items: [
            {
              label: t("name"),
              name: "name",
              type: "text",
              onChange: handleInput,
              value: form.name,
            },
            {
              label: t("email"),
              name: "email",
              type: "email",
              onChange: handleInput,
              value: form.email,
            },
            {
              label: t("message"),
              name: "message",
              type: "textarea",
              onChange: handleInput,
              value: form.message,
            },
          ],
          buttons: [
            { children: t("submit"), type: "submit", disabled: form.disabled },
          ],
          onSubmit: handleSubmit,
        },
      }}
      footer={{
        medias: [
          {
            src: Twitter,
            width: "40px",
            height: "40px",
            onClick: () => goToWebsite("https://twitter.com/arielconblas"),
          },
          {
            src: Linkedin,
            width: "40px",
            height: "40px",
            onClick: () => goToWebsite("https://www.linkedin.com/in/arielblas"),
          },
          {
            src: Fiverr,
            width: "32px",
            height: "32px",
            onClick: () => goToWebsite("https://fiverr.com/arielblas"),
          },
          {
            src: Github,
            width: "40px",
            height: "40px",
            onClick: () => goToWebsite("https://github.com/ArielBlas"),
          },
        ],
        text: `${t("footer_start")} ${currentYear} ${t("footer_end")}`,
      }}
    />
  );

  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Create Next App</title>
  //       <meta name="description" content="Generated by create next app" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org">Next.js!</a>
  //       </h1>
  //       <p className={styles.description}>
  //         Get started by editing{" "}
  //         <code className={styles.code}>pages/index.tsx</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h2>Documentation &rarr;</h2>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>

  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h2>Learn &rarr;</h2>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>

  //         <a
  //           href="https://github.com/vercel/next.js/tree/canary/examples"
  //           className={styles.card}
  //         >
  //           <h2>Examples &rarr;</h2>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>

  //         <a
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           className={styles.card}
  //         >
  //           <h2>Deploy &rarr;</h2>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{" "}
  //         <span className={styles.logo}>
  //           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //         </span>
  //       </a>
  //     </footer>
  //   </div>
  // );
};

export default HomePage;
