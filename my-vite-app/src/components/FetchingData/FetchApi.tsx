import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, CircularProgress, Box } from '@mui/material'; // Importing MUI components

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
  id: number;
  title: string;
  body: string;
}

function FetchApi() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // To track loading state
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState<number>(1); // Page starts from 1
  const [totalPages, setTotalPages] = useState<number>(1); // To track total pages for pagination
  const postsPerPage = 10; // Limit to 10 posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response: Response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${postsPerPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Get total count from response headers for pagination purposes
        const totalPosts = response.headers.get('X-Total-Count');
        setTotalPages(totalPosts ? Math.ceil(Number(totalPosts) / postsPerPage) : 1);

        const posts = await response.json() as Post[];
        setPosts(posts);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();  // Fetch posts whenever the page number changes
  }, [page]); // Dependency on 'page' so it runs whenever page changes

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Data Fetching from React (Pagination)
      </Typography>

      <Button variant="contained" color="primary" onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous Page
      </Button>
      <Button variant="contained" color="primary" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
        Next Page
      </Button>

      <Typography variant="h6">Page: {page}</Typography>

      {loading && <CircularProgress />}

      {error && <Typography color="error">{`Error: ${error}`}</Typography>}

      <Box>
        <ul>
          {posts.map((post) => (
            <Box key={post.id} sx={{ marginBottom: 2 }}>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body1">{post.body}</Typography>
            </Box>
          ))}
        </ul>
      </Box>
    </Container>
  );
}

export default FetchApi;
