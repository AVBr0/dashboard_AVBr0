import styled from 'styled-components';

type DetailsWrapperProps = {
  width?: string;
  widthxl?: string;
  widthlg?: string;
  widthmd?: string;
  height?: string;
  heightxl?: string;
  heightlg?: string;
  heightmd?: string;
  gap?: string;
  color?: string;
};

const DetailsWrapper = styled.div<DetailsWrapperProps>`
  display: grid;
  width: ${({ width }) => width || '70%'};
  height: ${({ height }) => height || '60%'};
  gap: ${({ gap }) => gap || '20px'};
  color: ${({ color, theme }) => color || theme.colors.font};
  margin-left: 50px;
  padding-right: 10px;
  padding-bottom: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);

  @media screen and ${({ theme }) => theme.media.XL} {
    grid-template-columns: repeat(3, 1fr);
    width: ${({ widthxl }) => widthxl || '65%'};
    height: ${({ heightxl }) => heightxl || '65%'};
  }

  @media screen and ${({ theme }) => theme.media.LG} {
    grid-template-columns: repeat(2, 1fr);
    width: ${({ widthlg }) => widthlg || '75%'};
    height: ${({ heightlg }) => heightlg || '75%'};
  }

  @media screen and ${({ theme }) => theme.media.MD} {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(120px, auto);
    max-width: 476px;
    width: ${({ widthmd }) => widthmd || '100%'};
    height: ${({ heightmd }) => heightmd || '100%'};
  }
`;

type BoxProps = {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
  padding?: string;
  paddingxs?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
};

export const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  gap: ${({ gap }) => gap || '20px'};
  padding: ${({ padding }) => padding || '20px'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  border: ${({ border }) => border || '1px solid #384256'};
  width: ${({ width }) => width || '100%'};

  @media screen and ${({ theme }) => theme.media.XS} {
    padding: ${({ paddingxs }) => paddingxs || '10px'};
  }
`;

export const Box2 = styled(Box)`
  grid-column: 2 span;
  grid-row: 2;

  @media screen and ${({ theme }) => theme.media.MD} {
    grid-column: 1;
    grid-row: 3;
  }
`;

export const Box3 = styled(Box)`
  min-width: 200px;
`;

export const Box4 = styled(Box)`
  grid-column: span 1;
  grid-row: span 2;

  @media screen and ${({ theme }) => theme.media.LG} {
    grid-column: span 2;
  }

  @media screen and ${({ theme }) => theme.media.MD} {
    grid-column: span 1;
  }
`;

export const Box5 = styled(Box2)`
  @media screen and ${({ theme }) => theme.media.MD} {
    grid-row: 1;
  }
`;

type BtnContainerProps = {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
};

export const BtnContainer = styled.div<BtnContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  width: ${({ width }) => width || '40px'};
  height: ${({ height }) => height || '40px'};
  position: fixed;
  left: 13.5%;

  @media screen and ${({ theme }) => theme.media.LG} {
    left: 5.5%;
  }
  @media screen and ${({ theme }) => theme.media.XS} {
    left: 7.5%;
  }
`;

type ImageWrapperProps = {
  width?: string;
  height?: string;
  objectFit?: string;
  borderRadius?: string;
};

export const ImageWrapper = styled.img<ImageWrapperProps>`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '80%'};
  object-fit: ${({ objectFit }) => objectFit || 'contain'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
`;

type UlWrapperProps = {
  width?: string;
  widthlg?: string;
  widthmd?: string;
  widthxs?: string;
};

export const UlWrapper = styled.ul<UlWrapperProps>`
  width: ${({ width }) => width};

  @media screen and ${({ theme }) => theme.media.LG} {
    width: ${({ widthlg }) => widthlg || '50%'};
    column-count: 2;
  }

  @media screen and ${({ theme }) => theme.media.MD} {
    width: ${({ widthmd }) => widthmd || '80%'};
  }

  @media screen and ${({ theme }) => theme.media.XS} {
    width: ${({ widthxs }) => widthxs || '100%'};
  }
`;

export const LiWrapper = styled.li`
  margin-bottom: 5px;
  list-style-type: none;
`;

export default DetailsWrapper;
