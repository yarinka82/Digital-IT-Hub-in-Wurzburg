import Link from "next/link";

export default function Impressum() {
  return (
    <div className="p-16 bg-white text-black">
      <div className="text-left">
        <Link href="/" className="text-blue-600 underline hover:text-blue-800">
          Zurück zur Startseite
        </Link>
      </div>
      <h1 className="text-black">Impressum</h1>
      <h2 className="text-black">Angaben gemäß § 5 DDG</h2>
      <address className="not-italic">
        Digital IT Hub in Würzburg e.V.
        <br />
        Den Haager Straße 18
        <br />
        97084 Würzburg
      </address>
      <h2 className="text-black">Vertreten durch den Vorstand:</h2>
      <p>Iryna Velchenko (1. Vorsitzende)</p>
      <p>Illia Rohalskyi (stellvertretender Vorsitzender)</p>
      <h2 className="text-black">Kontakt:</h2>
      <p>
        Email:&nbsp;
        <a
          href="mailto:hubdigitalithub@gmail.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          hubdigitalithub@gmail.com
        </a>
      </p>
      <p>
        <a
          href="mailto:wurzburg-digitalithub@web.de"
          className="text-blue-600 underline hover:text-blue-800"
        >
          wurzburg-digitalithub@web.de
        </a>
      </p>
      <h2 className="text-black">Vereinsregister:</h2>
      <p>Registergericht: Amtsgericht Würzburg</p>
      <p>Registernummer: VR201695</p>
      <h2 className="text-black">
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
      </h2>
      <address className="not-italic">
        Digital IT Hub in Würzburg e.V.
        <br />
        Den Haager Straße 18
        <br />
        97084 Würzburg
      </address>
      <h2 className="text-black">Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene
        Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen. Bei Bekanntwerden von Rechtsverletzungen werden wir
        entsprechende Inhalte umgehend entfernen.
      </p>
      <h2 className="text-black">Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir
        keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
        der jeweilige Anbieter verantwortlich.
      </p>
      <h2 className="text-black">Urheberrecht</h2>
      <p>
        Die durch uns erstellten Inhalte und Werke auf diesen Seiten unterliegen
        dem deutschen Urheberrecht. Beiträge Dritter sind als solche
        gekennzeichnet. Vervielfältigung, Bearbeitung und Verbreitung bedürfen
        der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>
    </div>
  );
}
