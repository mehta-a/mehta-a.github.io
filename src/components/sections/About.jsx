import React from 'react';

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Your detailed bio and professional journey goes here. Talk about your
          experience, skills, and what you're passionate about.
        </p>
      </div>
    </section>
  );
};