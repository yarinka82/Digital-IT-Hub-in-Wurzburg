import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <h2>Kooperation & Zusammenarbeit</h2>
      <p>Wir suchen Partner, Sponsoren und IT-Interessierte für gemeinsame Projekte und Events.</p>
      <p>Wenn Sie mit uns zusammenarbeiten möchten, kontaktieren Sie uns gerne!</p>
      <a href="mailto:hubdigitalithub@gmail.com" className="bg-sky-500 px-6 py-3 rounded-lg inline-block mt-6">Schreibt uns</a>
      <div>
       <p>Digital IT Hub Würzburg e.V</p>
       <p>Würzburg</p>
       <p><a href="https://www.linkedin.com/groups/10076160/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"><FaLinkedin /> LinkedIn</a></p>
       <p>E-Mail: <a href="mailto:hubdigitalithub@gmail.com">hubdigitalithub@gmail.com</a></p>
      </div>
       <p>© 2025 Digital IT Hub Würzburg e.V Deutschland. Alle Rechte vorbehalten.</p>
      <div className="flex justify-center gap-4">
       <Link href="/impressum">Impressum</Link>
       <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </div>
  );}
