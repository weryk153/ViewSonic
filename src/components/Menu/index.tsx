import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/store'
import { generateGroups, resetGroups } from '@/store/groupSlice'
import { resetScores, selectStudents } from '@/store/studentSlice'
import { MenuButton, MenuDropdown, MenuItem, MenuWrapper } from './style'

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch<AppDispatch>()
  const students = useSelector(selectStudents)

  const handleResetScores = () => {
    dispatch(resetScores())
    setIsMenuOpen(false)
  }

  const handleShuffleGroups = () => {
    dispatch(generateGroups({ ids: students.map((s) => s.id) }))
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <MenuWrapper ref={menuRef}>
      <MenuButton onClick={() => setIsMenuOpen((prev) => !prev)}>⋮</MenuButton>
      {isMenuOpen && (
        <MenuDropdown>
          <MenuItem onClick={handleResetScores}>重置分數</MenuItem>
          <MenuItem onClick={handleShuffleGroups}>重新分組</MenuItem>
        </MenuDropdown>
      )}
    </MenuWrapper>
  )
}

export default Index
