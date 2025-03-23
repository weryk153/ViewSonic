import styled from 'styled-components'

export const MenuWrapper = styled.div`
  position: absolute;
  right: 40px;
`

export const MenuButton = styled.button`
  background: none;
  font-size: 32px;
  cursor: pointer;
  padding: 4px;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`

export const MenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 160px;
`

export const MenuItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px 16px;
  font-size: 14px;
  background: none;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`
