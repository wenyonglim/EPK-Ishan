import { ContentHome } from './ContentHome.jsx';
import { Box } from './Box.jsx';

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: '100%',
    }}
  >
    {children}
    <ContentHome />
  </Box>
);
