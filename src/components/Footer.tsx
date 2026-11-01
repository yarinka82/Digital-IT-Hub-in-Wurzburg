import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
    <div className="bg-neutral-900 rounded-2xl p-8 max-w-4xl mx-auto">
      <h2 className="mb-4">Kooperation & Zusammenarbeit</h2>
      <p className="mb-3">Wir suchen Partner, Sponsoren und IT-Interessierte für gemeinsame Projekte und Events.</p>
      <p>Wenn Sie mit uns zusammenarbeiten möchten, kontaktieren Sie uns gerne!</p>
      <a href="mailto:hubdigitalithub@gmail.com" className="bg-sky-500 px-6 py-3 rounded-lg inline-flex items-center gap-2 mt-8"><FaEnvelope /> Schreibt uns</a>
      <div className="mt-28">
       <p>Digital IT Hub Würzburg e.V</p>
       <p>Würzburg</p>
       <p><a href="https://www.linkedin.com/groups/10076160/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"><FaLinkedin /> LinkedIn</a></p>
       <p>E-Mail: <a href="mailto:hubdigitalithub@gmail.com">hubdigitalithub@gmail.com</a></p>
      </div>
     </div>
       <p className="text-left px-4">© 2025 Digital IT Hub Würzburg e.V Deutschland. Alle Rechte vorbehalten.</p>
       <div className="flex justify-center gap-4">
       <Link href="/impressum">Impressum</Link>
       <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </div>
  );}
