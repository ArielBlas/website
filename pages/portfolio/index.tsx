import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Portfolio } from "@components/templates";
import { getSortedPostsData, PostData } from "../../src/lib/posts";
import Logo from "../../public/logo.png";
import { Twitter, Linkedin, Fiverr, Github } from "../../src/assets/images";

export async function getStaticProps({ locale }: { locale: any }) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: PostData[];
};

const PortfolioPage: NextPage<Props> = (props) => {
  const { t } = useTranslation("home");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const router = useRouter();
  const { allPostsData } = props;
  const d = new Date();
  const currentYear = d.getFullYear();

  const [select, setSelect] = useState({
    name: router.locale?.toLocaleUpperCase(),
  });

  useEffect(() => {
    const locale = select?.name?.toLowerCase();
    if (locale && locale !== router.locale) {
      router.push(router.pathname, router.asPath, {
        locale,
      });
    }
  }, [select, router]);

  const goToWebsite = (url: string) => {
    window.open(url, "_ blank");
  };

  return (
    <Portfolio
      header={{
        brand: { src: Logo, width: "60px", height: "60px" },
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
            onClick: () =>
              goToWebsite(
                "https://go.fiverr.com/visit/?bta=1079249&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Farielblas%252Fdo-web-designing-and-development"
              ),
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
};

export default PortfolioPage;
