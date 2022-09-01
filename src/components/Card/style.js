import styled from 'styled-components'

export const Container = styled.div`
  width: 1121px;
  height: 200px;

  border-radius: 16px;

  background: rgba(255, 133, 155, 0.05);

  padding: 25px 32px;
  margin-bottom: 24px;

  > div {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_91};
    font-size: 14px;

    margin-bottom: 20px;
  }

  span {
    background: #312e38;
    border-radius: 8px;
    padding: 5px 16px;
    margin-right: 8px;

    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`
