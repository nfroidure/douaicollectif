import { pathJoin } from "../../utils/files";
import { readEntries } from "../../utils/frontmatter";
import buildMetadata from "../../utils/metadata";
import { toASCIIString } from "../../utils/ascii";
import { parseMarkdown, renderMarkdown } from "../../utils/markdown";
import { fixText } from "../../utils/text";
import { datedPagesSorter } from "../../utils/contents";
import ContentBlock from "../../components/contentBlock";
import Heading1 from "../../components/h1";
import Heading2 from "../../components/h2";
import Paragraph from "../../components/p";
import Strong from "../../components/strong";
import Anchored from "../../components/anchored";
import type { MarkdownRootNode } from "../../utils/markdown";

export type FAQItemFrontmatterMetadata = {
  title: string;
  date: string;
  draft: boolean;
};
export type FAQItem = {
  id: string;
  content: MarkdownRootNode;
} & FAQItemFrontmatterMetadata;

export async function generateMetadata() {
  return buildMetadata({
    pathname: "/faq",
    title: "La FAQ",
    description:
      "Recueil de réponses aux questions qui nous sont fréquemment posées.",
    image: {
      url: "/images/faq.png",
      alt: "Bannière de la page FAQ",
    },
  });
}

export default async function Page() {
  const entries = (
    await readEntries<FAQItemFrontmatterMetadata>(
      pathJoin(".", "contents", "faq"),
    )
  )
    .map((entry) => ({
      ...entry.attributes,
      id: toASCIIString(entry.attributes.title),
      content: parseMarkdown(entry.body) as MarkdownRootNode,
    }))
    .filter((entry) => !entry.draft || process.env.NODE_ENV === "development")
    .sort(datedPagesSorter);

  return (
    <ContentBlock>
      <Heading1>La FAQ</Heading1>
      <Paragraph>
        Nous souhaitons vous informer en toute transparence, c’est pourquoi
        toutes les questions que vous nous posez seront consignées sur cette
        page.
      </Paragraph>
      {entries.map((entry) => (
        <div key={entry.id}>
          <Heading2>
            <Anchored id={entry.id}>{fixText(entry.title)}</Anchored>
          </Heading2>
          {renderMarkdown({ index: 0 }, entry.content)}
        </div>
      ))}
    </ContentBlock>
  );
}
