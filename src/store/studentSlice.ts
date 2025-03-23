import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

export interface Student {
  id: string
  name: string
  seatNumber: string
  score: number
  isOnline: boolean
}

interface StudentState {
  students: Student[]
  loading: boolean
  error: string | null
}

const initialState: StudentState = {
  students: [],
  loading: false,
  error: null,
}

export const fetchStudents = createAsyncThunk<Student[]>('student/fetchStudents', async () => {
  const res = await fetch('/api/students')
  const data = await res.json()

  return data.map((student: Omit<Student, 'score' | 'isOnline'>) => ({
    ...student,
    score: 0,
    isOnline: false,
  }))
})

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    updateScore: (state, action: PayloadAction<{ id: string; delta: number }>) => {
      const student = state.students.find((s) => s.id === action.payload.id)
      if (!student || !student.isOnline) return

      const nextScore = student.score + action.payload.delta

      if (nextScore >= 0) {
        student.score = nextScore
      }
    },
    setOnlineStatus: (state, action: PayloadAction<{ id: string; isOnline: boolean }>) => {
      const student = state.students.find((s) => s.id === action.payload.id)
      if (student) {
        student.isOnline = action.payload.isOnline
      }
    },
    resetScores: (state) => {
      state.students.forEach((s) => {
        s.score = 0
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload
        state.loading = false
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch students'
      })
  },
})

export const { updateScore, setOnlineStatus, resetScores } = studentSlice.actions

export default studentSlice.reducer

export const selectStudents = (state: RootState) => state.students.students
