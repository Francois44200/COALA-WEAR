import type { PageKey } from "../routes";

export type SeoCopy = {
  meta: Record<PageKey, { title: string; description: string }>;
  productName: string;
};
