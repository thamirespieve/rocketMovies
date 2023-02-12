import styled from 'styled-components'

export const Container = styled.div`
  /* margin-top: 40px; */
  padding: 40px 123px 0;
`

export const Form = styled.form`
  > h1 {
    font-weight: 500;
    font-size: 36px;

    margin-top: 24px;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    gap: 40px;
  }

  > textarea {
    width: 100%;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme }) => theme.COLORS.GRAY_99};

    border: none;
    border-radius: 10px;

    padding: 19px 16px;
    margin: 40px 0;

    resize: none;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_91};
    margin-bottom: 24px;
  }

  > section {
    display: flex;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT_0F};

    margin-bottom: 40px;

    border-radius: 8px;
  }

  .tags {
    padding: 16px;
    gap: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .buttons {
    display: flex;
    font-weight: 500;

    margin-bottom: 20px;
  }

  .deleteButton {
    color: ${({ theme }) => theme.COLORS.PINK};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT_0F};
  }
`
