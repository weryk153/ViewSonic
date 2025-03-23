import { useSelector } from 'react-redux'
import { selectGroups } from '@/store/groupSlice'
import { selectStudents } from '@/store/studentSlice'
import {
  GroupListWrapper,
  GroupContainer,
  GroupTitle,
  GroupCount,
  GroupHeader,
  GroupMembers,
  MemberItem,
} from './style'

const GroupList = () => {
  const groups = useSelector(selectGroups)
  const students = useSelector(selectStudents)
  const getStudentById = (id: string) => students.find((s) => s.id === id)

  return (
    <GroupListWrapper>
      {groups.map((group, i) => (
        <GroupContainer key={i}>
          <GroupHeader>
            <GroupTitle>Group {i + 1}</GroupTitle>
            <GroupCount>
              {group.filter((id) => students.find((s) => s.id === id)?.isOnline).length}/{group.length}
            </GroupCount>
          </GroupHeader>
          <GroupMembers>
            {group.map((id) => {
              const student = getStudentById(id)
              return (
                <MemberItem key={id} $isOnline={!!student?.isOnline}>
                  {student?.isOnline ? student.name : 'Guest'}
                </MemberItem>
              )
            })}
          </GroupMembers>
        </GroupContainer>
      ))}
    </GroupListWrapper>
  )
}

export default GroupList
