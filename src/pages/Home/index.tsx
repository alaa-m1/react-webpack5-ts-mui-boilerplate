import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ExternalLink } from "shared";

const Home=()=>{
    return (
    <Box m={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#01579b",
            mb: 3,
          }}
        >
          <Typography fontSize="16px">
            Alaa Mohammad
          </Typography>
          <Typography>
            Frontend Developer | React - JavaScript - TypeScript - Test Automation
            - Next.js | Software Developer
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <ExternalLink
            url="https://www.linkedin.com/in/alaa-mohammad-767622199/"
            title="LinkedIn"
          />
          <ExternalLink
            url="https://www.xing.com/profile/alaa_mohammad8/cv"
            title="Xing"
          />
          <ExternalLink url="https://github.com/alaa-m1" title="GitHub" />
        </Box>
      </Box>
      )
}

export default Home;