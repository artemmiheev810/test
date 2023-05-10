import { paths } from "config/routes/paths";
import { Calls } from "Pages/Calls/Calls";
import { Test } from "Pages/Test/Test";
import {
  Briefcase,
  Mail,
  Orders,
  People,
  Concluding,
  Document,
  Settings,
  Perm,
  LocalLib,
  CallsIcon,
} from "static/img/siderIcons";

export interface RoutesLink {
  title: string;
  icon: () => JSX.Element;
  link: string;
  name?: string;
}

export const routes = [
  {
    path: paths.main,
    elem: Test,
  },
  {
    path: paths.orders,
    elem: Test,
  },
  {
    path: paths.mails,
    elem: Test,
  },
  {
    path: paths.calls,
    elem: Calls,
  },
  {
    path: paths.people,
    elem: Test,
  },
  {
    path: paths.document,
    elem: Test,
  },
  {
    path: paths.perm,
    elem: Test,
  },
  {
    path: paths.briefcases,
    elem: Test,
  },
  {
    path: paths.localLib,
    elem: Test,
  },
  {
    path: paths.settings,
    elem: Test,
  },
];

export const RoutesLinks: RoutesLink[] = [
  { icon: Concluding, link: paths.main, title: "Итоги", name: "main" },
  { icon: Orders, link: paths.orders, title: "Заказы", name: "orders" },
  { icon: Mail, link: paths.mails, title: "Сообщения", name: "mails" },
  { icon: CallsIcon, link: paths.calls, title: "Звонки", name: "calls" },
  { icon: People, link: paths.people, title: "Контрагенты", name: "people" },
  {
    icon: Document,
    link: paths.document,
    title: "Документы",
    name: "document",
  },
  { icon: Perm, link: paths.perm, title: "Исполнители", name: "perm" },
  {
    icon: Briefcase,
    link: paths.briefcases,
    title: "Отчеты",
    name: "briefcases",
  },
  {
    icon: LocalLib,
    link: paths.localLib,
    title: "База знаний",
    name: "localLib",
  },
  {
    icon: Settings,
    link: paths.settings,
    title: "Настройки",
  },
];
