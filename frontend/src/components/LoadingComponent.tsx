import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export function LoadingComponent() {
  return (
    <Stack
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        color: "grey.500",
      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="success" />
    </Stack>
  );
}
