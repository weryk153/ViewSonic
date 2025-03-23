import { useState } from 'react'
import { FiCopy } from 'react-icons/fi'
import { QRCodeSVG } from 'qrcode.react'
import { ModalContainer, CloseButton, Header, CopyButton, Toast } from '@/components/Common/style'
import { BackButton, InfoBlock, InfoRow, QRCodeWrapper, Version } from './style'

const QRCode = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [copied, setCopied] = useState('')

  const classID = 'X58E9647'
  const classLink = 'https://www.classswift.viewsonic.io/'

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(''), 2000)
  }
  return (
    <ModalContainer $bgColor="#eeeeee" $visible={isOpen} $padding="24px 40px">
      <BackButton onClick={() => setIsOpen(false)}>{'< Back to Class List'}</BackButton>
      <Header>Join 302 Science</Header>
      <InfoBlock>
        <InfoRow>
          <span>ID: {classID}</span>
          <CopyButton onClick={() => handleCopy(classID, 'ID')}>
            <FiCopy size={16} color="#fff" />
          </CopyButton>
        </InfoRow>
        <InfoRow>
          <span>Link</span>
          <CopyButton onClick={() => handleCopy(classLink, 'Link')}>
            <FiCopy size={16} color="#fff" />
          </CopyButton>
        </InfoRow>
      </InfoBlock>
      <QRCodeWrapper>
        <QRCodeSVG value={classLink} />
      </QRCodeWrapper>
      <Version>Version 1.1.7</Version>
      <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
      {copied && <Toast>{copied} copied!</Toast>}
    </ModalContainer>
  )
}

export default QRCode
