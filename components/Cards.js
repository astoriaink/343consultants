import Link from "next/link";
import { ArrowRight, ClipboardList, HardHat, ShieldCheck, LockKeyhole } from "lucide-react";

const serviceIcons = {
  "project-management": ClipboardList,
  "construction-management": HardHat,
  "safety-risk-analysis": ShieldCheck,
  "security-risk-assessment": LockKeyhole
};

export function ServiceCard({ service }) {
  const Icon = serviceIcons[service.slug] || ClipboardList;

  return (
    <Link className="card link-card" href={`/services/${service.slug}`}>
      <span className="service-icon">
        <Icon size={26} aria-hidden="true" />
      </span>
      <strong>{service.title}</strong>
      <p>{service.cardCopy || service.short}</p>
      <span className="card-action">
        Learn more
        <ArrowRight size={18} aria-hidden="true" />
      </span>
    </Link>
  );
}

export function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
