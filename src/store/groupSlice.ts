import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

interface GroupState {
  groups: string[][]
}

const initialState: GroupState = {
  groups: [],
}

const shuffle = <T>(arr: T[]): T[] => {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    generateGroups: (state, action: PayloadAction<{ ids: string[] }>) => {
      const shuffled = shuffle(action.payload.ids)
      const grouped: string[][] = []
      for (let i = 0; i < shuffled.length; i += 5) {
        grouped.push(shuffled.slice(i, i + 5))
      }
      state.groups = grouped
    },
  },
})

export const { generateGroups } = groupSlice.actions
export const selectGroups = (state: RootState) => state.groups.groups

export default groupSlice.reducer
