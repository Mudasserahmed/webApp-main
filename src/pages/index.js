import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head>
        <title>Neuralnine - Let&#39;s Develop Brains</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <Script src="/sc.js" strategy="lazyOnload"></Script>
      <Navbar />
      <section>
        <div className="flex flex-col justify-center items-center text-white bg-gray-50 min-h-[100vh]">
          <Image
            className="sm:w-[37%] w-full"
            width={1024}
            height={700}
            alt="img"
            src="https://media.discordapp.net/attachments/807562739324157962/1081366667449348247/hero.png"
          ></Image>
          <p id="typing" className="text-black md:text-3xl"></p>
          <span className="p-7 fa fa-angle-double-down fa-3x text-orange-600"></span>
        </div>
      </section>

      <section className="bg-gray-200  text-gray-100">
        <div className="elementor-shape elementor-shape-top" data-negative="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 10"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill "
              d="M350,10L340,0h20L350,10z"
            ></path>
          </svg>{" "}
        </div>
        <h1 className="text-center text-[#FF7825] pt-16 pb-2 text-4xl font-bold">
          ALL POSTS
        </h1>
        <div className="container max-w-6xl p-4 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              rel="noopener noreferrer"
              href="/mathematical-skills-needed-for-machine-learning"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969836054921366/maths.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  MATHEMATICAL SKILLS NEEDED FOR MACHINE LEARNING
                </h2>
                <p className="text-[15px]">
                  Introduction When it comes to computer science and especially
                  to machine learning and data science, you oftentimes hear that
                  mathematical skills are fundamental. But is....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969835740352563/raspberrypi.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  10 AWESOME RASPBERRY PI PROJECT IDEAS
                </h3>
                <p className="text-[15px]">
                  Introduction The Raspberry Pi is an awesome little piece of
                  hardware. It is essentially a minicomputer that costs less
                  than 60$. Some older versions even....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969834863734915/corona.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  ANALYZING CORONAVIRUS WITH PYTHON (COVID-19)
                </h3>
                <p className="text-[15px]">
                  Introduction Chances are, you are in quarantine right now and
                  the reason for that is the coronavirus, also known as
                  COVID-19. Now I am not....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block"
            >
              <Image
                alt="presentation"
                width={434}
                height={434}
                className="object-cover w-full rounded h-100 bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
                src="https://media.discordapp.net/attachments/807562739324157962/1082969834515611738/top2020.png?width=434&height=434"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[17px] font-[700] group-hover:underline group-focus:underline text-[#FF7825]">
                  TOP 5 PROGRAMMING LANGUAGES FOR 2020
                </h3>
                <p className="text-[15px]">
                  Introduction At the moment we can choose out of thousands of
                  programming languages to learn. We have so many different
                  choices that we get into...
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-[506px] bg-gray-200">
      <div className="elementor-shape elementor-shape-top" data-negative="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 10"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill "
              d="M350,10L340,0h20L350,10z"
            ></path>
          </svg>{" "}
        </div>
        <h1 className="text-center text-[#FF7825] pt-40 text-3xl font-bold">
          TRENDING VIDEOS
        </h1>
        <div className="container grid lg:grid-cols-3 justify-items-center gap-10 p-4 mx-auto flex-wrap pt-10">
          <div class="max-w-sm rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.8]">
            <a href="https://www.youtube.com/watch?v=Qkd6effeDVU">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110"
                width={724}
                height={500}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1082245279731941446/ytcard1.png?width=772&height=434"
              ></Image>
            </a>
          </div>

          <div class="max-w-sm rounded-lg shadow bg-black border-gray-700 hover:opacity-[0.8]">
            <a href="https://www.youtube.com/watch?v=Bi1-rsEkoYc">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110"
                width={724}
                height={500}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1082245279287353414/ytcard2.png?width=772&height=434"
              ></Image>
            </a>
          </div>
          <div class="max-w-sm rounded-lg shadow bg-black border-gray-700  hover:opacity-[0.8]">
            <a href="https://www.youtube.com/watch?v=QM5XDc4NQJo">
              <Image
                className="transition duration-300 ease-in-out hover:scale-110"
                width={1000}
                height={500}
                alt="img"
                src="https://media.discordapp.net/attachments/807562739324157962/1082245278989561938/ytcard3.png?width=772&height=434"
              ></Image>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 text-gray-100 pb-20">
      <div className="elementor-shape elementor-shape-top" data-negative="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 10"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill "
              d="M350,10L340,0h20L350,10z"
            ></path>
          </svg>
        </div>
        <h1 className="text-center text-[#FF7825] pt-20 text-4xl font-bold">
          GITHUB PROJECTS
        </h1>
        <div className="container max-w-6xl p-8 mx-auto space-y-6 sm:space-y-12 text-center">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <a
              rel="noopener noreferrer"
              href="https://github.com/NeuralNine/youtube-downloader-converter"
              className="w-full h-72 py-16 mx-auto group hover:no-underline focus:no-underline bg-black transition duration-300 ease-in-out hover:scale-105"
            >
              <h1 className="object-cover w-full rounded h-50">
                <span className="fab fa-youtube fa-3x text-[#FF7825]"></span>
              </h1>
              <div className="p-6 space-y-2">
                <h3 className="text-[#FF7825] text-[20px] font-semibold group-hover:underline group-focus:underline">
                  YouTube Downloader & Converter
                </h3>
                <p className="text-[14px]">
                  A Simple Python Script that is able to download YouTube Videos
                  or Playlists and convert them into MP3 Format.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/NeuralNine/handwritten-digits-recognition"
              className="w-full h-72 py-16 mx-auto group hover:no-underline focus:no-underline bg-black transition duration-300 ease-in-out hover:scale-105"
            >
              <h1 className="object-cover w-full rounded h-50">
                <span className="fa fa-pencil fa-3x text-[#FF7825]"></span>
              </h1>
              <div className="p-6 space-y-2">
                <h3 className="text-[#FF7825] text-[20px] font-semibold group-hover:underline group-focus:underline">
                  Handwritten Digit Recognition
                </h3>
                <p className="text-[14px]">
                  A Script that trains a model to recognize handwritten digits
                  using the MNIST data set. Then it loads external files and
                  uses the neural network to predict what digits they are.
                </p>
              </div>
            </a>

            <a
              rel="noopener noreferrer"
              href="https://github.com/NeuralNine/drawing-classifier"
              className="w-full h-72 py-16 mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block transition duration-300 ease-in-out hover:scale-105"
            >
              <h1 className="object-cover w-full rounded h-50">
                <span className="fa fa-paint-brush fa-3x text-[#FF7825]"></span>
              </h1>
              <div className="p-6 space-y-2">
                <h3 className="text-[#FF7825] text-[20px] font-semibold group-hover:underline group-focus:underline">
                  Drawing Classifier
                </h3>
                <p className="text-[14px]">
                  A Python Application which uses machine learning
                  classification algorithms to classify drawings of the user.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/NeuralNine/stock-visualizer"
              className="w-full h-72 py-16 mx-auto group hover:no-underline focus:no-underline bg-black hidden sm:block transition duration-300 ease-in-out hover:scale-105"
            >
              <h1 className="object-cover w-full rounded h-50">
                <span className="fa fa-chart-line fa-3x text-[#FF7825]"></span>
              </h1>
              <div className="p-6 space-y-2">
                <h3 className="text-[#FF7825] text-[20px] font-semibold group-hover:underline group-focus:underline">
                  Stock Visualizer.
                </h3>
                <p className="text-[14px]">
                  A Python Application that visualizes stock data using
                  professional candlestick charts.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
