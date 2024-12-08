import Sale from "../component/Sale";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
const page = () => {
  return (
    <div>
        < Sale />
        < Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card-shadow bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className=" w-full p-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                className="w-full p-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-black transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
        < Newsletter />
        < Footer />
    </div>
  )
}

export default page
