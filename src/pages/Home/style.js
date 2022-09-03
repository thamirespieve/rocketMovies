import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  padding: 50px 106px 50px 120px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 37px;
    h1 {
      font-size: 32px;
    }
  }
`

export const AddMovie = styled(Link)`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
  background: ${({ theme }) => theme.COLORS.PINK};
  padding: 14px 32px;

  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 8px;
`
