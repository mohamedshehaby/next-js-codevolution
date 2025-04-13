import { Card } from "@/app/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link className="text-blue-500" href={"/complex-dashboard/archived"}>
          Archived
        </Link>
      </div>
    </Card>
  );
}
