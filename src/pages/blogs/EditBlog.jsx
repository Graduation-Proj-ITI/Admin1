import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";

function EditPost() {
  const { posts } = useBlogs();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    description: "",
    // img: "",
  });

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
      setForm({
        title: data.title,
        description: data.description,
        // img: data.img,
      });
    }
    fetchPostById();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditPost = () => {
    {
      posts.map((post) => (post.id === post.id ? { ...post } : post));
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(`http://localhost:3000/posts/${id}`, {
      title: form.title,
      description: form.description,
      // img: form.img,
    });
    handleEditPost(data);
  };

  return (
    <>
      <h1>{id}</h1>
      <div>
        <form onSubmit={handleEdit}>
          <input
            id="title"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <br />
          <textarea
            id="description"
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
          ></textarea>
          <br />
          {/* <input
            id="img"
            type={"file"}
            value={form.img}
            onChange={handleChange}
          /> */}
          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditPost;
