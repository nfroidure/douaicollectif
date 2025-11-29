import buildMetadata from "../utils/metadata";
import ContentBlock from "../components/contentBlock";
import Heading1 from "../components/h1";
import Heading2 from "../components/h2";
import Paragraph from "../components/p";
import Strong from "../components/strong";
import Anchor from "../components/a";
import UnorderedList from "../components/ul";
import ListItem from "../components/li";
import { type Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pathname: "/",
    title: "Pour une ville Citoyenne, Écologique et Solidaires",
    description:
      "Découvrez Douai Collectif, liste candidate aux élections municipales 2026.",
  });
}

export default async function Page() {
  return (
    <ContentBlock>
      <Heading1>Douai Collectif&nbsp;!</Heading1>
      <Paragraph>
        <Strong>
          Pour une ville citoyenne, écologique et solidaire&nbsp;!
        </Strong>
      </Paragraph>
      <Paragraph>
        Douai Collectif&nbsp;! a pour vocation de présenter une liste aux
        élections municipales 2026 à Douai. Notre démarche se fonde sur trois
        piliers essentiels&nbsp;: la citoyenneté, l’écologie et la solidarité.
      </Paragraph>
      <Heading2>Sur ce site, retrouvez&nbsp;:</Heading2>
      <UnorderedList>
        <ListItem>
          <Anchor
            href="/valeurs-et-principes"
            title="Lire nos valeurs et principes"
          >
            Nos valeurs et principes&nbsp;:
          </Anchor>{" "}
          pour découvrir la boussole qui nous accompagnera durant cette campagne
          et pendant le mandat,
        </ListItem>
        <ListItem>
          <Anchor href="/programme" title="Découvrir notre programme">
            Notre programme pour Douai&nbsp;:
          </Anchor>{" "}
          un document vivant, en perpétuelle évolution, que nous enrichirons
          pendant toute la campagne,
        </ListItem>
        <ListItem>
          <Anchor href="/actualites" title="Lire les actualités">
            Les actualités du collectif&nbsp;:
          </Anchor>{" "}
          pour découvrir nos dernières actualités,
        </ListItem>
        <ListItem>
          <Anchor
            href="/faq"
            title="Voir les réponses aux questions fréquemment posées"
          >
            Une FAQ&nbsp;:
          </Anchor>{" "}
          pour répondre aux questions que vous nous posez fréquemment.
        </ListItem>
      </UnorderedList>
      <Heading2>Rejoindre la dynamique&nbsp;!</Heading2>
      <Paragraph>
        Pour participer à changer Douai avec nous,{" "}
        <Anchor
          href={`https://framaforms.org/participer-avec-douai-collectif-1764425164`}
          title="Contacter notre collectif"
        >
          il suffit de compléter ce formulaire
        </Anchor>
        .
      </Paragraph>
    </ContentBlock>
  );
}
