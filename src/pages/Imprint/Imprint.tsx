import { Column, Container, Row } from 'components/layout'
import { Section } from 'components/ui'
import { ROUTES } from 'data'
import { SiteOwnerInfo } from './components'

function Imprint() {
  const anchorReplace = '/imprint#'

  return (
    <Container className="navbar-spacer">
      <Row>
        <Column>
          <Section anchor={ROUTES.imprintHash} anchorReplace={anchorReplace} lg title="Impressum">
            <p>
              <b>Inhaber der Seite</b>
            </p>
            <SiteOwnerInfo />
          </Section>
          <Section
            anchor={ROUTES.privacyPolicyHash}
            anchorReplace={anchorReplace}
            lg
            title="Datenschutz"
          >
            <p>
              Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im
              Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen
              und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort
              angebotenen Leistungen, verarbeitet.
            </p>
            <p>
              Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
              Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als „Verarbeitung“
              jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede
              solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das
              Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder
              Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch
              Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder
              die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
            </p>
            <p>
              Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art,
              Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten,
              soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der
              Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu
              Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten
              Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung
              verarbeiten.
            </p>
            <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
            <p>
              I. Informationen über uns als Verantwortliche
              <br />
              II. Rechte der Nutzer und Betroffenen
              <br />
              III. Informationen zur Datenverarbeitung
            </p>
          </Section>
          <Section md title="I. Informationen über uns als Verantwortliche">
            <p>
              Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne
              ist:
            </p>
            <SiteOwnerInfo />
          </Section>
          <Section md title="II. Rechte der Nutzer und Betroffenen">
            <p>
              Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die
              Nutzer und Betroffenen das Recht
            </p>
            <ul>
              <li>
                auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die
                verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf
                Kopien der Daten (vgl. auch Art. 15 DSGVO);
              </li>
              <li>
                auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl.
                auch Art. 16 DSGVO);
              </li>
              <li>
                auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO),
                oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO
                erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;
              </li>
              <li>
                auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf
                Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20
                DSGVO);
              </li>
              <li>
                auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die
                sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche
                Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).
              </li>
            </ul>
            <p>
              Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber
              Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder
              Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel
              16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch
              nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand
              verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese
              Empfänger.
            </p>
            <p>
              <b>
                Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf
                Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die
                Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet
                werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der
                Direktwerbung statthaft.
              </b>
            </p>
          </Section>
          <Section md title="III. Informationen zur Datenverarbeitung">
            <p>
              Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder
              gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine
              anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.
            </p>
            <Section sm title="Cookies">
              <p>
                Wir verwenden mit unserem Internetauftritt <u>keine</u> sog. Cookies.
              </p>
            </Section>
            <Section sm title="Kontaktanfragen / Kontaktmöglichkeit">
              <p>
                Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die
                dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe
                der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich - ohne
                deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt
                beantworten.
              </p>
              <p>Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
              <p>
                Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist
                und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw.
                bei einer sich etwaig anschließenden Vertragsabwicklung.
              </p>
            </Section>
          </Section>
        </Column>
      </Row>
    </Container>
  )
}

export { Imprint }
