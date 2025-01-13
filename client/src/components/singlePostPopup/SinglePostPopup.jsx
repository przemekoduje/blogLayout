import React, { useEffect, useState } from "react";
import "./singlePostPopup.scss";

export default function SinglePostPopup({ post, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Blokujemy przewijanie tła przy otwarciu popupu
    document.body.style.overflow = "hidden";

    return () => {
      // Przywracamy przewijanie tła po zamknięciu popupu
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 400); // Czas trwania animacji
  };

  return (
    <div className="popup-overlay">
      <div className={`popup-cont ${isClosing ? "popup-hide" : ""}`}>
        <div className="short-background"></div>
        <button className="close-button" onClick={handleClose}>
          x
        </button>
        <h1 className="popup-title">{post.title}</h1>
        {post.categories && (
          <div className="post-categories">
            {post.categories.map((category, index) => (
              <span key={index} className="category">
                {category}
              </span>
            ))}
          </div>
        )}
        {/* zdjecie */}
        {post.src && (
          <img
            src={`http://localhost:5001/${post.src}`}
            alt={post.title}
            className="popup-image"
          />
        )}
        {/* Nagłówek  */}
        {post.content && (
          <div className="popup-content">
            <p>{post.content}</p>
          </div>
        )}

        {/* Treść  */}
        {post.content2 && (
          <div
            className="popup-content2"
            dangerouslySetInnerHTML={{ __html: post.content2 }}
          />
        )}
      </div>
    </div>
  );
}
