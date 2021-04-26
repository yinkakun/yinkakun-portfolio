import React from 'react';
import Layout from '../components/layout';
import ColorWord from '../components/color-word';
import { graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const IndexPage = ({ data }) => {
  const projects = data.projects.nodes;

  return (
    <Layout
      title="Frontend Developer from Nigeria"
      description="Porfolio site of Yinka Adedire, Frontend Developer from Nigeria"
    >
      <Fade bottom>
        <p>
          <ColorWord color="grey">
            hello, world!{' '}
            <span role="img" aria-label="sparkle emoji">
              🚀
            </span>{' '}
          </ColorWord>
        </p>

        <h1>
          <p>
            my name is <ColorWord color="pink">yinka adedire</ColorWord>
          </p>
          <p>
            i'm a <ColorWord color="orange">frontend developer </ColorWord>
            <ColorWord color="grey">from nigeria.</ColorWord>
          </p>
        </h1>

        <p>
          on the internet, i go by <ColorWord color="pink">yinkakun</ColorWord>{' '}
          [yinka <ColorWord color="grey">my first name</ColorWord> + kun{' '}
          <ColorWord color="grey">
            japanese honorific for young males,
          </ColorWord>{' '}
          get it?]
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
            html & css, javascript, react, gatsby, eleventy, git, graphql
          </ColorWord>
        </p>

        {projects.map(({ frontmatter, fields }) => {
          return (
            <p key={fields.slug}>
              i built <ColorWord color="yellow">{frontmatter.title}</ColorWord>{' '}
              - {frontmatter.description}{' '}
              <ColorWord color="blue">
                <ProjectLink to={fields.slug}>{`>>> `}view project</ProjectLink>
              </ColorWord>
            </p>
          );
        })}

        <p>
          i've built a few other cool stuffs too, checkout{' '}
          <ColorWord color="green">
            <a href="https://github.com/yinkakun">my github</a>
          </ColorWord>
        </p>
        <p>
          you can{' '}
          <ColorWord color="green">
            <a href="/yinka-adedire's-resume.pdf">
              have a look at my resume here
            </a>
          </ColorWord>
        </p>
        <p>
          you can email me at{' '}
          <ColorWord color="green">
            <a href="mailto:yinkakun@gmail.com">yinkakun@gmail.com</a>
          </ColorWord>{' '}
          or dm me on{' '}
          <ColorWord color="green">
            <a href="https://twitter.com/yinkakun">twitter</a>
          </ColorWord>
        </p>
        <p>
          apart from tech, i like to watch animes, binge watch tv series, read
          novels.
        </p>
        <p>
          <ColorWord color="grey">
            created with 'vibes and insha allah' by{' '}
            <ColorWord color="green">
              <a href="https://twitter.com/yinkakun">yinka adedire</a>
            </ColorWord>{' '}
            with gatsbyjs for static site generation, the slide up animation
            with react-reveal, styled using styled-components and the font
            family, 'ibm plex mono' from google fonts. you can checkout{' '}
            <ColorWord color="green">
              <a href="https://github.com/yinkakun/yinkakun-portfolio">
                the sourcecode
              </a>
            </ColorWord>{' '}
            <span role="img" aria-label="sparkle emoji">
              ✨
            </span>
          </ColorWord>
        </p>
      </Fade>
    </Layout>
  );
};

export default IndexPage;

const ProjectLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
  font-size: 0.9em;
  transition: color 300ms;
  color: #f2690f;

  &:hover {
    color: pink;
  }
`;

export const query = graphql`
  query {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;
