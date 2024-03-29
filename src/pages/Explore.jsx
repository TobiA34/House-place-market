import React from 'react'
import { Link } from 'react-router-dom'
import rentCategoryImg from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImg from "../assets/jpg/sellCategoryImage.jpg";
import Slider from '../components/Slider';

function Explore() {
  return (
    <div className="explore">
      <header>
        <main>
          {/* slider */}
          <Slider/>
          <p className="exploreCategoryHeading">Categories</p>
          <div className="exploreCategories">
            <Link to="/category/rent">
              <img
                src={rentCategoryImg}
                alt="rent"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">Places for rent</p>
            </Link>
            <Link to="/category/sale">
              <img
                src={sellCategoryImg}
                alt="sell"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">Places for sales</p>
            </Link>
          </div>
        </main>
      </header>
    </div>
  );
}

export default Explore
