import React from 'react';

const menuItems = [
  {
    name: "Fire Salmon Roll",
    description: "Spicy salmon, cucumber, topped with salmon & avocado",
    price: "$18",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    emoji: "🔥"
  },
  {
    name: "Lion King Baked Roll",
    description: "Premium red crab, avocado, baked salmon, bonito flakes",
    price: "$22",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    emoji: "🦀"
  },
  {
    name: "Echigo Rainbow Roll",
    description: "Premium red crab, avocado, salmon, blue fin tuna, hamachi",
    price: "$24",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    emoji: "🌈"
  },
  {
    name: "Flying Dragon Roll",
    description: "Shrimp tempura, BBQ eel, avocado, unagi sauce",
    price: "$20",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    emoji: "🐉"
  },
  {
    name: "Witch Double Toro Roll",
    description: "Spicy toro, o-toro, truffle sauce",
    price: "$28",
    image: "https://images.unsplash.com/photo-1584583570840-0a3d88497593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    emoji: "👑"
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Signature Rolls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {item.emoji} {item.name}
                </h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <p className="text-xl font-bold text-red-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;