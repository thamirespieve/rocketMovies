import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LINE_HEADER};

  display: flex;

  justify-content: space-around;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    margin-left: 136px;
    margin-right: 64px;
  }
`
export const Profile = styled.div`
  > main {
    display: flex;
    justify-content: end;
    margin-left: 64px;
    margin-right: 123px;
    align-items: center;

    width: 250px;

    div {
      display: flex;
      flex-direction: column;
      align-items: end;
      h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 700;
        font-size: 14px;

        cursor: pointer;
      }

      button {
        color: ${({ theme }) => theme.COLORS.GRAY_99};
        font-size: 14px;

        width: 40px;

        border: none;

        background-color: transparent;
      }
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_99};
      font-size: 14px;
      text-align: end;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-left: 10px;

      cursor: pointer;
    }
  }
`
