import styled from 'styled-components'
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
  background: ${({ $bgColor }) => $bgColor || '#fff'};
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
export const Header = styled.div<{ $padding?: string }>`
  font-size: 24px;
  font-weight: bold;
  padding: ${({ $padding }) => $padding || '0'};
`

export const CopyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export const Toast = styled.div`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  opacity: 0.95;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`
