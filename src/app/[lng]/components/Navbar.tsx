"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LngSwitcher from "@/components/lngSwitcher/lang";
import { useTranslation } from "../../i18n/client";

export default function Navbar({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "common");
  return (
    <nav className="navbar navbar-dark bg-dark p-3 sticky-top">
      <div className="container d-flex flex-column flex-sm-row   align-items-baseline">
        <a className="navbar-brand fw-bold">
          <span className="text-warning">O</span>EF :)
        </a>
        <form className="d-flex flex-column flex-sm-row align-items-start ">
          <a
            className="text-light mr-6 mb-sm-6 text-decoration-none"
            href="#about"
          >
            {t("about")}
          </a>
          <a
            className="text-light mr-6 mb-sm-6 text-decoration-none"
            href="#projects"
          >
            {t("projects")}
          </a>
          <a
            className="text-light mr-6 mb-sm-6 text-decoration-none"
            href="#skills"
          >
            {t("skills")}
          </a>
          <a
            className="text-light mr-6 mb-sm-6 text-decoration-none"
            href="#contact"
          >
            {t("contact")}
          </a>
          <a className="text-light mr-6 mb-sm-6 text-decoration-none">
            <LngSwitcher path={"/"} lng={lng} />
          </a>
        </form>
      </div>
    </nav>
  );
}
