import { motion } from "framer-motion";
import livingroom from "../../../assets/Images/LivingRoom.png";
import blogs from "../blog.json";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <header>
        <motion.div
          className="relative flex items-center justify-center h-[50vh] bg-gray-100"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={livingroom}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <div className="text-center bg-black bg-opacity-50 px-6 py-4 rounded-lg">
              <motion.h1
                className="text-6xl mb-4 tracking-wide text-white leading-tight font-bold"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Blogs
              </motion.h1>
              <motion.p
                className="text-xl italic text-white mt-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Latest trends and projects for you.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link
                to={`${blog.id}`}
                className="shadow-lg h-[60vh] flex flex-col rounded-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <motion.img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="h-2/3 w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-2xl font-semibold mb-2 font-cormorant">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>{blog.date}</p>
                    <p className="italic">{blog.author}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
