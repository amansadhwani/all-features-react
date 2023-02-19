//reference https://www.youtube.com/watch?v=IYCa1F-OWmk


import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const CustomPagination: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: Post[] = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate: (pageNumber: number) => void = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <Posts posts={currentPosts} loading={loading} />
      <br/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

interface PostsProps {
  posts: Post[];
  loading: boolean;
}

const Posts: React.FC<PostsProps> = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
    
  );
};

export default CustomPagination;
