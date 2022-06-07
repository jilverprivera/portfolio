import { metadata } from "./seo";

export interface layoutProps {
  children: JSX.Element | JSX.Element[];
  metadata: metadata;
  type: string | undefined;
}
