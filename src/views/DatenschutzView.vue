<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-[900px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
      <div class="flex items-center justify-between mb-12 md:mb-16">
        <router-link
          to="/"
          class="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            class="w-[140px] md:w-[160px] h-auto"
            alt="Data Fabricator Logo"
            src="/logo-datafabrictor.svg"
          />
        </router-link>

        <router-link
          to="/"
          class="inline-flex items-center gap-2 h-[40px] px-6 rounded-[20px] font-family-jakarta font-normal text-base leading-[24px] tracking-normal border-2 border-[#273247] text-[#273247] hover:bg-[#273247] hover:text-white transition-all duration-300"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Zurück
        </router-link>
      </div>

      <h1 class="font-family-roboto font-light text-[#1e1d1b] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-10 md:mb-12">
        Datenschutzerklärung
      </h1>

      <div class="space-y-8 md:space-y-10">
        <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
          Stand: 08.02.2026
        </p>

        <section>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche personenbezogenen Daten wir bei der Nutzung unserer Website verarbeiten und welche Rechte Ihnen nach der Datenschutz-Grundverordnung (DSGVO) zustehen.
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            1. Verantwortlicher
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-1">
            <p class="font-medium text-[#1e1d1b]">Data Fabricator GmbH</p>
            <p>Rathausallee 70, 22846 Norderstedt, Deutschland</p>
            <p>Telefon: <a href="tel:+494060927272" class="text-[#273247] hover:underline underline-offset-2">+49 (0) 40 / 60 92 72 72</a></p>
            <p>E-Mail: <a href="mailto:m.schultz@data-fabricator.com" class="text-[#273247] hover:underline underline-offset-2">m.schultz@data-fabricator.com</a></p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            2. Zwecke und Rechtsgrundlagen
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Wir verarbeiten personenbezogene Daten zu folgenden Zwecken und auf folgenden Rechtsgrundlagen:</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>Bereitstellung und Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO)</li>
              <li>Bearbeitung von Anfragen / Projektanbahnung (Art. 6 Abs. 1 lit. b DSGVO)</li>
              <li>Erfüllung rechtlicher Pflichten (Art. 6 Abs. 1 lit. c DSGVO)</li>
              <li>Optionale Analyse/Marketing nur mit Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern eingesetzt</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            4. Websitebereitstellung & Server-Logfiles
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Beim Aufruf der Website werden durch den Hostinganbieter technisch erforderliche Daten (Server-Logfiles) verarbeitet, z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite, Referrer-URL, Browser/OS.</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>Zwecke: Stabilität, Sicherheit, Fehleranalyse, Abwehr von Angriffen.</li>
              <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</li>
              <li>Speicherdauer: [z. B. 7–14 Tage].</li>
            </ul>
            <p class="mt-2">Hostinganbieter: Hetzner</p>
            <p>Auftragsverarbeitung: Es besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO), sofern erforderlich.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            5. Kontaktaufnahme (E-Mail, Telefon, Kontaktformular)
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Bei Kontaktaufnahme verarbeiten wir Ihre Angaben (Name, E-Mail, ggf. Telefonnummer, Unternehmen, Inhalt Ihrer Nachricht) zur Bearbeitung Ihrer Anfrage.</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich) und/oder Art. 6 Abs. 1 lit. f DSGVO.</li>
              <li>Speicherdauer: bis zur abschließenden Bearbeitung; darüber hinaus nur, wenn Aufbewahrungspflichten bestehen oder zur Dokumentation.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            6. Cookies & Einwilligungsmanagement
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Wir verwenden ggf. Cookies/ähnliche Technologien. Technisch notwendige Cookies sind für Betrieb und Sicherheit erforderlich. Optionale Cookies (z. B. Analyse/Marketing) setzen wir nur mit Einwilligung ein.</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>Einwilligungsbanner/Tool: [falls vorhanden: Name des Tools]</li>
              <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO (Nachweis) und Art. 6 Abs. 1 lit. f DSGVO (rechtssichere Verwaltung).</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            7. Drittinhalte / externe Dienste
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Sofern wir Drittinhalte einbinden (z. B. Karten, Videos, externe Schriftarten), kann der Drittanbieter technisch erforderliche Daten (z. B. IP-Adresse) verarbeiten.</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>Schriftarten: [Google Fonts lokal / extern]</li>
              <li>Karten: [Mapbox/Google Maps]</li>
              <li>Spam-Schutz: [reCAPTCHA/hCaptcha/none]</li>
            </ul>
            <p class="mt-2">Rechtsgrundlage: in der Regel Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern nicht zwingend technisch erforderlich.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            9. Empfänger, Auftragsverarbeiter, Drittland
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Wir setzen Dienstleister ein (Hosting/IT), die Daten in unserem Auftrag verarbeiten. Eine Übermittlung in Drittländer findet nur statt, wenn die DSGVO-Voraussetzungen erfüllt sind (z. B. Angemessenheitsbeschluss, Standardvertragsklauseln) und/oder eine Einwilligung vorliegt.
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            10. Speicherdauer
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Wir speichern Daten nur so lange, wie es für Zwecke oder gesetzliche Pflichten erforderlich ist. Geschäftsrelevante Kommunikation kann handels-/steuerrechtlichen Fristen unterliegen.
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            11. Ihre Rechte
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Sie haben insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch sowie Widerruf erteilter Einwilligungen.
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            12. Beschwerderecht
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist insbesondere die Behörde Ihres Aufenthaltsortes oder die des Sitzes unseres Unternehmens.
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            13. Datensicherheit
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen.
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            14. Änderungen
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Wir passen diese Datenschutzerklärung an, wenn sich Rechtslage oder unsere Datenverarbeitungen ändern.
          </p>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.font-family-jakarta {
  font-family: 'Plus Jakarta Sans', Helvetica, sans-serif;
}

.font-family-roboto {
  font-family: 'Roboto', Helvetica, sans-serif;
}
</style>
