import { Layout } from "../../components/Layout/layout";

export const About = () => {
  return (
    <Layout>
      <div className="hero min-h-screen  bg-gradient-to-l from-zinc-800 to-lime-500 ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> MERN Stack Application</h1>
            <p className="mb-5">
              The main purpose of using MERN stack is to develop apps using
              JavaScript only. This is because the four technologies that make
              up the technology stack are all JS-based. Thus, if one knows
              JavaScript (and JSON), the backend, frontend, and database can be
              operated easily.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
