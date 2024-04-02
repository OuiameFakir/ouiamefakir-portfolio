"use client";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import theme from "../../utils/theme";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  title: string;
  handleClick?: () => void;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const PrimaryButton = styled(
  ({
    title,
    handleClick,
    className,
    startIcon,
    endIcon,
    ...props
  }: PrimaryButtonProps) => (
    <Button
      disableRipple
      onClick={handleClick}
      className={className}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {title}
    </Button>
  )
)(({}) => ({
  color: theme.palette.customColors.oranged[300],
  backgroundColor: theme.palette.customColors.gray[200],
  border: `1px solid ${theme.palette.customColors.gray[500]}`,
  alignSelf: "stretch",
  display: "flex",
  padding: "0.75rem 2rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  borderRadius: "0.5rem",
  width: "100%",
  textTransform: "none",
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: theme.palette.customColors.gray[50],
    fontSize: "0.9rem",
    color: theme.palette.customColors.oranged[500],
  },
}));
