export interface Slide {
  id: string;
  slideName: string;
  content: ContentItems;
  type: string;
  slideOrder: number;
  className?: string;
}

export type ContentType =
  | "column"
  | "resizeable-column"
  | "text"
  | "paragraph"
  | "image"
  | "multiColumn"
  | "blank"
  | "imageAndText"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "title"
  | "blockquote"
  | "numberList"
  | "bulletedList"
  | "code"
  | "link"
  | "quote"
  | "divider"
  | "calloutBox"
  | "todoList"
  | "bulletList"
  | "codeBlock"
  | "customButton"
  | "table"
  | "tableOfContents";

export interface ContentItems {
  id: string;
  type: ContentType;
  name: string;
  content: ContentItems[] | string | string[] | string[][];
  initalRows?: number;
  initalColumns?: number;
  restrictToDrop?: boolean;
  columns?: number;
  placeholder?: string;
  className?: string;
  alt?: string;
  callOutTypes?: "success" | "warning" | "info" | "question" | "caution";
  link?: string;
  code?: string;
  language?: string;
  bgColor?: string;
  isTransarent?: boolean;
}

export interface OutlineCard {
  id: string;
  title: string;
  order: number;
}