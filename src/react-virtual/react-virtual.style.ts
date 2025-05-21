import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 570px;
`;

const Article = styled.div`
  position: absolute;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;

  img {
    width: 75%;
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 8px;
  }
`;

export { Content, Article };
