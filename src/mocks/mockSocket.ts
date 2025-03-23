import store from '@/store'
import { setOnlineStatus } from '@/store/studentSlice'

const studentIds = [
  's3fa9',
  'b1x2z',
  't98k1',
  'q7lm3',
  'xv2er',
  'np5gq',
  'ay9tj',
  'dk3wz',
  'vru04',
  'zpa18',
  'oml32',
  'wbq77',
  'h91mz',
  'l4tko',
  'e6vjd',
  'mxa5n',
  'j0kzi',
  'i9utq',
  'r7bx2',
  'cf1lu',
  'd8ykj',
  'u2nq0',
  'k6wze',
  'n58xo',
  'gu92j',
  'twx4a',
  'bap9e',
  'z48yu',
  'yro11',
  'rkn35',
]

const randomOnlineStatusChange = () => {
  const randomId = studentIds[Math.floor(Math.random() * studentIds.length)]
  const isOnline = Math.random() > 0.5

  store.dispatch(setOnlineStatus({ id: randomId, isOnline }))
}

export const startMockSocket = (interval = 5000) => {
  const timer = setInterval(() => {
    randomOnlineStatusChange()
  }, interval)

  return () => clearInterval(timer)
}
