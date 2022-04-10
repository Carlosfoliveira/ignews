import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useMemo, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = useMemo(() => asPath === rest.href
    ? activeClassName
    : '',
    [asPath, rest.href, activeClassName]);

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
};
