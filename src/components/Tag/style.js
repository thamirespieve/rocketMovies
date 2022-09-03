import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  padding: 16px;

  > span {
    display: flex;
    align-items: center;
    gap: 16px;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      width: 22px;
      height: 24px;
    }

    cursor: pointer;
  }

  .button-add {
    background: transparent;
    border: 2px dashed ${({ theme }) => theme.COLORS.GRAY_99};
    color: ${({ theme }) => theme.COLORS.GRAY_99};
    border-radius: 10px;

    padding: 18.5px 16px;
  }
  .button-delete {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    border-radius: 10px;

    padding: 18.5px 16px;
  }
`
