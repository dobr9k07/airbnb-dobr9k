import { IBlogItem } from "@/lib/blogItem";
import React from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { Container } from "../../container";
import { Title } from "../../title";

interface Props {
  className?: string;
  item: IBlogItem;
}
export const BlogBannerSlug: React.FC<Props> = ({ item, className }) => {
  return (
    <Container
      className={cn(
        "flex flex-col items-center justify-center gap-2.5 text-[#FFFFFF]",
        className
      )}
    >
      <p className="text-[28px] font-medium">{item.tag}</p>
      <Title text={item.title} size="2lg" className="font-bold" />
      <p className="text-[32px] font-light">{item.date}</p>
      <div className="flex items-center justify-center gap-7">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="50" height="50" fill="url(#pattern0_1_1924)" />
          <defs>
            <pattern
              id="pattern0_1_1924"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1_1924" transform="scale(0.01)" />
            </pattern>
            <image
              id="image0_1_1924"
              width="100"
              height="100"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHoUlEQVR4nO2dWYwVRRRACxFBRRDcICooIJqILP5ixLgQQMMIokRAjWhURAWE6A8ElA8l4ccPcQAJLpiwSIzBmCAyoAJRQQ1i/JFBJNHEsOiwCWFmjinfnaStqX7vzUz16+p6fb4I8/rWrb5dy626dUupnJycnJycwKGDpK1/cJAbxC/IDeIX5AbxC3KD+AW5QfwGD2ZVQFdgHnC+qnZI2SDABcDHUtwGoIuqFoBrgBpgLvAWsKWMHmyL/FY/Mx642nHL+MQob12wLQW4EpgOvAscwB31wDsi+wqHxgjPKEAv4An5shtJnnPAZjHOpW3Q864S+mXbKMAA4A3gFOlxBngPuKlMnR8Sg8aRvTEFGAp8BDSV8cJOAluBZcAsYAwwBLheWlYXGWR7yf8Nkd/MlnGkTmSUQuuyEbilDP2nBtFSgD7AyhKVaQZ2APOBkS6+NjHYbcACYKeUEYfWbTlwVbBGAc4DXgROFKnAfmCh7sYqoM9AYJGUGUeDtMhOQRkF6A9sL6L0NzKt7ZSCbp2A+4HdRfTT3WW/DhhlnvIF4GH50uIMcY/yBGB0EcP8DUxuh1E26e6ysjWJ//IWxfTVf0lX0Fn52bU+Chy26K3r8rr+TZmzr0+BbpWvRWvFussMysba9jplKTin62Pq8CFwcYmW4k3L6AHsslTiH+BplTGAGaK7yVfAJTHP3Om7MfRMZpjKKMBwWXYp2yipo5uwzO9Nvis1n88CFPynH2KMcpHyCRnA9XzbZBvQUwUChbHxM0s9N8YN9KkAvBYzd++qAgPoJh+ayWLlAzKrsHVTPVSgAD0t3VdzMT+lUopdZ3H69ocwZpQ5ptRb/KtYj74SDpTZdPX0cISqEiisWJ823sGXqYwnsjVqkjk/o6MAz1rew6xKK9HXsmq7tsxnHwSOAL/rRT0VABQ2pKI0VLTbBlYZChwtZzlEpsfRNaJzqQ+EDtAvX8aPKMsrVfgIyy5f2V0V8KfxbChGmWnUS69nDa1EwS2xSNEl9LIHMWCiZT8680YBOgN7jHptTLrQwZbWcXc75EyyGKURmKYyDDDWqJN+VzckWWCt2To6ICtUo+w26vRmUgX1tsy5azooc3Jo3RcwwajPqbbEfbWloCctHnmH98BDMwoFh9mMtpyeREF6sTDKQoeyg+q+gFeNumxOYt2m0VhIG+i4jEmhGAUYZMQSNDp1FC3d1Q5nwgPtvoCvjXo87lL4+4bw+c6EB9pSKETcRFntUvhvhvCRzoQHahRglKF/vcs9D3Mal3hEBRk3isQSmwHe/ZKYV9c50bgKxhRah8/WuBD6UkU8zwBbCq1XNua6EKqPDkR5wYm2VWAUYI6hc60LoeY27Rgn2lZB9wWMM/Td6kLoz4bQIU60dWuUY8BxiSe+Ufm15x7lJxdCDxlC+zvR1q1RomjjXKs8QI7XRTnoQqjeno1ymRNtkzXKeuUBwOWGXkddCD1rCE0/qlv9p5duCXE0KA+QM+1RzoZskONFDHJM+WmQMy6E6pAdr7osTZEDQd7Mvixd1mEXQg/6NKi3oGdTJbqt1I1iGdQPuBC6z5dpr4meTcmxswYxjld+imXauzeJ9ZixylOI91NqUtLnXufrgMCKVONW3RjlkApo6URnX4iyTHkOrY3yhyeLi7OTaHbbVAagkBniV1lpGJ+SDl847+4tG1QnffFFfEZ8EDPllJvDPJapb6JbuCEA3JHIFq4IX20IX+BMeKAArxjvbKVL4Y8Ywnc6Ex4oFE4FRJni+sRUU5KBciFB4ZQAiQXKSSGfG4UsclpAQACLEw0llUIeSyLYOjSwB1tPSyqXiXnQM4hDmy4BHrC4Cd2TKuxto7BvEykoo8ihVp3FIsqKpKO6zTR2oxMrMGNYokwaEz3SJoXqjHBRdnuVCSfdQ5/fG+9mTSUKvtly8HOGqnKA54130lyxvSNJkm9m7OyrqhTsiQNWVTpB5DEfQ2/SQBKYtTmzRSWSrjyjqgzgOS+S8IgDtMuSnmm4qhKAW+VmhSg7UpvkSApxM7JRJ/XqowKHwvqe3gCLciS1BGbGjqKZvfrHRA7Le4KkwzWnuM1pBVO0Alhq6Ue3eZFmO5kkmLaLBZYoX5DxxJYmdnuVpIld651zLIcc9Z1OJvtc3pDmYSLlOm/T4UrfarvuoT7LyTEpzKbMARypa48sNGtbSznje5CdDbm64nRMy/DbGEYIjJkYsoUNWcjrS6GLMj3wFtZ5202VWP1cWuRCl5meXujSWRYK9fqcia7LEu8G8LYg156azmMLe9I61RuzuTTO4l9Enb77VAiIR2+7yiJqmAlpfHkyZZ9o2ekzl0PS9cAT+gLj7nZq4ZDc8TS4Qh/Jy8AvRfTx9q4s10v3q0tc7Ijkm9Ipjm53EUssE41RItMMYjNpkmTR3t+V5Qy5HvWDMi8iPiVef60cj9DpWIfJPbq9xSm9QP49QP42Tn5bK8+Wc9eu1mWN3hVV1YoOApB8KidIjxOiw6C034c3ABdKov5NJZICuKJJBuunEoubCgUKTtlU6cdtSxbt5YDElk3JgnPqLUA/GTfmyJigl/b3yhrZUUlucFb+XS9/q5PfzpFnw5q25uTk5OTkqP/zLyZem79oEzdOAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>

        <p className="text-[32px] font-light">{item.time_read}</p>
      </div>
      <div className="flex items-center justify-center gap-7">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="50" height="50" fill="url(#pattern0_1_1923)" />
          <defs>
            <pattern
              id="pattern0_1_1923"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1_1923" transform="scale(0.0104167)" />
            </pattern>
            <image
              id="image0_1_1923"
              width="96"
              height="96"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2bO2tUQRiGx8QbwUJECYq22qWyFH+Jif4AL+nEnyB4KQQbG9NtoiBeQG0sxEqwEiERrNKIqKhYqGTzyMBEN6ubndmc3cw38z6wVTbf+c7zzpk5O3vWOSGEEEIIIYQQQgghhBBCiEIAzgBtRoyzBrAPuAFMWJdvLgBgL/Ay9P4c2GNZvqkAWC+fJkLYavkeZ1j+pkLIQb7HGZc/UAi5yPc4Awvuq8hzeQaMW5LvccZH/hqrwHlr8j0uRzKQvwQcauhcbAVQknxzAZQm31QAJco3E0Cp8k0EULL87AMoXX7WAQwg/4I1+dkGkPgJd3UI8heBgwn9HgHuAt/C6x5wzGQARuV/+k+dz/5vpgKwJt8TRn4vFpyVACzK94QppxdfnYUArMqPCOCLyz0Ay/I9YcHtxbzLOQDr8j3+bicsuN18BA67XAMoQX7XndCCn/PDaz5G/pYFUMuHrCwDKGnkbxbfx0gD0Mj/CzAJvBlZAJKfLr+xADTt/DPt+GkwhrYb8cj3XCx4wZ2MHfnh/E5v9oCSH5D8yuRPJN7nz0bUnK5hzgfONHHQuYblnwR+Sn4EwPEgtin5O4F3kh8JcLMp+R13PDEsVj3tdBx8qSn5od4DyU8A+N5H2GxivWWN/ATCduxGXE+s96NPvSlX+7TT1cjriAaiQwA+9KnVArYP5WSsyQ/NXIlsJCoE4EVErdZWhZCV/NDQUeBXUyEAlyJrtUYdQnbyOxq7HNlU3xCAAxHryshDyFZ+aG4ceEQ81/rUO5dQqzXsELKW39HkbuBxgyHcyiEELMjv2kZ42MR0BIwBtxNq3Wk6hJHvajbUdBEhYFF+KSFgWb71EChBvtUQKEm+tRAoUb6VEChZfu4hUIP8XEOgJvm5hUCN8ru2LZ4kiLvaJ4S5xG2LKTPbC4VeCVQ58o2F0C5afuYhtKuQP+CasOIfBmtwTahjzu8HsCviSlgBZiJqDXol1DXye1wJTzeQfyqh1ljilzr+WdRpVzs9QkiS3wlwNuI75rfAiXX/WDNdIQwsfw1gv/8lTnjk5X0Y7cvhV+8zwI4/bxbr1oT7MXO+GBLANskVQgghhBBCCCGEEEIIVyG/AYKFpjH8VH6uAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
        <div className="flex items-center justify-center text-[32px] font-light gap-2">
          <p>Теги: </p>
          <p className="underline underline-offset-6">{item.tag_link}</p>
        </div>
      </div>

      {item.imageBannerXL && (
        <div className="relative w-full h-[700px]">
          <Image
            src={item.imageBannerXL}
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      )}
    </Container>
  );
};
