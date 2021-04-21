import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <p>404</p>
      <p>oopsie! the page you're looking for does not exist</p>
      <Link to="/">Go Home</Link>
    </Layout>
  );
};

export default NotFoundPage;
