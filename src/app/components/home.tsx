import React from "react";

const Home = () => {
  return (
    <section id="home" className="pt-20">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center  ">
        <div
          className="text-center mb-8 lg:mb-0 mr-28 lg:order-2"
          data-aos="zoom-in-left"
        >
          <svg
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            className="w-72 mx-auto"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            </mask>
            <g mask="url(#mask0)">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              <image x="5" y="0" href="/me.png" className="w-[170px]" />
            </g>
          </svg>
        </div>

        <div className="text-center lg:text-justify ml-14">
          <h3 className="flex items-center justify-center lg:justify-start text-2xl font-medium text-gray-700 mb-4 mt-14" data-aos="zoom-in-right">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-yellow-400 w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1zm7.01-2.68l-4.6 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.07c.49-.49.49-1.28 0-1.77a1.25 1.25 0 00-1.77 0l-4.42 4.42-.71-.71 6.54-6.54c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-5.83 5.83-.71-.71 6.89-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89-.69-.7 5.48-5.48c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4.003 4.003 0 01-.33 5.28l-.71-.71a3 3 0 000-4.24l-.35-.35 4.07-4.07c.49-.49.49-1.28 0-1.77a1.27 1.27 0 00-1.78.01z"></path>
            </svg>
            Hello I'am
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mb-2" data-aos="zoom-in-right">
            Muhammad Ibrahim
          </h1>
          <h3 className="text-2xl font-medium text-gray-700 mb-4"></h3>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6 lg:mx-0" data-aos="zoom-in">
            I am a <b>Front-End developer</b> with a strong foundation in building responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and modern frontend frameworks like React, with experience in Tailwind CSS for styling.
          </p>
          <a
            href="https://github.com/Ibrahimnazee"
            rel="noreferrer"
            className="flex items-center justify-center lg:justify-start bg-blue-600 text-white  py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 w-44 transition-colors"
            target="_blank"
            data-aos="flip-left"
          >
            Github Account
            <svg
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="ml-2 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
