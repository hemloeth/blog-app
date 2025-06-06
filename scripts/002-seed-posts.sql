-- Insert sample blog posts
INSERT INTO posts (title, content, created_at) VALUES
('Welcome to My Blog', 'This is my first blog post where I introduce myself and share my journey into web development. I''m excited to share my thoughts and experiences with you.', NOW() - INTERVAL '7 days'),
('Building Modern Web Applications', 'Today I want to talk about the latest trends in web development, including React, Next.js, and the importance of user experience in modern applications.', NOW() - INTERVAL '3 days'),
('The Future of AI in Development', 'Artificial Intelligence is revolutionizing how we build software. In this post, I explore the current state of AI tools and their impact on developers.', NOW() - INTERVAL '1 day');
