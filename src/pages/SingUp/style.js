import styled from 'styled-components'

import backgroundImage from '../../assets/cinema.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 136px;

  > h1 {
    font-weight: 700;
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 48px 0;
  }

  > button {
    margin-top: 16px;
    margin-bottom: 42px;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
  }
`

export const BackgroundImage = styled.div`
  flex: 1;
  background: url(${backgroundImage}) center no-repeat no-repeat;
  background-size: cover;
`
