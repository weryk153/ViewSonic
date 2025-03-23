import { useState } from 'react'
import { ModalContainer, CloseButton } from '@/components/Common'

const QRCode = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <ModalContainer $bgColor="#e8e8e8" $visible={isOpen}>
      {/* <BackButton onClick={() => console.log('Close Modal')}>{'< Back to Class List'}</BackButton> */}
      <h2>Join 302 Science</h2>
      <p>ID: X58E9647</p>
      {/* <QRCode>QR Code</QRCode> */}
      <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
    </ModalContainer>
  )
}

export default QRCode
