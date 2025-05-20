import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { faker } from '@faker-js/faker';
import { Content, Article } from './react-virtual.style';

const ARTICLE_COUNT = 100;
const OFFSET_TOP = 150;
const URL = `https://picsum.photos/seed/`;

const generateArticle = (i: number) => ({
  id: i,
  title: faker.lorem.sentence(),
  text: faker.lorem.paragraphs(3),
  image: `${URL}${i}/800/400`,
});

const articles = Array.from({ length: ARTICLE_COUNT }, (_, i) =>
  generateArticle(i),
);

export const VirtualPage = () => {
  const rowVirtualizer = useWindowVirtualizer({
    count: articles.length,
    estimateSize: () => 500,
    overscan: 5,
  });

  return (
    <Content
      style={{
        height: rowVirtualizer.getTotalSize() + OFFSET_TOP,
        paddingTop: OFFSET_TOP,
      }}
    >
      {rowVirtualizer.getVirtualItems().map(virtualRow => {
        const article = articles[virtualRow.index];
        return (
          <Article
            key={article.id}
            style={{
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.text}</p>
          </Article>
        );
      })}
    </Content>
  );
};
