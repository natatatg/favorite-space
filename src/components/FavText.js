import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function FavText() {
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        position: "sticky",
        top: 20,
        // boxSizing: "border-box",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#f6f6f6",
          my: 2,
          maxWidth: {
            xs: 400,
            sm: 600,
            md: 650,
            lg: 750,
            xl: 850,
          },
          mx: "auto",
          border: 0,
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: "1.8em",
              textTransform: "uppercase",
              marginBottom: 1.6,
              letterSpacing: ".1rem",
              lineHeight: 1.1,
            }}
          >
            space is amazing.
          </Typography>
          <Typography
            sx={{
              fontSize: "1.4em",
              lineHeight: 1.3,
              color: "#303030",
            }}
          >
            (It's my favorite thing.)
          </Typography>
          <Typography
            sx={{
              lineHeight: 1.3,
              marginTop: 1.6,
              color: "#303030",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            When I was a kid, I fell in love with space and wanted to be an
            astronomer. I gave up on those aspirations (bad at math and
            physics), but my love for space stuff persists.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
