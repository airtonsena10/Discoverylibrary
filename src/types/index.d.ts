import { MouseEvent } from "react";

export interface Icon {
  className?: string;
  onClick?: (event: MouseEvent<HTMLOrSVGElement>) => void
}
