import React, { ReactNode, useRef } from 'react'

interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
  modalWidth?: string;
}
const Modal: React.FC<ModalProps> = ({ children, modalWidth }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <div className="modalContainer">
      <div
        className={`modalContent ${modalWidth}`}
        ref={modalRef}>
        {children}
      </div>
    </div>
  )
}

export default Modal
