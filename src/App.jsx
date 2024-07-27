import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <section className="categories container">
          <h2>Shop by Category</h2>
          <div className="category-grid">
            <CategoryCard title="Shoes" imgSrc="/images/shoe2.webp" />
            <CategoryCard title="Tops" imgSrc="/images/top2.webp" />
            <CategoryCard title="Dresses" imgSrc="/images/dress1.jpg" />
            <CategoryCard title="Bags" imgSrc="/images/bags2.webp" />
          </div>
        </section>
        <section className="products container">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <ProductCard name="Stylish Shoes" imgSrc="images/shoess.jpg" price="99.99" />
            <ProductCard name="Elegant Top" imgSrc="images/Rylan Top.webp" price="49.99" />
            <ProductCard name="Chic Dress" imgSrc="/images/dress1.jpg" price="79.99" />
            <ProductCard name="Trendy Bag" imgSrc="images/bag1.webp" price="59.99" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
