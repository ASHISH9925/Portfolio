import PageHeader from "../../components/PageHeader/PageHeader";
import CardGrid from "../../components/CardGrid/CardGrid";
import AWARDS from "../../data/awards";

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="// 03 — awards & merits"
        title="Awards & merits"
        blurb="Competitions, recognitions, and a patent along the way."
      />
      <CardGrid items={AWARDS} />
    </>
  );
}
