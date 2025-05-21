import type { Item } from '../utils/types';
import { ItemWrapper, ListWrapper } from './styles';

type Props = {
  items: Item[];
};

export const RegularList = ({ items }: Props) => {
  return (
    <ListWrapper>
    <div>
      {items.map(item => (
        <ItemWrapper key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            width={150}
            height={150}
          />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </ItemWrapper>
      ))}
    </div>
    </ListWrapper>
  );
};