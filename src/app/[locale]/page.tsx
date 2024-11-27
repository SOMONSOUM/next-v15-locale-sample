import Link from "next/link";
import { LangButton } from "@/components/custom";
import { getScopedI18n } from "@/locales/server";

export default async function Home() {
  const t = await getScopedI18n("home");

  return (
    <div>
      <Link
        href="/about"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90"
      >
        Go
      </Link>
      <p>{t("hello")}</p>
      <p>{t("hello.world")}</p>

      <p>{t("welcome", { name: "សុខ ដារ៉ា" })}</p>
      <p>{t("welcome", { name: <strong>សុខ ដារ៉ា</strong> })}</p>
      <p>{t("login_page.save_btn")}</p>
      <LangButton />
    </div>
  );
}
