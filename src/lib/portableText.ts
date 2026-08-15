import type { TypedObject } from "@portabletext/types";

type TextBlock = TypedObject & {
  _type: string;
  children?: { text?: string }[];
};

const WORDS_PER_MINUTE = 220;

const plainText = (body: TypedObject[]): string =>
  (body as TextBlock[])
    .filter((block) => block._type === "block")
    .flatMap((block) => block.children?.map((child) => child.text ?? "") ?? [])
    .join(" ");

/** Rounded up, floored at 1 — "0 min read" helps nobody. */
export const readingTime = (body: TypedObject[] | undefined): number => {
  if (!body?.length) return 1;
  const words = plainText(body).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};
