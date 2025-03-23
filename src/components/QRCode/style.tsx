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
`

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  gap: 12px;
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
  text-align: center;
  font-size: 12px;
  color: #888;
`
