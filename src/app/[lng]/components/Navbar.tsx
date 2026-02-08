"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import LngSwitcher from "@/components/lngSwitcher/lang";
import { useTranslation } from "../../i18n/client";
import { useColorMode } from "@/utils/colorMode";

export default function Navbar({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "common");
  const theme = useTheme();
  const { mode, toggleMode } = useColorMode();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("about");

  const sections = React.useMemo(
    () => [
      { id: "about", label: t("about") },
      { id: "experience", label: t("experience") },
      { id: "projects", label: t("projects") },
      { id: "skills", label: t("skills") },
      { id: "contact", label: t("contact") },
    ],
    [t]
  );

  React.useEffect(() => {
    const ids = sections.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.25, 0.5, 0.75] }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: alpha(theme.palette.background.default, 0.72),
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 1 }}>
          <Box
            onClick={() => goTo("about")}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "baseline",
              gap: 0.5,
              mr: 2,
              userSelect: "none",
            }}
          >
            <Typography sx={{ fontWeight: 900, letterSpacing: "-0.03em" }}>
              <Box component="span" sx={{ color: "primary.main" }}>
                O
              </Box>
              EF
            </Typography>
            <Typography sx={{ color: "text.secondary", fontWeight: 700 }}>Portfolio</Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <Button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  sx={{
                    color: isActive ? "primary.main" : "text.primary",
                    fontWeight: isActive ? 800 : 600,
                    borderRadius: "999px",
                    px: 1.5,
                  }}
                >
                  {s.label}
                </Button>
              );
            })}

            <IconButton
              aria-label="Toggle dark mode"
              onClick={toggleMode}
              sx={{ ml: 0.5 }}
            >
              {mode === "dark" ? <FiSun /> : <FiMoon />}
            </IconButton>

            <Box sx={{ color: "text.primary" }}>
              <LngSwitcher lng={lng} path={""} />
            </Box>
          </Stack>

          {/* Mobile nav */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton aria-label="Toggle dark mode" onClick={toggleMode}>
              {mode === "dark" ? <FiSun /> : <FiMoon />}
            </IconButton>
            <IconButton aria-label="Open menu" onClick={() => setMobileOpen(true)}>
              <FiMenu />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "background.paper",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: 800 }}>Menu</Typography>
          <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <FiX />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {sections.map((s) => (
            <ListItemButton key={s.id} onClick={() => goTo(s.id)}>
              <ListItemText
                primary={s.label}
                primaryTypographyProps={{
                  fontWeight: active === s.id ? 800 : 600,
                  color: active === s.id ? "primary.main" : "text.primary",
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2, color: "text.primary" }}>
          <LngSwitcher lng={lng} path={""} />
        </Box>
      </Drawer>
    </AppBar>
  );
}
