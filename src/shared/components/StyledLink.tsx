import { Typography, styled } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

type LinkComponentProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isactive: "active" | "inActive";
    children: React.ReactNode;
  };
const LinkComponent = ({ children, ...props }: LinkComponentProps) => {
  return (
    <Link {...props}>
      <Typography
        component="span"
        color="#fff"
        sx={{
          fontSize: 16,
          fontWeight: props.isactive === "active" ? "bold" : "normal",
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};
const StyledLink = styled(LinkComponent)`
  font-weight: ${(p) => (p.isactive === "active" ? "bold" : "normal")};
  text-decoration: none;
`;

export { StyledLink };
