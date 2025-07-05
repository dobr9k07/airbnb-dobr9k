export interface PolicyItem {
  id: string;
  icon: string;
  title: string;
  description?: string;
  items?: string[];
  note?: string;
}

export const POLICY_DATA: PolicyItem[] = [
  {
    id: "checkin",
    icon: "/svg/IconClok.svg",
    title: "Заселення о 16:00. Виселення об 11.00",
    description:
      "Ви можете запросити ранній заїзд та/або пізній виїзд після бронювання. Наша команда зробить усе можливе, щоб задовольнити будь-які запити залежно від наявності.",
  },
  {
    id: "accessibility",
    icon: "/svg/IconDisablePerson.svg",
    title: "Доступність",
    items: ["Дозвіл для інвалідних візків недоступний", "Є ліфти"],
  },
  {
    id: "house-rules",
    icon: "/svg/IconRoole.svg",
    title: "Правила дому",
    items: [
      "Куріння заборонено ( навіть на балконах )",
      "Без домашніх тварин ( навіть дуже милих )",
      "Жодних вечірок ( навіть дуже тихих )",
    ],
    note: "* Будь ласка, поважайте своїх сусідів і зведіть до мінімуму шум з 22:00 до 8:00.",
  },
  {
    id: "notice",
    icon: "/svg/IconAllert.svg",
    title: "Зверніть увагу",
    items: [
      "Обслуговування номерів і щоденне прибирання не доступні.",
      "Це центральне місце, де чутно шум поїздів.",
    ],
  },
];
