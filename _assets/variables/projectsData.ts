import note from "@/_assets/images/noteapp.png";
import game from "@/_assets/images/GAMEOVER Website.png";
import ecomerce from "@/_assets/images/ecommerce.png";
import todos from "@/_assets/images/Todo-List.png";
import eshop from "@/_assets/images/eshop-b2b.png";
import { useTranslation } from "@/src/app/i18n/client";

export function Data({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng, "projects");
  const projectData = [
    {
      id: 1,
      img: eshop,
      title: "Eshop B2B",
      desc: `${t("Des.eshop")}`,
      code_url: "https://github.com/OuiameFakir/eshop-internship-project",
      site_url: "https://eshop-internship-project.vercel.app/",
    },
    {
      id: 2,
      img: todos,
      title: "Do It Now",
      desc: `${t("Des.todos")}`,
      code_url: "https://github.com/OuiameFakir/doitnow-todo-list",
      site_url: "https://doitnow-todo-list.vercel.app/",
    },
    {
      id: 3,
      img: ecomerce,
      title: "Sphere Style",
      desc: `${t("Des.ecomerce")}`,
      code_url: "https://github.com/OuiameFakir/e-commerce-store",
      site_url: "https://e-commerce-store-application.vercel.app/",
    },
    {
      id: 4,
      img: game,
      title: "Game Over",
      desc: `${t("Des.games")}`,
      code_url: "https://github.com/OuiameFakir/gameover-games-website",
      site_url: "https://gameover-games-website.vercel.app/",
    },
    {
      id: 5,
      img: note,
      title: "Keep Notes",
      desc: `${t("Des.note")}`,
      code_url: "https://github.com/OuiameFakir/keepnotes-note-app",
      site_url: "https://keepnotes-note-app.vercel.app/",
    },
  ];
  return projectData;
}
