import { Link } from "react-router-dom";

export default function Social() {
  return (
    <div className="flex flex-row mt-5">
      <a
        href="https://github.com/daifernandez"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row mt-5 transform transition duration-500 ease-in-out hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github mr-3"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#9e9e9e"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
      </a>
      <a
        href="https://twitter.com/daiofernandez"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row mt-5 transform transition duration-500 ease-in-out hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-twitter mr-3"
          width="34"
          height="34"
          viewBox="0 0 27 20"
          strokeWidth="1"
          stroke="#9e9e9e"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/daifernandez/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row mt-5 transform transition duration-500 ease-in-out hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-linkedin mr-3"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#9e9e9e"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="11" x2="8" y2="16" />
          <line x1="8" y1="8" x2="8" y2="8.01" />
          <line x1="12" y1="16" x2="12" y2="11" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      </a>
      <Link
        to="#"
        className="flex flex-row mt-5 transform transition duration-500 ease-in-out hover:scale-110"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "mailto:dtama.fernandez@gmail.com";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-mail mr-3"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#9e9e9e"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      </Link>
    </div>
  );
}
