import { Layout } from "../../components/Layout/layout";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
        navigate("/add");
  };

  return (
    <Layout>
      <div className="hero min-h-screen bg-base-250   bg-gradient-to-l from-zinc-800 to-lime-500  ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=400&h=600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-10">
            <h1 className="text-5xl font-bold  text-indigo-50">
              Watchlist Movies
            </h1>
            <p className="py-6 text-indigo-50">
              Save movies & shows to watch later. You can add movies and shows
              to your watchlist to easily find content you want to watch later.
            </p>
            <button
              onClick={handleClick}
              className="btn btn-outline text-lime-500 bg-gray-800 border-zinc-900"
            >
              Add Movie
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
