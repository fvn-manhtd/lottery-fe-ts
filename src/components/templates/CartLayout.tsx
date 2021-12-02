import React from "react";
import { Box } from "components/atoms";
import { HeaderCart } from "components/organisms";

export const CartLayout: React.FC = ({ children }) => (
  <>
    <HeaderCart />
    <Box bg="gray.400" mt="3rem">
      {children}
    </Box>
  </>
);
