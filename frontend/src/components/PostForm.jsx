import { Form, redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
const PostForm = () => {
  const modules = {
    toolbar:[
      [{'header':[1,2,3,4,5,false]}],
      ['bold','italic','underline','strike','blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
      ['link','image'],
      ['clean']
    ],
  }
  const formats = ['header','bold','italic','underline','strike','blockquote','list','bullet','indent','link','image']
  return (
    <>
      <section className="form-section">
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
            <label htmlFor="form-type">Category</label>
            <input type="text" id="from-type" name="type" required />
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
