import React, { useEffect, useMemo, useState } from 'react'
import  { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "./masonry2.scss";
import initialPosts from '../../data/posts'
import Post from '../../components/Post/Post'

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Masonry2() {
  const [selectedCategory, setSelectedCategory] = useState(null);


  // const savedLayouts = JSON.parse(localStorage.getItem('layouts'));

  // Zbieranie wszystkich kategorii z initialPosts
  const allCategories = initialPosts.reduce((acc, post) => {
    if (post.categories && Array.isArray(post.categories)) {
      return acc.concat(post.categories);
    }
    return acc;
  }, []);

  
  
  // Usuwanie duplikatów
  const uniqueCategories = [...new Set(allCategories)];
  
  // console.log(uniqueCategories)
  // Funkcja do losowego przetasowania tablicy
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  
  // Przetasowanie unikalnych kategorii i wybór pierwszych 5
  const randomCategories = shuffleArray(uniqueCategories).slice(0, 5);


  const [layouts, setLayouts] = useState(  {
    lg: initialPosts.map((item, index) => ({
      i: item.id,
      x: (index % 4) * item.w,
      y: Infinity, // Umieszcza element na najniższym możliwym poziomie
      w: item.w,
      h: item.h,
      static: false,
    })),
  });

  const handleLayoutChange = (currentLayout, allLayouts) => {
    setLayouts(allLayouts);
    localStorage.setItem('layouts', JSON.stringify(allLayouts));
  };

  // 1) Wyznacz docelową kolejność postów (ćwiczenie: najpierw kategorie, potem reszta, w każdej grupie daty malejąco)
  const finalPosts = useMemo(() => {
    return initialPosts.slice().sort((a, b) => {
      const aHasCat = selectedCategory && a.categories.includes(selectedCategory);
      const bHasCat = selectedCategory && b.categories.includes(selectedCategory);

      // Te z kategorią najpierw
      if (aHasCat && !bHasCat) return -1;
      if (!aHasCat && bHasCat) return 1;

      
      // Sortuj malejąco po dacie
      return new Date(b.date) - new Date(a.date);
    });
  }, [selectedCategory]);

  
  
  // 2) Gdy finalPosts się zmienia, generujemy nowy layout dla RGL
  useEffect(() => {
    // Budujemy layout "lg" w takiej kolejności, jak finalPosts:
    const newLayoutLg = finalPosts.map((post, index) => ({
      i: post.id,
      x: (index % 4),
      y: Math.floor(index / 4),
      w: post.w,
      h: post.h,
      static: false,
    }));
    const newLayoutMd = finalPosts.map((post, index) => ({
      i: post.id,
      x: (index % 3),
      y: Math.floor(index / 3),
      w: post.w,
      h: post.h,
      static: false,
    }));
    const newLayoutSm = finalPosts.map((post, index) => ({
      i: post.id,
      x: (index % 2),
      y: Math.floor(index / 2),
      w: post.w,
      h: post.h,
      static: false,
    }));
    const newLayoutXs = finalPosts.map((post, index) => ({
      i: post.id,
      x: (index % 1),
      y: Math.floor(index / 1),
      w: post.w,
      h: post.h,
      static: false,
    }));
    const newLayoutXXs = finalPosts.map((post, index) => ({
      i: post.id,
      x: (index % 1),
      y: Math.floor(index / 1),
      w: post.w,
      h: post.h,
      static: false,
    }));

    

    setLayouts((prev) => ({
      ...prev,
      lg: newLayoutLg,
      md: newLayoutMd,
      sm: newLayoutSm,
      xs: newLayoutXs,
      xxs: newLayoutXXs,
    }));
  }, [finalPosts]);



  const handleCategoryClick = (category) => {

    setSelectedCategory(category);
  };

  
  return (
    <div className="masonry-grid-container">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={300}
        onLayoutChange={handleLayoutChange}
        compactType="vertical" // Możesz zmienić na 'horizontal' lub 'null'
        preventCollision={false} // Umożliwia kompaktowanie
        isResizable={true}

        draggableCancel=".category-button"
      >
        {finalPosts.map((post) => (
          <div 
            key={post.id} 
            className={`grid-item ${post.w === 2 ? 'wide' : ''} ${post.h === 2 ? 'tall' : ''}`}>
            <Post
              id={post.id}
              src={post.src}
              title={post.title}
              content={post.content}
              type={post.type}
              categories={post.type === 'CategoriesPost' ? randomCategories : post.categories}
              borderRadius={post.borderRadius}
              specialCorner={post.specialCorner}
              date={post.date}
              onCategoryClick={handleCategoryClick}
              hasSvg={post.hasSvg}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}
