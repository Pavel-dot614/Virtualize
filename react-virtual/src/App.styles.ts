import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ButtonGroup = styled.div`
  margin-bottom: 16px;
`;

export const ToggleButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#b88e2f' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border: none;
  padding: 8px 16px;
  margin-right: 8px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) => (active ? '#a97f29' : '#ddd')};
  }
`;