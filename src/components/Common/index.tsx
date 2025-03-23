import styled, { css, keyframes } from 'styled-components'
import bgImage from '@/assets/bg.png'

export const Container = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 16px;
  padding: 16px;
  height: 100vh;
`

export const ModalContainer = styled.div<{ $bgColor?: string; $padding?: string; $visible: boolean }>`
  background: ${({ $bgColor }) => $bgColor || 'white'};
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: ${({ $padding }) => $padding || '20px'};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  animation: ${({ $visible }) =>
    $visible &&
    css`
      ${fadeIn} 0.3s ease
    `};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
