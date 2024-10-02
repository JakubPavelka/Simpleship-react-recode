declare module "react-router-hash-link" {
  import { NavLinkProps } from "react-router-dom";
  import { ForwardRefExoticComponent, RefAttributes } from "react";

  export interface HashLinkProps extends NavLinkProps {
    smooth?: boolean;
    scroll?: (el: HTMLElement) => void;
  }

  export const HashLink: ForwardRefExoticComponent<
    HashLinkProps & RefAttributes<HTMLAnchorElement>
  >;
  export const NavHashLink: ForwardRefExoticComponent<
    HashLinkProps & RefAttributes<HTMLAnchorElement>
  >;
}
