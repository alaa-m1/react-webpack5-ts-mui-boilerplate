import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Footer } from "./components/Footer/Footer";
import { StyledLink, linksDetails } from "shared";
import logoSrc from "../../assets/images/phoenix.png";

const currentUser = null;
export const AppLayout = () => {
  const {pathname}=useLocation();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
      data-testid="AppLayout-div"
    >
      <Box
        className="navigator-main-container"
      >
        <AppBar sx={{ position: "relative", paddingRight: "0px !important" }}>
          <Toolbar>
            <Box className="logo-container">
              <Link to="/">
              <img src={logoSrc} alt="Logo" /> {/* logo */}
              </Link>
            </Box>
            <Box className="link-container">
              <Box>
                {linksDetails.map((link, index) => (
                  <StyledLink
                  key={index}
                  to={link.path}
                  isactive={pathname === link.path ? "active" : "inActive"}
                  data-testid="AppLayout-link-signout"
                >
                    {link.label}
                  </StyledLink>
                ))}
              </Box>

              {currentUser ? (
                <Box onClick={() => console.log("handle signout")}>
                  <StyledLink
                  to={"auth"}
                  isactive={pathname === "/auth" ? "active" : "inActive"}
                  data-testid="AppLayout-link-signout"
                >Sign Out</StyledLink>
                </Box>
              ) : (
                <Box>
                  <StyledLink
                  to={"auth"}
                  isactive={pathname === "/auth" ? "active" : "inActive"}
                  data-testid="AppLayout-link-signout"
                >Sign In</StyledLink>
                </Box>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <main>
          <Outlet />
        </main>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};
