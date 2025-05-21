import { useState, useMemo } from 'react';
import { VirtualList } from './react-window/VirtualList';
import type { Changer } from './utils/types';
import { RegularList } from './react-window/RegularList';
import { generateItems } from './utils/generateItems';
import { Container, Heading, ButtonGroup, ToggleButton } from './App.styles';
import { VirtualPage } from './react-virtual/VirtualListRV';

function App() {
  const [mode, setMode] = useState<Changer>('virtual');
  const items = useMemo(() => generateItems(1000), []);

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

        <ToggleButton
          onClick={() => setMode('virtual-page')}
          active={mode === 'virtual-page'}
        >
          Виртуализированная страница
        </ToggleButton>
      </ButtonGroup>

      {mode === 'virtual' && <VirtualList items={items} />}
      {mode === 'regular' && <RegularList items={items} />}
      {mode === 'virtual-page' && <VirtualPage />}
    </Container>
  );
}

export default App;
