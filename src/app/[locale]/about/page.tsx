import Link from "next/link";
import { getScopedI18n } from "@/locales/server";
import { ArrowLeftCircle } from "lucide-react";

export default async function About() {
  const t = await getScopedI18n("about");
  return (
    <>
      <p>{t("title")}</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90"
      >
        <ArrowLeftCircle className="me-2" /> Back
      </Link>
    </>
  );
}
