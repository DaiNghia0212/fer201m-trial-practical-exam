import { Box, Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="20px" component="footer">
      <Paper
        sx={{
          width: "100%",
          py: "20px",
          bgcolor: "primary.main",
        }}
      >
        <Typography variant="body1" textAlign="center" color="white">
          copyright &copy; 2023
        </Typography>
      </Paper>
    </Box>
  );
};

export default Footer;
