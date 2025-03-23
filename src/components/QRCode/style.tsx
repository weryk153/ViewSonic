import styled from 'styled-components'

export const BackButton = styled.button`
  background: none;
  margin: 12px 0;
  cursor: pointer;
  text-align: left;
`

export const InfoBlock = styled.div`
  display: flex;
  gap: 40px;
  margin: 16px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 8px;
  }
`

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: flex-start;
  }
`

export const QRCodeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px;

  svg {
    width: 100%;
    height: auto;
  }
`

export const Version = styled.p`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #888;
  text-align: center;
`
