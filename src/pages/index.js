import React from 'react';
import Layout from '../components/layout';
import ColorWord from '../components/color-word';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <p>
          <ColorWord color="grey">hello, world!</ColorWord>
        </p>
        <p>
          my name is <ColorWord color="pink">yinka adedire</ColorWord>
        </p>

        <p>
          on the internet, i go by <ColorWord color="pink">yinkakun</ColorWord>{' '}
          [yinka <ColorWord color="grey">my first name</ColorWord> + kun{' '}
          <ColorWord color="grey">
            japanese honorific for young males,
          </ColorWord>{' '}
          get it?]
        </p>

        <p>
          i'm a self-taught frontend developer interested in{' '}
          <ColorWord color="orange">jamstack</ColorWord>{' '}
        </p>

        <p>
          my love of beautiful websites made me curious about how they were
          made. after lots of googling, i discovered web development which led
          to my interest in frontend development. since then, i've been honing
          my skills and building projects to apply what i've learnt.
        </p>

        <p>
          my technical skills includes
          <ColorWord color="orange">
            {' '}
            html & css, javascript, react, gatsby, eleventy
          </ColorWord>
        </p>

        <p>
          i built <ColorWord color="yellow">eleventy-duo</ColorWord>, a minimal
          & beautiful personal <ColorWord color="orange">gatsbyjs</ColorWord>{' '}
          blog starter with a nice glassmorphism ui coupled with{' '}
          <ColorWord color="orange">netlify cms</ColorWord> for content
          management -{' '}
          <ColorWord color="blue">
            <Link to="/gatsby-starter-glass">view project</Link>
          </ColorWord>
        </p>

        <p>
          i built <ColorWord color="yellow">gatsby-starter-glass</ColorWord>, a
          minimal & beautiful personal{' '}
          <ColorWord color="orange">gatsbyjs</ColorWord> blog starter with a
          nice glassmorphism ui coupled with{' '}
          <ColorWord color="orange">netlify cms</ColorWord> for content
          management -{' '}
          <ColorWord color="blue">
            <Link to="/gatsby-starter-glass">view project</Link>
          </ColorWord>
        </p>

        <p>
          i built <ColorWord color="yellow"> planthome</ColorWord>, an
          e-commerce landing page for a fictitious plant selling company. built
          with <ColorWord color="orange">gatsbyjs</ColorWord> and coupled with{' '}
          <ColorWord color="orange">sanity cms </ColorWord>
          for content management -{' '}
          <ColorWord color="blue">
            <Link to="/planthome">view project</Link>
          </ColorWord>
        </p>
        <p>
          i've built a few other cool stuffs too, checkout{' '}
          <ColorWord color="green">
            <a href="https://github.com/yinkakun">my github</a>
          </ColorWord>
        </p>
        <p>
          you can{' '}
          <ColorWord color="green">
            <a href="https://docs.google.com">have a look at my resume here</a>
          </ColorWord>
        </p>

        <p>
          you can email me at{' '}
          <ColorWord color="green">
            <a href="mailto:yinkakun@gmail.com">yinkakun@gmail.com</a>
          </ColorWord>{' '}
          or dm me on the{' '}
          <ColorWord color="green">
            <a href="https://twitter.com/yinkakun">bird app</a>
          </ColorWord>
        </p>

        <p>
          apart from tech, i like to watch animes, binge watch tv series, read
          novels.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
