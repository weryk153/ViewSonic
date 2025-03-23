import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/store'
import { selectStudents, updateScore } from '@/store/studentSlice'
import { ScoreControls, StudentCard, StudentSeat, StudentListContainer, StudentName, Divider } from './style'

const StudentList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const students = useSelector(selectStudents)

  const handleUpdateScore = (id: string, delta: number) => {
    dispatch(updateScore({ id, delta }))
  }

  return (
    <StudentListContainer>
      {students.map((student) => (
        <StudentCard key={student.id} $isOnline={student.isOnline}>
          <StudentSeat $isOnline={student.isOnline}>{String(student.seatNumber).padStart(2, '0')}</StudentSeat>
          <StudentName $isOnline={student.isOnline}>{student.isOnline ? student.name : 'Guest'}</StudentName>
          <Divider $isOnline={student.isOnline} />
          <ScoreControls $isOnline={student.isOnline}>
            <button className="minus" disabled={!student.isOnline} onClick={() => handleUpdateScore(student.id, -1)}>
              - 1
            </button>
            <span className="score">{student.score}</span>
            <button className="plus" disabled={!student.isOnline} onClick={() => handleUpdateScore(student.id, 1)}>
              + 1
            </button>
          </ScoreControls>
        </StudentCard>
      ))}
    </StudentListContainer>
  )
}

export default StudentList
