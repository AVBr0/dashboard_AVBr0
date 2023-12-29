import styled from 'styled-components';

type SideBarSDProps = {
  minWidth?: string;
  minWidthMedia?: string;
  height?: string;
  backgroundColor?: string;
  width?: string;
  widthMedia?: string;
};

const SideBarSD = styled.div<SideBarSDProps>`
  display: flex;
  min-width: ${({ minWidth }) => minWidth || '55px'};
  width: ${({ width }) => width || '15%'};
  height: ${({ height }) => height || '100%'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.bg};

  @media ${({ theme }) => theme.media.LG} {
    width: ${({ widthMedia }) => widthMedia || '5%'};
    min-width: ${({ minWidthMedia }) => minWidthMedia || '28px'};
  }
`;

export default SideBarSD;
