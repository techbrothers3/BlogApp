import { useContext, useEffect } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import config from '../../config'
export default function AddNewBlog() {
  const { formData, setFormData, setIsEdit, isEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSaveBlogToDb() {
    const response = isEdit
      ? await axios.put(
          `${config.BASE_URL}/api/blog/${location.state.getCurrentBlog._id}`,
          {
            title: formData.title,
            description: formData.description,
          }
        )
      : await axios.post(`${config.BASE_URL}/api/blog/`, {
          title: formData.title,
          description: formData.description,
        });

    const result = await response.data;

    if (result) {
      setIsEdit(false);
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrentBlog } = location.state;
      setIsEdit(true);
      setFormData({
        title: getCurrentBlog.title,
        description: getCurrentBlog.description,
      });
    }
  }, [location]);

  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? "Edit a Blog" : "Add a Blog"}</h1>
      <div className={classes.formWrapper}>
        <input
          name="title"
          placeholder="Enter Blog Title"
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          value={formData.description}
          onChange={(event) =>
            setFormData({
              ...formData,
              description: event.target.value,
            })
          }
        />
        <button onClick={handleSaveBlogToDb}>
          {isEdit ? "Edit a Blog" : "Add a new blog"}
        </button>
      </div>
    </div>
  );
}
