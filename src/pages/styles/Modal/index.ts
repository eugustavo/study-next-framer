import styled from 'styled-components'
import { motion } from 'framer-motion'

interface ButtonProps {
  cancel?: boolean
}

export const Container = styled(motion.div)`
  width: 600px;
  height: 350px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.taskBackground};
  position: absolute;

  display: flex;
  flex-direction: column;
  padding: 40px;
`

export const InputTitle = styled.input`
  height: 50px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  border: 0;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 10px;
  font-family: 'Roboto';
  font-size: 16px;
`

export const InputDescription = styled.textarea`
  border: 0;
  width: 100%;
  height: 140px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Roboto';
  padding: 10px;
  font-size: 16px;
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const Button = styled(motion.button)<ButtonProps>`
  height: 50px;
  border: 0;
  width: 100%;
  margin-right: 5px;
  margin-left: ${props => (props.cancel ? '5px' : 0)};
  border-radius: 4px;
  background: ${props =>
    props.cancel ? props.theme.colors.cancel : props.theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: 10px;
  cursor: pointer;
`
