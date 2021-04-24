import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import ColorWord from '../components/color-word';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const ProjectTemplate = ({ data }) => {
  const { html, frontmatter } = data.project;
  const otherProjects = data.otherProjects.nodes;

  return (
    <Layout title={frontmatter.title.toLowerCase()}>
      <Fade>
        <ColorWord color="grey">
          <Link to="/">Go Back Home</Link>
        </ColorWord>

        <Title>{frontmatter.title}</Title>
        <p>{frontmatter.description}</p>

        <table>
          <tbody>
            <tr>
              <th>
                <ColorWord color="grey">stack:</ColorWord>
              </th>
              <td>
                <ColorWord color="orange">
                  <Stack>
                    {frontmatter.stack.map((stack) => {
                      return <span key={stack}>{stack}</span>;
                    })}
                  </Stack>
                </ColorWord>
              </td>
            </tr>

            <tr>
              <th>
                <ColorWord color="grey">code:</ColorWord>
              </th>
              <td>
                <ColorWord color="green">
                  <a href={frontmatter.code}>github repo</a>
                </ColorWord>
              </td>
            </tr>

            <tr>
              <th>
                <ColorWord color="grey">live:</ColorWord>
              </th>
              <td>
                <ColorWord color="green">
                  <a href={frontmatter.live}>live site</a>
                </ColorWord>
              </td>
            </tr>
          </tbody>
        </table>

        <ProjectContent dangerouslySetInnerHTML={{ __html: html }} />

        <OtherProjects>
          <ColorWord color="grey">i also built</ColorWord>{' '}
          {otherProjects.map((project) => {
            return (
              <ColorWord color="blue" key={project.fields.slug}>
                <Link to={project.fields.slug}>
                  {project.frontmatter.title}
                </Link>
              </ColorWord>
            );
          })}
        </OtherProjects>
      </Fade>
    </Layout>
  );
};

export default ProjectTemplate;

const Title = styled.h1`
  font-size: var(--size-700);
`;

const Stack = styled.div`
  span:not(:last-child):after {
    content: ', ';
  }
`;

const OtherProjects = styled.nav`
  padding-top: var(--size-900);
  text-transform: lowercase;

  span:not(:first-child):not(:last-child):after {
    content: ', ';
  }
`;

const ProjectContent = styled.section`
  padding-top: var(--size-800);

  & > * + * {
    margin-top: var(--size-300);
  }

  & > p + p {
    margin-top: var(--size-600);
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: var(--size-800);
  }

  h1 {
    font-size: var(--size-700);
  }

  h2 {
    font-size: var(--size-600);
  }

  h3 {
    font-size: var(--size-500);
  }

  img {
    border: 10px solid hsla(7, 100%, 95%, 1);
  }
`;

export const query = graphql`
  query($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        stack
        code
        live
      }
    }
    otherProjects: allMarkdownRemark(
      filter: { fields: { slug: { ne: $slug } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;
