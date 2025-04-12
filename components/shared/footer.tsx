import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Button } from "../ui/button";
import { IoEarthOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full bg-gray-200", className)}>
      <Container className="flex items-center justify-between container mx-auto px-1 lg:px-10 py-5 mt-10">
        <div className="flex items-center">
          <p className=" text-gray-600 mr-3">© 2025 Airbnb, Inc.</p>
          <p>·</p>
          <Button
            variant={"link"}
            className="text-sm text-gray-600 cursor-pointer -ml-2.5"
          >
            Конфіденційність
          </Button>
          <p>·</p>
          <Button
            variant={"link"}
            className="text-sm  text-gray-600 cursor-pointer -ml-2.5"
          >
            Умови
          </Button>
          <p>·</p>
          <Button
            variant={"link"}
            className="text-sm  text-gray-600 cursor-pointer -ml-2.5"
          >
            Мапа сайту
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button variant={"ghost"} size={"lg"} className="cursor-pointer">
            <IoEarthOutline />
            <p>Українська (UA)</p>
          </Button>
          <Button variant={"ghost"} size={"sm"} className="cursor-pointer">
            ₴ UA
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="hover:cursor-pointer hover:rounded-full"
          >
            <FaFacebook />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="hover:cursor-pointer hover:rounded-full"
          >
            <FaXTwitter />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="hover:cursor-pointer hover:rounded-full"
          >
            <FaInstagram />
          </Button>
        </div>
      </Container>
    </div>
  );
};
