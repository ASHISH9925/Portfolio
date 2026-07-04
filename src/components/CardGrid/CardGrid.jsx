import EntryCard from "../EntryCard/EntryCard";
import "./CardGrid.css";

export default function CardGrid({ items }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <EntryCard
          key={item.name}
          name={item.name}
          link={item.link}
          photo={item.photo}
          description={item.description}
          tag={item.tag}
          period={item.period}
          tech={item.tech}
        />
      ))}
    </div>
  );
}
