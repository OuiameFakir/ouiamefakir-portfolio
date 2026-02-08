"use client";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
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
)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  alignSelf: "stretch",
  display: "flex",
  padding: "0.75rem 2rem",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  borderRadius: "0.75rem",
  width: "100%",
  textTransform: "none",
  fontFamily: theme.typography.fontFamily,
  fontSize: "0.9rem",
  transition: "transform 150ms ease, box-shadow 150ms ease, background-color 150ms ease",
  boxShadow: theme.shadows[1],
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "translateY(-1px)",
    boxShadow: theme.shadows[4],
  },
}));
