import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";

import Post from "./models/Post.js";


// Ładowanie zmiennych środowiskowych
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serwowanie plików statycznych z folderu "uploads"

// Połączenie z MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Błąd połączenia z MongoDB:", err));

// Trasa testowa
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Konfiguracja multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Zapis w folderze "uploads"
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname); // Unikalna nazwa pliku
  },
});

const upload = multer({ storage });

// CRUD Operacje

// Pobierz wszystkie posty
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find(); // Pobranie wszystkich postów
    res.json(posts); // Zwrócenie postów jako JSON
  } catch (err) {
    res.status(500).json({ message: "Błąd serwera", error: err.message });
  }
});


// Trasa: Pobierz pojedynczy post na podstawie ID
app.get("/api/posts/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      // Znajdź post w bazie danych
      const post = await Post.findById(id);
  
      if (!post) {
        return res.status(404).json({ message: "Nie znaleziono posta o podanym ID." });
      }
  
      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Błąd serwera", error: error.message });
    }
  });

// Dodaj nowy post z obsługą przesyłania plików
app.post("/api/posts", upload.single("src"), async (req, res) => {
  try {
    const { title, content, content2, categories, w, h, type } = req.body;

    // Obsługa categories jako ciągu znaków lub tablicy
    const categoryArray = Array.isArray(categories)
      ? categories
      : categories
      ? categories.split(",").map((cat) => cat.trim())
      : [];

    // Ścieżka do przesłanego pliku
    const imagePath = req.file ? req.file.path : "";

    // Tworzenie nowego posta
    const newPost = new Post({
      title,
      content,
      content2,
      categories: categoryArray,
      src: imagePath,
      w: parseInt(w, 10) || 1,
      h: parseInt(h, 10) || 1,
      type: type || "StandardPost",
    });

    // Zapis w bazie danych
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Błąd podczas dodawania posta:", error);
    res.status(500).json({ message: "Błąd serwera", error: error.message });
  }
});

// Edytuj istniejący post
app.put("/api/posts/:id", upload.single("src"), async (req, res) => {
  const { id } = req.params;
  const { title, content, content2, categories, type, w, h } = req.body;

  try {
    // Obsługa categories jako ciągu znaków lub tablicy
    const categoryArray = Array.isArray(categories)
      ? categories
      : categories
      ? categories.split(",").map((cat) => cat.trim())
      : [];

    // Przygotowanie danych do aktualizacji
    const updatedData = {
      title,
      content,
      content2,
      categories: categoryArray,
      type,
      w: parseInt(w, 10) || 1,
      h: parseInt(h, 10) || 1,
    };

    // Jeśli przesłano nowe zdjęcie, zaktualizuj jego ścieżkę, w przeciwnym razie zachowaj stare zdjęcie
    if (req.file) {
      updatedData.src = req.file.path;
    } else {
      const existingPost = await Post.findById(id);
      if (!existingPost) {
        return res.status(404).json({ message: "Nie znaleziono posta o podanym ID." });
      }
      updatedData.src = existingPost.src; // Zachowaj istniejące zdjęcie
    }

    const updatedPost = await Post.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return res.status(404).json({ message: "Nie znaleziono posta o podanym ID." });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error("Błąd podczas aktualizacji posta:", error);
    res.status(500).json({ message: "Błąd serwera", error: error.message });
  }
});





// Usuń post
app.delete("/api/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Nie znaleziono posta o podanym ID." });
    }

    res.json({ message: "Post został pomyślnie usunięty.", post: deletedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Błąd serwera", error: error.message });
  }
});



// Uruchomienie serwera
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
