import React from "react";
import Image from "next/image";
import { Title } from "../../title";
import { IBlogItem, IBlogQAItem } from "@/lib/blogItem";

// Типи для варіантів рендерингу
type BlogContentVariant = "culture" | "design";

interface BlogContentRendererProps {
  blog: IBlogItem;
  variant: BlogContentVariant;
  className?: string;
}

// Strategy pattern для рендерингу
interface RenderStrategy {
  renderTextContent(blog: IBlogItem): React.ReactNode;
  renderQASection?(blog: IBlogItem): React.ReactNode;
}

// Стратегії рендерингу
const renderStrategies: Record<BlogContentVariant, RenderStrategy> = {
  culture: {
    renderTextContent: (blog) => {
      return blog.textContent?.map((item, index) => {
        if (item.title) {
          return (
            <div key={index}>
              <div className="flex gap-10 items-center justify-between">
                {blog.blog_image?.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative w-full h-[870px] mb-5"
                  >
                    <Image
                      src={image}
                      alt={`blog_image ${imageIndex}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <Title size="2lg" text={item.text} className="font-medium" />
            </div>
          );
        } else {
          return (
            <p key={index} className="text-[28px] font-normal">
              {item.text}
            </p>
          );
        }
      });
    },
    renderQASection: (blog) => {
      if (!blog.blog_qa) return null;

      return (
        <div className="w-full flex items-start justify-between bg-[#FFF9D4] p-10">
          <div className="relative w-[400px] h-[660px] mb-5">
            <Image
              src={blog.blog_image_QA!}
              alt="blog_image_qa"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-left flex-col gap-2">
            <p className="text-[28px] font-medium">{blog.blog_title_QA}</p>
            {(
              Object.entries(blog.blog_qa) as [
                keyof IBlogQAItem,
                { question: string; answer: string }
              ][]
            ).map(([key, item]) => (
              <div key={key} className="text-2xl">
                <p className="font-medium">{item.question}</p>
                <p className="font-normal">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  design: {
    renderTextContent: (blog) => {
      return blog.textContent?.map((item, index) => {
        if (item.title) {
          return (
            <div key={index}>
              <p className="text-[28px] font-normal">
                {item.title_text && (
                  <span className="font-semibold">{item.title_text}</span>
                )}
                {item.text}
              </p>
              {item.image && (
                <div className="relative w-full h-[800px] my-5">
                  <Image
                    src={item.image}
                    alt={`blog_image ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          );
        } else {
          return (
            <p key={index} className="text-[28px] font-normal">
              {item.text}
            </p>
          );
        }
      });
    },
  },
};

export const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({
  blog,
  variant,
}) => {
  const strategy = renderStrategies[variant];

  if (!strategy) {
    console.warn(`Unknown variant: ${variant}`);
    return null;
  }

  return (
    <>
      {strategy.renderTextContent(blog)}
      {strategy.renderQASection?.(blog)}
    </>
  );
};
