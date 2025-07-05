import { BLOG_CATEGORIES } from "@/constans/blog-categories";
import { notFound } from "next/navigation";

/**
 * Функція генерації шляху до строрінки блогу (наприклад /blog/travel/1)
 * @param id - id блогу
 * @param tag - тег блогу (Подорожі, Дизайн, Культура, Новини)
 * @returns - string шлях до строрінки
 */
export const generateBlogPathLink = (id: number, tag: string) => {
  const BLOG_CATEGORIES_MAP = new Map(
    BLOG_CATEGORIES.map((cat) => [cat.name, cat])
  );

  const _tag = BLOG_CATEGORIES_MAP.get(tag);

  if (!_tag) {
    return notFound();
  }
  const pathLink = `${_tag.href}/${id}`;

  return pathLink;
};
