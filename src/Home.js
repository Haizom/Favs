import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {blogs, loading, error} = useFetch("http://localhost:8000/blogs")

    return (
      <div className="home">
        {error && <div>{error}</div>} 
        {loading && <div>Loading...</div>} 
        {blogs && <BlogList blogs={blogs} title="All Favs!"/>}
      </div>
    );
  } // conditional rendering is powerful 
   
  export default Home;