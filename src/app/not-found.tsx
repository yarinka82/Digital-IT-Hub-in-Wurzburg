import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Nicht gefunden</h2>
      <p>Die angeforderte Ressource konnte nicht gefunden werden</p>
      <Link href="/">Zurück zur Startseite</Link>
    </div>
  );
}
