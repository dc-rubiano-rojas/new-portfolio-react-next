import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Camilo Rubiano Rojas | Full-Stack Developer & Cloud Engineer",
  description:
    "Full-Stack Developer specializing in JavaScript, Node.js, NestJS, React, and AWS Cloud. I build scalable web and mobile applications with modern technologies and a focus on performance, UX, and clean architecture.",
  keywords: [
    "Daniel Rubiano",
    "Full Stack Developer",
    "JavaScript Developer",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "AWS",
    "Cloud Developer",
    "Web Developer",
    "Mobile App Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Daniel Camilo Rubiano Rojas" }],
  openGraph: {
    title: "Daniel Camilo Rubiano Rojas | Full-Stack Developer & Cloud Engineer",
    description:
      "Portfolio of Daniel Rubiano — Full-Stack Developer with expertise in Node.js, React, and AWS. Explore projects, experience, and contact information.",
    url: "https://my-portfolio-psi-smoky.vercel.app/",
    siteName: "Daniel Rubiano Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Rubiano Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7865295241961522"
          crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
