import { Link as RouterLink, type LinkProps } from "react-router-dom";
import { useLocale } from "./LocaleContext";
import { pathFor, type PageKey } from "./routes";

type Props = Omit<LinkProps, "to"> & { page: PageKey; search?: string };

export function Link({ page, search = "", ...rest }: Props) {
  const { locale } = useLocale();
  return <RouterLink to={pathFor(page, locale) + search} {...rest} />;
}
