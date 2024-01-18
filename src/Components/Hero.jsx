import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="src\Images\undraw_drink_coffee_v3au.svg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi My Name Is Blogger</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/Blogs">
            <button className="btn btn-primary">Read My Blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
