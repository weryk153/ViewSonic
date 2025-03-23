import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { startMockSocket } from '@/mocks/mockSocket'
import { AppDispatch } from '@/store'
import { generateGroups } from '@/store/groupSlice'
import { fetchStudents, selectStudents } from '@/store/studentSlice'
import { ModalContainer, CloseButton } from '../Common'
import Menu from '../Menu'
import GroupList from './GroupList'
import StudentList from './StudentList'
import { Header, TabButton, TabContainer, TabContent } from './style'

const Index = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [activeTab, setActiveTab] = useState<'studentList' | 'groupList'>('studentList')
  const students = useSelector(selectStudents)
  const onlineStudents = students.filter((student) => student.isOnline)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    let stop: (() => void) | undefined

    dispatch(fetchStudents()).then((action) => {
      if (fetchStudents.fulfilled.match(action)) {
        const students = action.payload
        dispatch(generateGroups({ ids: students.map((s) => s.id) }))
        stop = startMockSocket(2000)
      }
    })

    return () => {
      stop?.()
    }
  }, [dispatch])

  return (
    <ModalContainer $bgColor="#e8e8e8" $padding="0px" $visible={isOpen}>
      <Header>
        302 Science 👥 {onlineStudents.length}/{students.length}
      </Header>
      <TabContainer>
        <TabButton $active={activeTab === 'studentList'} onClick={() => setActiveTab('studentList')}>
          Student List
        </TabButton>
        <TabButton $active={activeTab === 'groupList'} onClick={() => setActiveTab('groupList')}>
          Group
        </TabButton>
        <Menu />
      </TabContainer>
      <TabContent>
        {activeTab === 'studentList' && <StudentList />}
        {activeTab === 'groupList' && <GroupList />}
      </TabContent>
      <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
    </ModalContainer>
  )
}

export default Index
