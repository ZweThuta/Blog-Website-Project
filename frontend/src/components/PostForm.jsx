import { Form, redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const PostForm = () => {
  return (
    <>
      <section>
        <Form method="post">
          <div className="form-input">
            <label htmlFor="form-author">Author</label>
            <input type="text" id="from-author" name="author" required />
          </div>

          <div className="form-input">
            <label htmlFor="form-title">Title</label>
            <input type="text" id="from-title" name="title" required />
          </div>
          <div className="form-input">
            <label htmlFor="form-image">Image</label>
            <input type="url" id="from-image" name="image" required />

          </div>
          <div className="form-input">
            <label htmlFor="form-date">Date</label>
            <input type="date" id="from-date" name="date" required />
          </div>
          <div className="form-input">
            <label htmlFor="form-type">Type</label>
            <select id="type" name="type">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="form-description">Description</label>
            <textarea
              name="description"
              id="form-description"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <button>Publish</button>
        </Form>
      </section>
    </>
  );
};

export default PostForm;
export const action = async ({ request, params }) => {
  const data = await request.formData();
  const writeData ={
    id:uuidv4(),
    author: data.get("author"),
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    type: data.get("type"),
    description: data.get("description"),
  }

  const response = await fetch(import.meta.env.VITE_APP_DOMAIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(writeData),
  });
  
  if (!response.ok) {
    throw new Error("Failed to create post.");
  }
  return redirect("/");
};
