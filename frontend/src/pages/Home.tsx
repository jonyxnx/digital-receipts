import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 w-full">
      {/* Header */}
      <header className="w-full bg-white text-gray-800 py-6 px-12 shadow-md">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight">Ticketify</h1>
          <div className="flex gap-6">
            <Link
              to="/login"
              className="text-gray-800 hover:text-green-600 font-semibold transition"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="text-gray-800 hover:text-green-600 font-semibold border-b-2 border-transparent hover:border-green-600 transition"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="bg-white rounded-lg shadow-xl p-12 max-w-4xl">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
            Digital Receipts, Better for Business and the Planet
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Ticketify offers businesses a smart, eco-friendly solution for digital purchase receipts. Eliminate paper waste, streamline your operations, and provide personalized reports to your customers—all in one platform.
          </p>
          <img
            src="https://via.placeholder.com/800x450?text=Business+Receipts+Made+Easy"
            alt="Business Receipts"
            className="rounded-lg shadow-md mb-8"
          />
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/explore"
              className="py-4 px-8 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition"
            >
              Discover Features
            </Link>
            <Link
              to="/about"
              className="py-4 px-8 border-2 border-green-600 text-green-600 text-lg font-semibold rounded-md hover:bg-green-600 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white text-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2025 Ticketify. All rights reserved. 🌱 Helping businesses go paperless with eco-friendly digital receipts.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

