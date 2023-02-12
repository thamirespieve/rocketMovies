import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.GRAY_99};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_99}` : 'none'};

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    > svg {
      width: 22px;
      height: 24px;
    }
  }

  /* .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  } */

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_99};
    }
  }
`

// > svg {
//   color: ${({ theme }) => theme.COLORS.PINK};
//   width: 22px;
//   height: 24px;
// }

// .button-add {
//   background: transparent;
//   border: 2px dashed ${({ theme }) => theme.COLORS.GRAY_99};
//   color: ${({ theme }) => theme.COLORS.GRAY_99};
//   border-radius: 10px;

//   padding: 18.5px 16px;
// }
// .button-delete {
//   background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

//   border-radius: 10px;

//   padding: 18.5px 16px;
// }
