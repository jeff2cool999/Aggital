import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-around p-7 ">
        <div className="flex gap-4 items-center ">
          <div className="">
            <svg
              id="logo-85"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="ccustom"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
                fill="#5417D7"
              ></path>
            </svg>
          </div>
          <div className="">ACTIVE CONNECT</div>
        </div>

        <div className="flex gap-10">
          <Link className=" " href="/">
            Home
          </Link>

          <Link className=" " href="/us">
            Us
          </Link>

          <Link className=" " href="/service">
            Service
          </Link>
          <Link className=" " href="/work">
            Work
          </Link>
          <Link className=" " href="/thought">
            Thought
          </Link>
          <Link className=" " href="/contact">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex p-20 ">
        <div className=" flex flex-col gap-6">
          <div className="text-6xl font-bold   ">
            Driving Creative <div className="">improvements....</div>
          </div>
          <div className="">
            We're a team of young,professional and creative. We help
            <h1>
              business fully grasp the fast developing Digital Age through
              creative <p>innovation, intelligent and project delivery.</p>
            </h1>
          </div>

          <button className="py-3 px-3 max-w-sm border rounded-lg bg-orange-500 ">
            START A PROJECT
          </button>
        </div>
        <div className=" ml-52 ">
          <Image src="/user.png" height={400} width={400} alt="" />
        </div>
      </div>
      <div className="p-20 flex justify-around ">
        <div className="">
          <div className="flex flex-col py-6 px-6 border-2 w-80 h-80 ">
            <div className=" pl-28 pb-10   ">
              <svg
                id="logo-37"
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
              </svg>
            </div>
            <h1 className="text-lg ">
              <p className="text-center pb-4 font-bold text-lg">
                Digital Marketing
              </p>
              Allow us carve a fearless position for your business in the
              competitive market, build resilient trust and drive sales.
            </h1>
            <button className="pt-5 font-bold text-sky-500 ">READ MORE</button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col py-6 px-6 border-2 w-80 h-80 ">
            <div className=" pl-28 pb-10   ">
              <svg
                id="logo-37"
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
              </svg>
            </div>
            <h1 className=" ">
              <p className="text-center pb-4 font-bold text-lg">
                Website Design & Development
              </p>
              Our designers are dedicated to smoothening the most intricate part
              of Website Design and actual Development – Functionality
            </h1>
            <button className="pt-5 font-bold text-sky-500 ">READ MORE</button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col py-6 px-6 border-2 w-80 h-80 ">
            <div className=" pl-28 pb-10   ">
              <svg
                id="logo-37"
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
              </svg>
            </div>
            <h1 className="text-lg">
              <p className="text-center pb-4 font-bold text-lg">
                Corporate Branding
              </p>
              Every brand has a story to tell. Let’s help you adapt your story
              to a world of striking-new opportunities.
            </h1>
            <button className="font-bold pt-5 text-sky-500 ">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="p-20 flex justify-around ">
        <div className="">
          <div className="flex flex-col py-6 px-6 border-2 w-80 h-80 ">
            <div className=" pl-28 pb-10   ">
              <svg
                id="logo-37"
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
              </svg>
            </div>
            <h1 className="text-lg ">
              <p className="text-center pb-4 font-bold text-lg">
                Copywriting Service
              </p>
              Scale up value and improve your marketing strategy with
              professional and user engaging copy
            </h1>
            <button className="pt-5 font-bold text-sky-500 ">READ MORE</button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col py-6 px-6 border-2 w-80 h-80 ">
            <div className=" pl-28 pb-10   ">
              <svg
                id="logo-37"
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
              </svg>
            </div>
            <h1 className=" ">
              <p className="text-center pb-4 font-bold text-lg">
                Graphics & Design
              </p>
              We design class and culture - Our team of creatives, designs
              marketing materials that impresses new and existing customers
            </h1>
            <button className="pt-5 font-bold text-sky-500 ">READ MORE</button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col py-6 px-6 border-2 w-80 h-80 ">
            <div className=" pl-28 pb-10   ">
              <svg
                id="logo-37"
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
                <path
                  d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z"
                  className="ccustom"
                  fill="#25CAAC"
                ></path>
              </svg>
            </div>
            <h1 className="text-lg">
              <p className="text-center pb-4 font-bold text-lg">
                Social Media Marketing
              </p>
              Building and retaining loyal followers across social media
              platforms is a great way to maintain brand reputation
            </h1>
            <button className="font-bold pt-5 text-sky-500 ">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="flex p-20">
        <div className="flex flex-col py-6 px-6  w-2/4  h-80  ">
          <h1 className="text-center pb-4 font-bold text-4xl    ">
            Multiple Award Winning Digital Agency (Web Design, SEO etc)
          </h1>
          <p className="pb-5 ">
            Are you looking for a web designer? We are an elite, top-tier,
            Lagos-based web design company that has an experienced and talented
            team of creative experts with a passion to drive creative
            improvements for the furtherance of the digital age.
          </p>

          <p className="pb-5">
            As a Lagos-based web design company, we have consistently worked and
            delivered projects for small, medium, and large-sized businesses
            across many industries here in Lagos, other states in Nigeria, the
            UK, the US, and Canada, to mention a few.
          </p>

          <button className="font-bold pt-5 bg-orange-500 w-52 py-3 rounded-lg ">
            READ MORE
          </button>
        </div>
        <div className="ml-48 ">
          <Image src="/illustrations-2.png" height={400} width={400} alt="" />
        </div>
      </div>
      <div className="h-full bg-gray-300 ">
        <div className=" p-20 ">
          <h1 className="pb-5 font-bold text-3xl text-center  ">
            Why Choose Us
          </h1>
          <div className=" max-w-lg mx-auto text-center  ">
            <p className=" ">
              As a web design company in Lagos, we work as an extension of your
              brand, offering you creative improvements and brilliant solutions
              that create a huge shift and get your brand to the forefront of
              your industry. We are situated in Lagos, Nigeria, Ajah precisely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
