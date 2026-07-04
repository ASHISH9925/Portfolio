import PageHeader from "../../components/PageHeader/PageHeader";
import CardGrid from "../../components/CardGrid/CardGrid";
import CERTIFICATIONS from "../../data/certifications";

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="// 02 — certifications"
        title="Certifications"
        blurb="Formal training to back up the self-taught parts."
      />
      <CardGrid items={CERTIFICATIONS} />
    </>
  );
}
