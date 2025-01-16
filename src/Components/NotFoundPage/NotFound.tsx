import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
    <div>
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-2 text-xl">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Go Back to Home
      </Link>
    </div>
  </div>
  )
}

export default NotFound
