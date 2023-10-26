import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <Box
      className="footer-section"
      sx={{
        backgroundColor: "#1976D2",
        "& a": { textDecoration: "none", color: "#fff" },
      }}
    >
      <Box>
        <Link to={"/"}>
          <Typography>React with Webpack5</Typography>
        </Link>
      </Box>
      <Box sx={{ display: "flex" }}>
        <EmailIcon sx={{ "& path": { color: "#fff" } }} />

        <a href="mailto:alaa85a@gmail.com">
          <Typography>alaa85a@gmail.com</Typography>
        </a>
      </Box>
    </Box>
  );
};
