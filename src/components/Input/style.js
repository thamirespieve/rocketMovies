import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  margin-top: 8px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.GRAY_99};

  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_99};

    border: none;
    border-radius: 10px;

    padding: 18px 16px;
  }
  > svg {
    width: 20px;
    height: 20px;

    margin-left: 16px;
  }
`
