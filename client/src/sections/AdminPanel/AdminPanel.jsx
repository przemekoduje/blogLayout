import React, { useState, useEffect, useRef } from "react";
import "./adminPanel.scss";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function AdminPanel() {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    content2: "",
    categories: "",
    src: null,
    type: "StandardPost",
    w: 1,
    h: 1,
  });
  const [editingPost, setEditingPost] = useState(null);

  const startEditing = (post) => {
    setEditingPost(post); // Ustaw aktualnie edytowany post
    setForm({
      title: post.title,
      content: post.content,
      content2: post.content2 || "",
      categories: post.categories.join(", "),
      type: post.type,
      src: null,
      w: post.w,
      h: post.h,
    });

    // Ustaw zawartość edytora Quill
    if (quillRef.current) {
      quillRef.current.root.innerHTML = post.content2 || "";
    }
  };



  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["link", "image"],
          ],
        },
      });

      quillRef.current = quill;

      quill.on("text-change", () => {
        setForm((prevForm) => ({
          ...prevForm,
          content2: quill.root.innerHTML,
        }));
      });
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null; // Usuń odniesienie do instancji Quill
      }
    };
  }, []);

  useEffect(() => {
    // Pobierz istniejące wpisy
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Błąd podczas pobierania wpisów:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Czy na pewno chcesz usunąć ten post?")) return;

    try {
      const response = await fetch(`http://localhost:5001/api/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
        console.log("Post został usunięty.");
      } else {
        console.error("Błąd podczas usuwania posta.");
      }
    } catch (error) {
      console.error("Błąd połączenia z serwerem podczas usuwania posta:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingPost
      ? `http://localhost:5001/api/posts/${editingPost._id}`
      : "http://localhost:5001/api/posts";

    const method = editingPost ? "PUT" : "POST";

    try {
      let response;

      if (form.src) {
        // Użycie FormData, gdy przesyłamy plik
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        formData.append("content2", form.content2);
        formData.append("categories", form.categories);
        formData.append("type", form.type);
        formData.append("w", form.w);
        formData.append("h", form.h);
        formData.append("src", form.src);

        response = await fetch(url, {
          method,
          body: formData,
        });
      } else {
        // Użycie JSON, gdy nie przesyłamy pliku
        response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: form.title,
            content: form.content,
            content2: form.content2,
            categories: form.categories.split(",").map((cat) => cat.trim()),
            type: form.type,
            w: form.w,
            h: form.h,
          }),
        });
      }

      if (response.ok) {
        const updatedOrNewPost = await response.json();

        if (editingPost) {
          // Aktualizacja istniejącego posta
          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post._id === updatedOrNewPost._id ? updatedOrNewPost : post
            )
          );
        } else {
          // Dodanie nowego posta
          setPosts((prevPosts) => [...prevPosts, updatedOrNewPost]);
        }

        // Reset formularza
        setForm({
          title: "",
          content: "",
          content2: "",
          categories: "",
          src: null,
          type: "StandardPost",
          w: 1,
          h: 1,
        });

        // Reset Quill edytora
        if (quillRef.current) {
          quillRef.current.root.innerHTML = "";
        }

        setEditingPost(null); // Wyjście z trybu edycji
      } else {
        console.error("Błąd podczas zapisu posta.");
      }
    } catch (error) {
      console.error("Błąd połączenia z serwerem:", error);
    }
  };


  return (
    <div className="admin-panel">
      <h1>Panel Administracyjny</h1>

      {/* Lista wpisów */}
      <section className="posts-list">
        <h2>Lista Wpisów</h2>
        <table>
          <thead>
            <tr>
              <th>Tytuł</th>
              <th>Kategorie</th>
              <th>Typ</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.categories.join(", ")}</td>
                <td>{post.type}</td>
                <td>
                  <button onClick={() => startEditing(post)}>Edytuj</button>
                  <button onClick={() => handleDelete(post._id)}>Usuń</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Formularz dodawania */}
      <section className="post-form">
        <h2>Dodaj Nowy Wpis</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Tytuł:</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>
          <div>
            <label>Nagłówek:</label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </div>
          <div>
            <label>Treść:</label>
            <div
              id="editor"
              ref={editorRef}
            // value={form.content2}
            // onChange={(e) => setForm({ ...form, content2: e.target.value })}
            ></div>
            {/* <textarea
              value={form.content2}
              onChange={(e) => setForm({ ...form, content2: e.target.value })}
            /> */}
          </div>
          <div>
            <label>Kategorie:</label>
            <input
              type="text"
              value={form.categories}
              onChange={(e) => setForm({ ...form, categories: e.target.value })}
            />
          </div>
          <div>
            <label>Obrazek:</label>
            <input
              type="file"
              onChange={(e) => setForm({ ...form, src: e.target.files[0] })}
            />
          </div>
          <div>
            <label>Typ:</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="StandardPost">StandardPost</option>
              <option value="TextPost">TextPost</option>
              <option value="CategoriesPost">CategoriesPost</option>
            </select>
          </div>
          <button type="submit">
            {editingPost ? "Zapisz zmiany" : "Dodaj post"}
          </button>
          {editingPost && (
            <button
              type="button"
              onClick={() => {
                setEditingPost(null); // Wyjście z trybu edycji
                setForm({
                  title: "",
                  content: "",
                  content2: "",
                  categories: "",
                  src: null,
                  type: "StandardPost",
                  w: 1,
                  h: 1,
                }); // Reset formularza
                // Reset zawartości edytora Quill
                if (quillRef.current) {
                  quillRef.current.root.innerHTML = ""; // Wyczyść treść edytora
                }
              }}
            >
              Anuluj
            </button>
          )}
        </form>
      </section>
    </div>
  );
}
