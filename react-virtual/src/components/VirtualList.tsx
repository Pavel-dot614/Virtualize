import { FixedSizeList as List } from 'react-window';
import type { ListChildComponentProps } from 'react-window';
import type { Item } from '../utils/types';
import { ItemWrapper } from './styles';

type Props = {
  items: Item[];
};

const Row = ({ index, style, data }: ListChildComponentProps) => {
  const item: Item = data[index];
  return (
    <ItemWrapper style={style}>
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
  );
};

export const VirtualList = ({ items }: Props) => {
  return (
    <List
      height={750}
      itemCount={items.length}
      itemSize={180}
      width="100%"
      itemData={items}
    >
      {Row}
    </List>
  );
};
