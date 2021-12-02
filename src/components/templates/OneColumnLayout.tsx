import React from "react";
import { Box } from "components/atoms";

export const OneColumnLayout: React.FC = ({ children }) => (
  <>
    <Box bg="gray.400">{children}</Box>
  </>
);
