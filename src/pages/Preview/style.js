import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 123px;

  .movieTitle {
    padding: 24px 0;

    display: flex;
    align-items: center;
    gap: 20px;

    > span {
      color: ${({ theme }) => theme.COLORS.PINK};

      font-size: 20px;
    }
  }

  .infosPreview {
    display: flex;
    align-items: center;
    gap: 10px;

    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }

    .update {
      display: flex;
      align-items: center;
      gap: 10px;
      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  .tags {
    padding: 48px 0;

    display: flex;
    gap: 10px;

    span {
      font-family: 'Roboto';
      padding: 16px;

      border-radius: 8px;

      font-size: 12px;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_PROFILE};
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  p {
    text-align: justify;
  }
`
