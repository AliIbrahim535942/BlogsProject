import useFetch from "../hooks/useFetch";
import BlogList from "../components/BlogList";
function Home() {
  const {
    data: blogs,
    isPanding,
    error,
  } = useFetch("http://localhost:4000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPanding && <div>Loding ...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
export default Home;
