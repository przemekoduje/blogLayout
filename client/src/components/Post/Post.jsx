// src/components/Masonry1/Post.jsx
import React from "react";
import PropTypes from "prop-types";
import "./post.scss";

const pastelColors = [
  "#FEFAE0",
  "#FAEDCD",
  "#E9EDC9",
  "#DDB58F",
  "#CCD5AE",
  "#D4A373",
];

const Post = ({
  id,
  src,
  title,
  content,
  type,
  categories,
  borderRadius,
  specialCorner,
  onCategoryClick,
  hasSvg
}) => {


  // Funkcja do przypisywania pastelowego koloru na podstawie ID
  const getPastelColor = (id) => {
    const index = parseInt(id, 10) % pastelColors.length;
    return pastelColors[index];
  };

  let postBgColor;
  if (type === "TextPost") {
    postBgColor = getPastelColor(id);
  }

  // Definiowanie stylów dla zaokrągleń
  const borderRadiusStyle =
    typeof borderRadius === "string" ? { borderRadius } : borderRadius;

  // Renderowanie różnych layoutów w zależności od typu posta
  if (type === "StandardPost") {
    return (
      <div
        className="post standard-post"
        style={borderRadiusStyle}>
        <img src={src} alt={title} loading="lazy" />
        <div className="wrapper"
        style={{
          background: hasSvg
            ? 'url("/images/Subtract.svg") no-repeat bottom left / contain'
            : 'none'
        }}>
          <div className="post-content">
            <span className="cat">
              {categories.map((cat, i) => (
                <span key={i}>{cat}</span>
              ))}
            </span>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    );
  }

  if (type === "TextPost") {
    const backgroundColor = getPastelColor(id);
    return (
      <div
        className="post text-post"
        style={{ backgroundColor, ...borderRadiusStyle }}
      >
        {specialCorner && (
          <div className="corner-wrapper">
            <div className="corner-square"></div>
            <div className="quarter-circle1"></div>
            <div className="quarter-circle2"></div>
            <button
              className="corner-btn-large"
              style={{ backgroundColor: postBgColor }}
            >
              <span className="corner-icon">+</span>
            </button>
          </div>
        )}
        <div className="post-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  }

  if (type === "CategoriesPost") {
    return (
      <div className="post categories-post" style={borderRadiusStyle}>
        <div className="categories-buttons">
          {categories.slice(0, 10).map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => onCategoryClick(category)} >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Domyślne renderowanie, jeśli typ jest nieznany
  return (
    <div className="post standard-post" style={borderRadiusStyle}>
      <img src={src} alt={title} loading="lazy" />
      <div className="post-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  type: PropTypes.oneOf(["StandardPost", "TextPost", "CategoriesPost"])
    .isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      borderTopLeftRadius: PropTypes.string,
      borderTopRightRadius: PropTypes.string,
      borderBottomLeftRadius: PropTypes.string,
      borderBottomRightRadius: PropTypes.string,
    }),
  ]),
  specialCorner: PropTypes.bool,
  onCategoryClick: PropTypes.func,
};

Post.defaultProps = {
  src: "",
  content: "",
  categories: [],
  borderRadius: "18px",
  specialCorner: false,
};

export default Post;
