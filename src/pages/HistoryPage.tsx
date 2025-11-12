import { useParams } from "react-router-dom";

export default function HistoryPage() {
  const { id } = useParams();
  return <div>Historia de la solicitud {id}</div>;
}
