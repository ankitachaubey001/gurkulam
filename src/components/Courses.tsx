import React from 'react';

export const Courses = () => {
  const courses = [
    { title: "AI Fundamentals", description: "Learn the basics of AI", image: 'https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988563/TheBestColleges.org/images/study-active-recall.jpg' },
    { title: "Machine Learning", description: "Deep dive into ML", image: 'https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988563/TheBestColleges.org/images/study-active-recall.jpg' },
    { title: "Deep Learning", description: "Master neural networks", image: 'https://res.cloudinary.com/highereducation/image/upload/c_scale,w_750/f_auto,fl_lossy,q_auto:eco/v1532988563/TheBestColleges.org/images/study-active-recall.jpg' },
  ];

  return (
    <section id="courses" className="courses-section">
      <h2 className="courses-title">Our Courses</h2>
      <div className="course-cards">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
