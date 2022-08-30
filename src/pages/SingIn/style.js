import styled from 'styled-components'

import imageBackground from '../../assets/cinema.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: stretch;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  justify-content: center;

  margin: 0 136px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 48px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-size: 14px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 24px;

    padding: 48px 0;
  }

  > svg {
    width: 20px;
    height: 20px;
  }

  > button {
    margin-top: 24px;
  }

  > a {
    margin-top: 42px;
    text-align: center;
  }
`
export const ImageBackground = styled.div`
  flex: 1;
  background: url(${imageBackground}) center no-repeat no-repeat;
  background-size: cover;
`
