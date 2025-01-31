import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Incredible flavors! Reminds me of my trip to Japan.",
    author: "Anna K.",
    rating: 5
  },
  {
    text: "Great atmosphere, comforting food. Will be back!",
    author: "Jason M.",
    rating: 4
  },
  {
    text: "Best homemade Japanese food in town. Highly recommend!",
    author: "Emily R.",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1">
            <span className="text-2xl font-bold">4.4</span>
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-6 h-6" />
              ))}
              <Star className="w-6 h-6" fill="currentColor" strokeWidth={0} clipPath="inset(0 50% 0 0)" />
            </div>
            <span className="text-neutral-500">(81 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-neutral-50 p-6 rounded-lg"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">"{review.text}"</p>
              <p className="font-semibold">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;