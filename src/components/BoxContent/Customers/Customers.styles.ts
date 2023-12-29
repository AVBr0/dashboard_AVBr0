import styled from 'styled-components';

type CustomersWrapperProps = {
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  fontSize?: string;
};

const CustomersWrapper = styled.div<CustomersWrapperProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '30%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  font-size: ${({ fontSize }) => fontSize || '50px'};
`;

export default CustomersWrapper;
