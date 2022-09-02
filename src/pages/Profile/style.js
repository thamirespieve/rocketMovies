import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > header {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    gap: 10px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_PROFILE};
    color: ${({ theme }) => theme.COLORS.PINK};

    padding-left: 144px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 500px;
  margin-right: 500px;

  > div:nth-child(3) {
    margin-bottom: 24px;
  }

  button {
    margin-top: 24px;
    width: 100%;
  }
`

export const Avatar = styled.div`
  margin: -80px auto 32px;
  position: relative;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    background: ${({ theme }) => theme.COLORS.PINK};

    padding: 14px;

    border-radius: 50%;

    position: absolute;
    bottom: 10px;
    right: 0px;

    cursor: pointer;
    svg {
      justify-self: center;
      width: 25px;
      height: 25px;
    }

    input {
      display: none;
    }
  }
`
