const About = () => {
  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src={require("../data/IMG_1469.jpg")}
                  alt="personal"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Consultant/Accountant turned Software Engineer!{" "}
              </h1>
              <div className="mt-6 space-y-7 text-xl ">
                <p>
                  I am a full-stack developer using MongoDB, Express.js,
                  React,js, Node.js (MERN) to build responsive full-stack
                  applications. I enjoy solving complex problems and learning
                  new skills. As a developer, I am constantly seeking challenges
                  and opportunities to expand my skills and knowledge.
                </p>
                <p>
                  Since I was a young child, I have been interested in computer
                  games and the intricate workings of technology. Even as I
                  played games, I found myself compelled to explore and
                  manipulate the underlying code that brought the games to life.
                  As I grew older, my interest in programming only increased. I
                  knew that I wanted to pursue a career in programming because
                  it offered me the opportunity to use a computer to create
                  anything I could imagine. To me, the computer and programming
                  languages were like a paintbrush and canvas to an artist,
                  offering limitless possibilities for creativity.
                </p>

                <p>
                  However, like all things in life... it is never a direct path.
                  After graduating from the University of Florida with a
                  bachelor and masters in accounting, I started my career at
                  PriceWaterhouseCoopers (PwC) in Atlanta. After PwC, I
                  transitioned into a consulting role at a boutique management
                  consulting firm working primarily on healthcare transactions.
                  My five year career in accounting & consulting provided me
                  with invaluable skills that I believe will only make me a
                  better software engineer.
                </p>
              </div>
            </div>
            <div className="lg:pl-20">
              <ul>
                <li className="flex">
                  <a
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
                    href="https://www.linkedin.com/in/felix-chen-cpa/"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                    >
                      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                    </svg>
                    <span>Follow me on LinkedIn</span>
                  </a>
                </li>
                <li className="flex mt-5">
                  <a
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
                    href="https://www.linkedin.com/in/felix-chen-cpa/"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                      ></path>
                    </svg>
                    <span>Follow me on GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <ul className="steps steps-vertical mt-12">
            <li className="step">
              Student: I attended the University of Florida and received my
              bachelor and masters in accounting.
            </li>
            <li className="step">
              Accounting/Consulting Professional Career: I began my professional
              journey as an associate at PriceWaterhouseCoopers (PwC), where I
              obtained my Certified Public Accountant (CPA) certificate while
              working. Afterward, I made a transition to a management consulting
              role at a boutique firm, where I was primarily involved in
              transaction advisory work. During my tenure there, I earned a
              business valuation certification, which although a technical
              position involving financial modeling, is not related to
              programming. Nonetheless, I believe that the skills I developed on
              the job, such as reading accounting and valuation technical
              documentation, researching complex issues, and problem-solving,
              are transferrable and crucial to the role of a software engineer.
              Apart from the aforementioned skills, I also acquired valuable
              soft skills during my time at both companies that are applicable
              to various professions, including software engineering. These
              include teamwork, organization, communication, time management,
              decision-making, and more.
            </li>
            <li className="step step-primary">
              Software Engineer: My journey so far has been incredibly
              rewarding. I've gained a wealth of knowledge, but I realize that
              programming is an expansive subject, and I have only just begun to
              scratch the surface. Nevertheless, I'm enthusiastic about
              continuing to learn and refining my skills to become a better
              software engineer. My current focus has been on mastering
              Javascript, React.js, MongoDB, Express.js, Node.js, HTML, and CSS.
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default About;
