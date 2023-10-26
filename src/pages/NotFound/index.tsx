import { Box, Link, Typography } from "@mui/material";
import { Link as RouterDomLink } from "react-router-dom";

const NotFound=()=>{
return (
    <Box
      sx={{
        margin: "40px auto auto",
        maxWidth: "600px",
        boxShadow: "5px 5px 10px",
        ":hover": { boxShadow: "10px 10px 20px" },
        textAlign: "center",
        paddingBottom: "10px"
      }}
      data-testid="NotFound-div"
    >
        <Typography fontSize="16px" >404</Typography>
        <Typography >PAGE NOT FOUND</Typography>
        <Link component={RouterDomLink} to='/' sx={{textDecoration:'none'}}>Home Page</Link>
    </Box>
)
}
export default NotFound;