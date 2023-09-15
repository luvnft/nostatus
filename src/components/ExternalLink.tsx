import { css } from "@shadow-panda/styled-system/css";
import { ExternalLinkIcon } from "lucide-react";

type ExternalLinkProps = {
  href: string;
  size?: number | string | undefined;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, size }) => {
  return (
    <a
      className={css({ ml: "1.5", color: { base: "purple.400", _visited: "slate.400" } })}
      href={href}
      target="_blank"
      rel="external noreferrer"
    >
      <ExternalLinkIcon style={{ display: "inline-block" }} size={size} />
    </a>
  );
};
