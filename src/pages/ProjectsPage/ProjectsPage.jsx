import PageHeader from "../../components/PageHeader/PageHeader";
import CardGrid from "../../components/CardGrid/CardGrid";
import PROJECTS from "../../data/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="// 01 — projects"
        title="Projects"
        blurb="A mix of forensic tooling, applied AI, and secure systems — mostly built to answer a specific 'can this be done properly' question."
      />
      <CardGrid items={PROJECTS} />
    </>
  );
}
