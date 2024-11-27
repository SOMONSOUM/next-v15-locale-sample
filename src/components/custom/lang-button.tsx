"use client";

import React from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Button } from "../ui/button";
import { Languages } from "lucide-react";

export const LangButton: React.FC = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const toggleLocale = () => {
    const newLocale = locale === "km" ? "en" : "km";
    changeLocale(newLocale);
  };

  return (
    <Button onClick={toggleLocale}>
      <Languages />
    </Button>
  );
};
