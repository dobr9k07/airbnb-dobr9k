import {
  Container,
  NotFoundLayout,
  NotFoundLeftSide,
  NotFoundRightSide,
} from "@/components/shared";

import { MAXWIDTH } from "@/lib/const-css";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <NotFoundLayout>
      <Container
        className={cn(
          "h-screen flex items-center justify-center bg-[url(/svg/IconPaterPrimary.svg)] bg-center",
          MAXWIDTH
        )}
      >
        <Container className="flex items-center justify-between ">
          <NotFoundLeftSide />
          <NotFoundRightSide />
        </Container>
      </Container>
    </NotFoundLayout>
  );
}
