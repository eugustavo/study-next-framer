import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { items } from '../../data'

import {
  Container,
  InputTitle,
  InputDescription,
  Buttons,
  Button
} from '../../pages/styles/Modal'

interface ModalProps {
  toggle: () => void
}

const Modal: React.FC<ModalProps> = ({ toggle }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    const item = {
      id: 1,
      title: title,
      description: description
    }

    items.push(item)
    toggle()
  }

  const handleCancel = () => {
    toggle()
  }

  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
        style={{}}
      >
        <InputTitle
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Nome da task"
        />
        <InputDescription
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Descrição da task"
        />

        <Buttons>
          <Button onClick={handleSubmit}>Salvar task</Button>
          <Button cancel onClick={handleCancel}>
            Cancelar
          </Button>
        </Buttons>
      </Container>
    </AnimatePresence>
  )
}

export default Modal
