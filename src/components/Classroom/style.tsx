import styled from 'styled-components'

export const TabContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 16px;
  gap: 8px;
  margin-left: 40px;
`

export const TabButton = styled.button<{ $active: boolean }>`
  width: 180px;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  background: ${({ $active }) => ($active ? '#fff' : '#d0d0d0')};
  color: ${({ $active, theme }) => ($active ? theme.colors.blue : '#000')};
  box-shadow: ${({ $active }) => ($active ? '0px -2px 3px rgba(0, 0, 0, 0.1)' : 'none')};
  z-index: 2;
`

export const TabContent = styled.div`
  overflow-y: auto;
  background: #fff;
  border-radius: 16px;
  padding: 24px 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`

export const StudentListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`

export const StudentCard = styled.div<{ $isOnline: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid ${({ $isOnline, theme }) => ($isOnline ? theme.colors.blue : theme.colors.gray)};
  background: #fff;
`

export const StudentSeat = styled.div<{ $isOnline: boolean }>`
  background: ${({ $isOnline, theme }) => ($isOnline ? theme.colors.blue : theme.colors.gray)};
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 4px 0;
`

export const StudentName = styled.div<{ $isOnline: boolean }>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ $isOnline, theme }) => ($isOnline ? '#000' : theme.colors.gray)};
  padding: 16px 0;
  text-align: center;
`

export const ScoreControls = styled.div<{ $isOnline: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 16px;

  button {
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
  }

  button:disabled {
    cursor: not-allowed;
  }

  .minus {
    background: ${({ $isOnline, theme }) => ($isOnline ? '#dc3545' : theme.colors.gray)};
    color: #fff;
    width: 40px;
  }

  .plus {
    background: ${({ $isOnline, theme }) => ($isOnline ? '#28a745' : theme.colors.gray)};
    color: #fff;
    width: 40px;
  }

  .score {
    font-weight: bold;
    font-size: 18px;
    color: ${({ $isOnline, theme }) => ($isOnline ? '#000' : theme.colors.gray)};
  }
`
export const Divider = styled.div<{ $isOnline: boolean }>`
  width: 100%;
  height: 2px;
  background: ${({ $isOnline, theme }) => ($isOnline ? theme.colors.blue : theme.colors.gray)};
  margin: 0;
`

export const GroupListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const GroupContainer = styled.div`
  border-left: 6px solid ${({ theme }) => theme.colors.blue};
  background: #f0f4fb;
  padding: 16px 20px;
  border-radius: 12px;
`

export const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const GroupTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
`

export const GroupCount = styled.div`
  font-size: 14px;
  color: #666;
`

export const GroupMembers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  list-style: none;
`

export const MemberItem = styled.li<{ $isOnline: boolean }>`
  padding: 10px 16px;
  background: ${({ $isOnline, theme }) => ($isOnline ? '#fff' : theme.colors.gray)};
  color: ${({ $isOnline }) => ($isOnline ? '#333' : '#888')};
  border-radius: 8px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
`
