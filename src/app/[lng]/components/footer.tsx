import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton
            component={Link}
            href="tel:+212699099123"
            aria-label="Phone"
            color="inherit"
          >
            <FiPhone />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:ouiamefakir@gmail.com"
            aria-label="Email"
            color="inherit"
          >
            <FiMail />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/ouiame-el-fakir/"
            aria-label="LinkedIn"
            color="inherit"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </IconButton>
          <IconButton
            component={Link}
            href="https://github.com/OuiameFakir"
            aria-label="GitHub"
            color="inherit"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </IconButton>
        </Stack>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: "text.secondary" }}
        >
          ©{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 800 }}>
            O
          </Box>
          EF All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
