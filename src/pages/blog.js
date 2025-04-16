import React from 'react';
import './blog.css';

const Blog = () => {
  // Example blog posts data is commented out to avoid the unused variable warning
  /* const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with DevOps: My Journey',
      excerpt: 'In this post, I share my experience as a DevOps intern and the key lessons I learned about implementing CI/CD pipelines and infrastructure as code.',
      date: 'July 15, 2024',
      category: 'DevOps',
      image: 'placeholder-blog1.jpg'
    },
    {
      id: 2,
      title: 'Building Cross-Platform Mobile Apps with Flutter',
      excerpt: 'Explore the advantages of using Flutter for cross-platform mobile development and learn about some of the key techniques I used in my Fourier Series app.',
      date: 'June 30, 2024',
      category: 'Mobile Development',
      image: 'placeholder-blog2.jpg'
    },
    {
      id: 3,
      title: 'Deep Learning for Image Classification: A Practical Guide',
      excerpt: 'A step-by-step guide on implementing deep learning models for image classification, based on my experience with the Dogs vs Cats project.',
      date: 'June 15, 2024',
      category: 'AI/ML',
      image: 'placeholder-blog3.jpg'
    }
  ]; */

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts, tutorials and insights on software development, DevOps, and more</p>
      </div>
      
      <div className="blog-content">
        <div className="coming-soon">
          <h2>Blog Coming Soon!</h2>
          <p>I'm currently working on some exciting technical articles to share with you. Check back soon for content about:</p>
          <ul>
            <li>DevOps best practices and tutorials</li>
            <li>Mobile app development with Flutter and React Native</li>
            <li>Web development techniques and frameworks</li>
            <li>Machine learning and AI projects</li>
            <li>My journey as a software engineer</li>
          </ul>
          <p>In the meantime, feel free to connect with me on <a href="https://linkedin.com/in/irfansyakir" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my projects!</p>
        </div>
        
        {/* Uncomment the section below when you're ready to add blog posts */}
        {/*
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <span>{post.title}</span>
                {/* Replace with actual image: <img src={post.image} alt={post.title} /> *//*}
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-category">{post.category}</span>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="blog-read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </div>
  );
};

export default Blog;