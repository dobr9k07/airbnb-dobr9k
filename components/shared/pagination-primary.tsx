import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  className?: string;
}
const pages = [1, 2, 3, 4, 5];
export const PaginationPrimary: React.FC<Props> = ({ className }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to previous page"
            size="icon"
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`#${page}`}
              isActive={page === 2}
              className={cn(
                "shadow-xs hover:bg-primary-hover hover:cursor-pointer",
                "rounded-full",
                page === 2 && "bg-primary text-primary-foreground "
              )}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`#15`}
            className={cn(
              "shadow-xs hover:bg-primary-hover hover:cursor-pointer",
              "rounded-full"
            )}
          >
            15
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to next page"
            size="icon"
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
