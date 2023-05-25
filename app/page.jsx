import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="flex justify-center items-center w-full h-full absolute z-[-1] top-[-150px] hero-circle overflow-hidden">
        <svg
          viewBox="0 0 1194 1192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <circle
              cx="596"
              cy="596"
              r="594.5"
              stroke="url(#paint0_linear_1147_785)"
              strokeWidth="3"
            ></circle>
            <circle
              cx="64"
              cy="335"
              r="10"
              fill="url(#paint1_linear_1147_785)"
            ></circle>
            <circle
              cx="187"
              cy="1029"
              r="10"
              fill="url(#paint2_linear_1147_785)"
            ></circle>
            <circle
              cx="1184"
              cy="684"
              r="10"
              fill="url(#paint3_linear_1147_785)"
            ></circle>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1147_785"
              x1="27.8649"
              y1="603.544"
              x2="1201.29"
              y2="603.544"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4CA5FF"></stop>
              <stop offset="1" stopColor="#B673F8"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_1147_785"
              x1="54.4675"
              y1="335.127"
              x2="74.1558"
              y2="335.127"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4CA5FF"></stop>
              <stop offset="1" stopColor="#B673F8"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_1147_785"
              x1="177.468"
              y1="1029.13"
              x2="197.156"
              y2="1029.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4CA5FF"></stop>
              <stop offset="1" stopColor="#B673F8"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_1147_785"
              x1="1174.47"
              y1="684.127"
              x2="1194.16"
              y2="684.127"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4CA5FF"></stop>
              <stop offset="1" stopColor="#B673F8"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h1 className="head_text text-center">
        Inspire toi des Meilleures
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">Prompts Midjourney!</span>
      </h1>
      <p className="desc text-center">
        Hall Of Prompt is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
