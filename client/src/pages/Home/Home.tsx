import React from "react";
import { Layout } from "../../components/Layout/layout";
import { NavLink, useNavigate } from "react-router-dom";


export const Home = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/add")
  }

  return (
    <Layout>

       <div className="hero min-h-screen bg-base-250 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="ml-10">
      <h1 className="text-5xl font-bold">Watchlist Movies</h1>
      <p className="py-6">Save movies & shows to watch later. You can add movies and shows to your watchlist to easily find content you want to watch later.</p>
      <button
      onClick={handleClick}
      className="btn btn-outline"
      >Add Movie</button>
    </div>
  </div>
</div> 



    </Layout>
  )
}