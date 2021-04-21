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
          i'm a frontend developer interested in{' '}
          <ColorWord color="orange">jamstack</ColorWord>{' '}
        </p>
        <p>
          my technical skills includes
          <ColorWord color="orange">
            {' '}
            html & css, javascript, react, git, gatsby, styled-components
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
          you can have a look at my resume{' '}
          <ColorWord color="green">
            <a href="https://docs.google.com">here</a>
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
        {/* <p>
          my love of beautiful websites made discover web development which led
          to my interest in frontend development in 2019.
        </p>
        <p>
          apart from tech, i like animes, binge watch netflix series, novels.
        </p> */}

        {/* <p>
          i named myself yinkakun - yinka [my first name] + kun [japanese
          honorific for young males], get it?
        </p> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
