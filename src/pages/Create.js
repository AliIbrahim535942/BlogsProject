import { useState } from "react";
import { useHistory } from "react-router-dom";
function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setauthor] = useState("Osama");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setauthor(e.target.value)}>
          <option value="Osama">Osama</option>
          <option value="Ali">Ali</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
}
export default Create;
