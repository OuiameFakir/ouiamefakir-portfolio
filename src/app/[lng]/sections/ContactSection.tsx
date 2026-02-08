"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { FiCopy, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { useTranslation } from "../../i18n/client";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "contact");
  const theme = useTheme();
  const [toast, setToast] = React.useState(false);
  const headingColor =
    theme.palette.mode === "light" ? alpha(theme.palette.common.black, 0.82) : theme.palette.text.primary;

  const email = "ouiamefakir@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setToast(true);
    } catch {
      // noop
    }
  };

  return (
    <Stack spacing={3.5}>
      <SectionHeader title={t("contact_me")} subtitle={t("get_in_touch")} />

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <GlassCard glow="primary" sx={{ p: { xs: 2, sm: 3 } }}>
          <Stack spacing={2}>
            <Typography sx={{ color: "text.secondary" }}>{t("contact_text")}</Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.25}
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              <NeonButton
                variantStyle="solid"
                startIcon={<FiMail />}
                component={Link as any}
                href={`mailto:${email}`}
              >
                {lng === "fr" ? "Envoyer un email" : "Send email"}
              </NeonButton>
              <NeonButton
                variantStyle="ghost"
                startIcon={<FiPhone />}
                component={Link as any}
                href="tel:+212699099123"
              >
                {lng === "fr" ? "Appeler" : "Call"}
              </NeonButton>

              <Box sx={{ flexGrow: 1 }} />

              <Stack direction="row" spacing={0.5} justifyContent="center">
                <IconButton
                  aria-label="Copy email"
                  onClick={copyEmail}
                  sx={{
                    border: `1px solid ${theme.glass.border}`,
                    bgcolor: alpha(theme.palette.background.paper, 0.18),
                  }}
                >
                  <FiCopy />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/ouiame-el-fakir/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  sx={{
                    border: `1px solid ${theme.glass.border}`,
                    bgcolor: alpha(theme.palette.background.paper, 0.18),
                  }}
                >
                  <FiLinkedin />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://github.com/OuiameFakir"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  sx={{
                    border: `1px solid ${theme.glass.border}`,
                    bgcolor: alpha(theme.palette.background.paper, 0.18),
                  }}
                >
                  <FiGithub />
                </IconButton>
              </Stack>
            </Stack>

            <Box
              sx={{
                mt: 1,
                p: 1.25,
                borderRadius: 3,
                border: `1px solid ${theme.glass.border}`,
                bgcolor: alpha(theme.palette.background.paper, 0.14),
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Typography sx={{ fontWeight: 900, letterSpacing: "-0.02em", color: headingColor }}>
                {email}
              </Typography>
              <Typography sx={{ color: "text.secondary", fontWeight: 800 }}>
                +212 699099123
              </Typography>
            </Box>
          </Stack>
        </GlassCard>
      </Box>

      <Snackbar
        open={toast}
        autoHideDuration={1600}
        onClose={() => setToast(false)}
        message={lng === "fr" ? "Email copié" : "Email copied"}
      />
    </Stack>
  );
}

