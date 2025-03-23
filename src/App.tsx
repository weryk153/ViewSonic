import Classroom from './components/Classroom'
import { Container } from './components/Common/style'
import QRCode from './components/QRCode'

const App = () => {
  return (
    <Container>
      <QRCode />
      <Classroom />
    </Container>
  )
}

export default App
