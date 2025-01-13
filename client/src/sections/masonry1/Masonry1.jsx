import React, { useState } from 'react'
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "./masonry1.scss"

const ResponsiveGridLayout = WidthProvider(Responsive);

const initialImages = [
  { id: '1', src: "images/1.jpg", w: 2, h: 1 },
  { id: '2', src: "images/2.jpg", w: 2, h: 2 },
  { id: '3', src: "images/3.jpg", w: 1, h: 2 },
  { id: '4', src: "images/4.jpg", w: 1, h: 1 },
  { id: '5', src: "images/5.jpg", w: 1, h: 2 },
  { id: '6', src: "images/6.jpg", w: 1, h: 2 },
  { id: '7', src: "images/7.jpg", w: 1, h: 1 },
  { id: '8', src: "images/8.jpg", w: 1, h: 1 },
  { id: '9', src: "images/9.jpg", w: 2, h: 2 },
  { id: '10', src: "images/10.jpg", w: 1, h: 2 },
  { id: '11', src: "images/11.jpg", w: 1, h: 1 },
  { id: '12', src: "images/12.jpg", w: 1, h: 2 },
  { id: '13', src: "images/13.jpg", w: 1, h: 1 },
  { id: '14', src: "images/14.jpg", w: 1, h: 1 },
  { id: '15', src: "images/15.jpg", w: 1, h: 2 },
  { id: '16', src: "images/16.jpg", w: 1, h: 2 },
  { id: '17', src: "images/17.jpg", w: 1, h: 2 },
  { id: '18', src: "images/18.jpg", w: 1, h: 2 },
  { id: '19', src: "images/19.jpg", w: 1, h: 1 },
  { id: '20', src: "images/20.jpg", w: 2, h: 2 },
];


export default function Masonry1() {

  const savedLayouts = JSON.parse(localStorage.getItem('layouts'));
  const [layouts, setLayouts] = useState( savedLayouts || {
    lg: initialImages.map((item, index) => ({
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

  return (
    <div className="masonry-grid-container">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={300}
        // width={1200}
        onLayoutChange={handleLayoutChange}
        // draggableHandle=".drag-handle"
        compactType="vertical" // Możesz zmienić na 'horizontal' lub 'null'
        preventCollision={false} // Umożliwia kompaktowanie
        isResizable={true}

        
        
      >
        {initialImages.map((image) => (
          <div key={image.id} className={`grid-item ${image.w === 2 ? 'wide' : ''} ${image.h === 2 ? 'tall' : ''}`}>
            {/* <div className="drag-handle">::</div> */}
            <img src={image.src} alt={`Portfolio ${image.id}`} loading="lazy" />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}
