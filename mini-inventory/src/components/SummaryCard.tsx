
interface SummaryCardProps {
  title: string;
  value: string | number;
  description: string;
}

function SummaryCard({
  title,
  value,
  description,
}: SummaryCardProps) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SummaryCard;
