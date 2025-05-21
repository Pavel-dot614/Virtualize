import { faker } from '@faker-js/faker';
import type { Item } from './types';

export const generateItems = (count: number): Item[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: faker.commerce.productName(),
    image: `https://picsum.photos/id/${i % 100}/150/150`,
    description: faker.commerce.productDescription(),
  }));
