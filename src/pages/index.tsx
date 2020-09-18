import React from 'react'
import Head from 'next/head'
import { FiPlus } from 'react-icons/fi'

import { fadeInUp, stagger } from './animations'

import {
  Container,
  Header,
  AddButton,
  Tasks,
  Task,
  TaskTitle,
  TaskDescription
} from './styles/Home'
import { useAnimation } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'Tasks: Cafe da manhã',
    description: 'Fazer o cafe da manhã'
  },
  { id: 2, title: 'Tasks: Almoço', description: 'Fazer o almoço' },
  { id: 3, title: 'Tasks: Lanche', description: 'Fazer o lanche' },
  { id: 4, title: 'Tasks: Janta', description: 'Fazer a janta' }
]

const Home: React.FC = () => {
  const controls = useAnimation()

  return (
    <div>
      <Head>
        <title>Tasks | by GustavoSouza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Header variants={fadeInUp}>
          <h1>Tasks</h1>

          <AddButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FiPlus size={18} />
          </AddButton>
        </Header>

        <main>
          <Tasks variants={stagger}>
            {items.map(item => (
              <Task
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                key={item.id}
              >
                <TaskTitle>{item.title}</TaskTitle>
                <TaskDescription>{item.description}</TaskDescription>
              </Task>
            ))}
          </Tasks>
        </main>
      </Container>
    </div>
  )
}

export default Home
