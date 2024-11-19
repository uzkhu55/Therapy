import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LoadingComponent() {
  return (
    <Box
      sx={{
        width: "100%",
        color: "greenyellow",
        top: "8px",
        position: "absolute",
      }}
    >
      <LinearProgress color="success" />
    </Box>
  );
}
