interface Category {
  id: string;
  name: string;
  href: string;
}

export const BLOG_CATEGORIES: Category[] = [
  { id: "travel", name: "Подорожі", href: "/blog/travel" },
  { id: "design", name: "Дизайн", href: "/blog/design" },
  { id: "culture", name: "Культура", href: "/blog/culture" },
  { id: "news", name: "Новини", href: "/blog/news" },
];
