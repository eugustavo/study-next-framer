import React, { useState } from 'react'
import Head from 'next/head'
import { FiPlus } from 'react-icons/fi'

import { fadeInUp, stagger } from './animations'
import { items } from '../data'
import Modal from '../components/Modal'

import { useMotionValue, useTransform } from 'framer-motion'

import {
  Container,
  Header,
  AddButton,
  Tasks,
  Task,
  TaskInformation,
  TaskTitle,
  TaskDescription
} from './styles/Home'

const Home: React.FC = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ['rgb(255, 0, 0)', 'rgb(32, 32, 36)', 'rgb(3, 179, 0)']
  )

  const Toggle = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <>
      <Head>
        <title>Tasks | by GustavoSouza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Header variants={fadeInUp}>
          <h1>Tasks</h1>

          <AddButton
            whileHover={{ scale: 1.05, rotate: 180, borderRadius: '50%' }}
            whileTap={{ scale: 0.95 }}
            onClick={Toggle}
          >
            <FiPlus size={18} />
          </AddButton>
        </Header>

        <main>
          <Tasks variants={stagger}>
            {items.map(item => (
              <Task
                key={item.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
              >
                <TaskInformation
                  style={{ x, background }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                >
                  <TaskTitle>{item.title}</TaskTitle>
                  <TaskDescription>{item.description}</TaskDescription>
                </TaskInformation>
              </Task>
            ))}
          </Tasks>
        </main>
        {toggleModal && <Modal toggle={Toggle} />}
      </Container>
    </>
  )
}

export default Home
