import { useState } from 'react';
import { VirtualList } from './components/VirtualList';
import type { Changer } from './utils/types';
import { RegularList } from './components/RegularList';
import { generateItems } from './utils/generateItems';
import { Container, Heading, ButtonGroup, ToggleButton } from './App.styles';

function App() {
  const [mode, setMode] = useState<Changer>('virtual');
  const items = generateItems(1000);
  
  return (
    <Container>
      <Heading>Сравнение списков</Heading>

      <ButtonGroup>
        <ToggleButton
          onClick={() => setMode('virtual')}
          active={mode === 'virtual'}
        >
          Виртуализированный список
        </ToggleButton>

        <ToggleButton
          onClick={() => setMode('regular')}
          active={mode === 'regular'}
        >
          Обычный список
        </ToggleButton>
      </ButtonGroup>

      {mode === 'virtual' ? (
        <VirtualList items={items} />
      ) : (
        <RegularList items={items} />
      )}
    </Container>
  );
}

export default App;
