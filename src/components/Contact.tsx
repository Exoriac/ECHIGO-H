import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9811468545347!2d-122.42330492357897!3d37.75761571667251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3dadc06da9%3A0x44f60e5b8d740097!2s870%20Valencia%20St%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1709669136981!5m2!1sen!2sus"
                className="w-full h-96 rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-red-600" />
                      <span>870 Valencia St, San Francisco, CA 94110</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-red-600" />
                      <span>(628) 300-1036</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-red-600" />
                      <div>
                        <p>Monday - Friday: 11:30 AM - 10:00 PM</p>
                        <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;