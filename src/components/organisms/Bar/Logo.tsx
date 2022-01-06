import React from "react";
import { Image, Box } from "components/atoms";
import { Route as ROUTES } from "utils";
import { useAppDispatch } from "redux/app/hooks";
import { push } from "connected-react-router";

export const Logo: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Box cursor="pointer" onClick={() => dispatch(push(ROUTES.HOME))}>
      <Image width="100%" src="/assets/images/logo.png" alt="Online Gacha" />
    </Box>
  );
};
