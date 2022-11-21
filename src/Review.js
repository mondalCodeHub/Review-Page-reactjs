import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  // check number
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  }
  // button function (previous function)
  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }
  // button function (next function)
  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  // button function (randomReview)
  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  }

  return (
    <article className='review-container'>
      <img src={image} alt={name} className="person-image" />
      <div className='informationContainer'>
        <h2 className='info-name'>{name}</h2>
        <hr className='underline' />
        <h3 className='info-job'>{job}</h3>
        <p className='info-text'>"{text}"</p>

        <div className="button-container">
          <div className="prevAndNext">
            <button className='prev-button' onClick={prevReview}><FaChevronLeft /></button>
            <button className='next-button' onClick={nextReview}><FaChevronRight /></button>
          </div>
          <button className='randomButton' onClick={randomReview}> Random Review</button>
        </div>

      </div>
    </article>
  )
};

export default Review;
// @mondalcodehub-NOV2022