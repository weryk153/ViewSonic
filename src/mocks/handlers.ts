import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/students', () => {
    return HttpResponse.json([
      { id: 's3fa9', name: 'Philip', seatNumber: '01' },
      { id: 'b1x2z', name: 'Darrell', seatNumber: '02' },
      { id: 't98k1', name: 'Cody', seatNumber: '03' },
      { id: 'q7lm3', name: 'Bessie', seatNumber: '04' },
      { id: 'xv2er', name: 'Wendy', seatNumber: '05' },
      { id: 'np5gq', name: 'Esther', seatNumber: '06' },
      { id: 'ay9tj', name: 'Monica', seatNumber: '07' },
      { id: 'dk3wz', name: 'Ava', seatNumber: '08' },
      { id: 'vru04', name: 'Blake', seatNumber: '09' },
      { id: 'zpa18', name: 'Lucia', seatNumber: '10' },
      { id: 'oml32', name: 'Nathan', seatNumber: '11' },
      { id: 'wbq77', name: 'Sophie', seatNumber: '12' },
      { id: 'h91mz', name: 'Julian', seatNumber: '13' },
      { id: 'l4tko', name: 'Zoe', seatNumber: '14' },
      { id: 'e6vjd', name: 'Finn', seatNumber: '15' },
      { id: 'mxa5n', name: 'Amelia', seatNumber: '16' },
      { id: 'j0kzi', name: 'Noah', seatNumber: '17' },
      { id: 'i9utq', name: 'Mia', seatNumber: '18' },
      { id: 'r7bx2', name: 'Leo', seatNumber: '19' },
      { id: 'cf1lu', name: 'Luna', seatNumber: '20' },
      { id: 'd8ykj', name: 'Isaac', seatNumber: '21' },
      { id: 'u2nq0', name: 'Ellie', seatNumber: '22' },
      { id: 'k6wze', name: 'Miles', seatNumber: '23' },
      { id: 'n58xo', name: 'Aria', seatNumber: '24' },
      { id: 'gu92j', name: 'Ken', seatNumber: '25' },
      { id: 'twx4a', name: 'Andy', seatNumber: '26' },
      { id: 'bap9e', name: 'Mars', seatNumber: '27' },
      { id: 'z48yu', name: 'PoPo', seatNumber: '28' },
      { id: 'yro11', name: 'Kim', seatNumber: '29' },
      { id: 'rkn35', name: 'Van', seatNumber: '30' },
    ])
  }),
]
