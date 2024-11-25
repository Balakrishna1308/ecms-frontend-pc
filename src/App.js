// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;




// import React, { useState } from 'react';
// import HeaderComponent from './components/HeaderComponent';
// import FilterSidebarComponent from './components/FilterSidebarComponent';
// import ProductGridComponent from './components/ProductGridComponent';
// import PaginationComponent from './components/PaginationComponent';

// const App = () => {
//   const [filters, setFilters] = useState({});
//   const [products, setProducts] = useState([]); // Fetch data from API
//   const [currentPage, setCurrentPage] = useState(1);

//   const applyFilters = (newFilters) => {
//     setFilters(newFilters);
//     // Fetch or filter products based on filters
//   };

//   return (
//     <div className="app-container">
//       <HeaderComponent setFilters={applyFilters} />
//       <div className="main-content">
//         <FilterSidebarComponent setFilters={applyFilters} />
//         <ProductGridComponent products={products} />
//       </div>
//       <PaginationComponent
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// };

// export default App;





import React, { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FilterSidebarComponent from './components/FilterSidebarComponent';
import ProductGridComponent from './components/ProductGridComponent';
import PaginationComponent from './components/PaginationComponent';
import './styles.css'; // Import the updated CSS file

const App = () => {
  const [filters, setFilters] = useState({});
  const [products] = useState([
    { id: 1, name: "Product 1", price: 100, rating: 4, badge: "New", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 200, rating: 5, badge: "Sale", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 300, rating: 4.5, badge: "Best Seller", image: "https://via.placeholder.com/150" },
  ]); // Example products
  const [currentPage, setCurrentPage] = useState(1);

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app-container">
      <HeaderComponent setFilters={applyFilters} />
      <div className="main-content">
        <FilterSidebarComponent setFilters={applyFilters} />
        <ProductGridComponent products={products} />
      </div>
      <PaginationComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
