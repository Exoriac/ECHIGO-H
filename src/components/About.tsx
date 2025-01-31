import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-lg text-neutral-700 mb-6">
            At Echigo Home Cook, we bring the authentic flavors of Japanese home cooking to your table. 
            Our dedication to using only the freshest ingredients and traditional techniques has made us 
            a beloved destination for Japanese cuisine enthusiasts.
          </p>
          <p className="text-lg text-neutral-700">
            Each dish is crafted with precision and care, following time-honored recipes that have been 
            passed down through generations. Our sushi masters bring over two decades of experience, 
            ensuring every roll is a perfect balance of flavors and textures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;