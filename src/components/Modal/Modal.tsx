import React from 'react'
import ReactModal from 'react-modal'

interface Props {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly children: React.ReactNode
  readonly contentWidth?: string
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children, contentWidth = '90%' }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          display: 'grid',
          placeItems: 'center',
          zIndex: 100,
        },
        content: {
          backgroundColor: 'white',
          position: undefined,
          height: '75vh',
          width: contentWidth,
          maxWidth: 700
        }
      }}
    >
      {children}
    </ReactModal>
  )
}

export default Modal