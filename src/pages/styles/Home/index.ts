import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`

export const Header = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 350px;
`

export const AddButton = styled(motion.button)`
  border: 0;
  background: ${({ theme }) => theme.colors.primary};
  width: 50px;
  height: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Tasks = styled(motion.ul)`
  margin-top: 20px;
  width: 350px;
`

export const Task = styled(motion.li)`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.taskBackground};
  border-radius: 8px;
  padding: 10px;

  margin-top: 10px;
  list-style: none;
  cursor: pointer;
`
export const TaskTitle = styled(motion.h1)`
  font-size: 18px;
`

export const TaskDescription = styled(motion.p)`
  font-size: 14px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.description};
`
