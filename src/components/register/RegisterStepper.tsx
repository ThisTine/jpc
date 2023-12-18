"use client";

import { Box, Typography } from "@mui/material";
import { Fragment, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { proxy, useSnapshot } from "valtio";

export const registrationStep = proxy({
  currentStep: 1,
  totalStep: 4,
});

export default function RegisterStepper({ step }: { step: number }) {
  const { currentStep, totalStep } = useSnapshot(registrationStep);

  useEffect(() => {
    registrationStep.currentStep = step;
  }, [step]);

  const renderStep = (step: number, currentStep: number, active: boolean) => (
    <Box
      width="32px"
      height="32px"
      display="flex"
      bgcolor={currentStep >= step ? "#A5CE89" : "transparent"}
      border="3px solid #A5CE89"
      justifyContent="center"
      alignItems="center"
      borderRadius="10000px"
    >
      {currentStep > step ? (
        <Typography
          fontSize="14px"
          fontWeight="bold"
          bgcolor="#A5CE89"
          color="white"
        >
          <FaCheck />
        </Typography>
      ) : (
        <Typography
          fontSize="14px"
          fontWeight="bold"
          color={!active ? "#A5CE89" : "white"}
        >
          {step}
        </Typography>
      )}
    </Box>
  );

  return (
    <Box width="100%">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom="2rem"
      >
        {[...Array(totalStep)].map((_, index) => (
          <Fragment key={index}>
            {renderStep(index + 1, currentStep, index + 1 == currentStep)}
            {index + 1 !== totalStep ? (
              <Box
                key={_}
                width="100%"
                height="3px"
                flex={1}
                bgcolor="#A5CE89"
              />
            ) : null}
          </Fragment>
        ))}
      </Box>
    </Box>
  );
}
