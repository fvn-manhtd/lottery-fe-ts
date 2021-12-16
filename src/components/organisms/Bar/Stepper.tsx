import React, { Fragment, useEffect, useState } from "react";
import { Box, FlexBox, IconPng, Divider } from "components/atoms";

type Step = {
  title: string;
  icon: string;
};

type StepperProps = {
  selectedStep?: number;
  stepperList: Step[];
};

export const Stepper: React.FC<StepperProps> = ({
  selectedStep,
  stepperList,
}) => {
  const [selected, setSelected] = useState(selectedStep - 1);

  useEffect(() => {
    setSelected(selectedStep - 1);
  }, [selectedStep]);

  return (
    <Box
      alignItems="center"
      flexWrap="wrap"
      justifyContent="center"
      mx="auto"
      maxWidth="600px"
    >
      <Divider
        mb="1rem"
        bg="gray.500"
        width="100%"
        mx="auto"
        maxWidth="300px"
      ></Divider>
      <FlexBox
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        mt="-35px"
      >
        {stepperList.map((step, ind) => (
          <Fragment key={step.title}>
            <FlexBox
              mx={{ _: "8px", md: "20px" }}
              flexDirection="column"
              alignItems="center"
            >
              <Box
                bg={ind <= selected ? "primary.light" : "gray.500"}
                color={ind <= selected ? "white" : "gray.white"}
                borderRadius="100%"
                width="40px"
                height="40px"
                p="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <IconPng>{step.icon}</IconPng>
              </Box>
              {step.title}
            </FlexBox>
          </Fragment>
        ))}
      </FlexBox>
    </Box>
  );
};

Stepper.defaultProps = {
  selectedStep: 1,
};
