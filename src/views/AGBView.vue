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
        Allgemeine Geschäftsbedingungen (B2B)
      </h1>

      <div class="space-y-8 md:space-y-10">
        <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
          Stand: 08.02.2026
        </p>

        <section>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Diese AGB gelten für Verträge zwischen der Data Fabricator GmbH („Auftragnehmer") und ihren Kunden („Auftraggeber"), soweit der Auftraggeber Unternehmer im Sinne des § 14 BGB ist.
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            1. Geltungsbereich
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Diese AGB gelten für alle Angebote, Leistungen und Verträge des Auftragnehmers.</p>
            <p>Abweichende Bedingungen des Auftraggebers gelten nur, wenn der Auftragnehmer ihnen schriftlich zustimmt.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            2. Leistungen & Leistungsumfang
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Der konkrete Leistungsumfang ergibt sich aus Angebot, Leistungsbeschreibung, Statement of Work (SoW) oder Projektvertrag.</p>
            <p>Der Auftragnehmer schuldet, soweit nicht ausdrücklich anders vereinbart, eine Dienstleistung (Beratung/Entwicklung nach Aufwand) und keine bestimmte wirtschaftliche Erfolgswirkung.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            3. Mitwirkungspflichten des Auftraggebers
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Der Auftraggeber stellt alle zur Leistungserbringung erforderlichen Informationen, Zugänge und Inhalte rechtzeitig bereit.</p>
            <p>Verzögerungen aufgrund fehlender Mitwirkung verlängern vereinbarte Fristen angemessen; Mehraufwände können zusätzlich vergütet werden.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            4. Vergütung, Abrechnung, Zahlungsbedingungen
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Vergütung nach [Tagessatz / Festpreis / Retainer] gemäß Angebot.</p>
            <p>Rechnungen sind innerhalb von [z. B. 14 Tagen] ohne Abzug fällig.</p>
            <p>Der Auftragnehmer darf angemessene Abschlagszahlungen verlangen.</p>
            <p>Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen; der Auftragnehmer kann Leistungen bis zur Zahlung aussetzen.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            5. Change Requests (Änderungen)
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Änderungen des Leistungsumfangs bedürfen der Textform.</p>
            <p>Der Auftragnehmer bewertet Auswirkungen auf Aufwand, Zeitplan und Kosten; die Umsetzung erfolgt erst nach Freigabe durch den Auftraggeber.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            6. Abnahme (bei Werkleistungen)
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Soweit werkvertragliche Leistungen (z. B. definierte Software-Deliverables) vereinbart sind, erfolgt eine Abnahme nach Bereitstellung und angemessener Prüfzeit [z. B. 10 Werktage].</p>
            <p>Wesentliche Mängel berechtigen zur Abnahmeverweigerung; unwesentliche Mängel nicht.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            7. Nutzungsrechte (IP) & Vorarbeiten
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Sofern nicht anders vereinbart, erhält der Auftraggeber nach vollständiger Zahlung die für den Vertragszweck erforderlichen Nutzungsrechte an den erstellten Arbeitsergebnissen.</p>
            <p>Vorbestehende Tools, Frameworks, Bibliotheken, Templates, Know-how und allgemeine Methoden des Auftragnehmers bleiben dessen Eigentum; der Auftragnehmer kann diese weiterhin nutzen.</p>
            <p>Open-Source-Komponenten unterliegen den jeweiligen Lizenzbedingungen.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            8. Vertraulichkeit
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Beide Parteien verpflichten sich zur Vertraulichkeit über als vertraulich gekennzeichnete oder erkennbar vertrauliche Informationen.</p>
            <p>Ausgenommen sind Informationen, die öffentlich bekannt sind oder rechtmäßig von Dritten erlangt wurden.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            9. Haftung
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit.</p>
            <p>Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und begrenzt auf den typischerweise vorhersehbaren Schaden.</p>
            <p>Eine Haftung für entgangenen Gewinn, mittelbare Schäden und Folgeschäden ist ausgeschlossen, soweit gesetzlich zulässig.</p>
            <p>Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            10. Gewährleistung / Mängel
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Bei Werkleistungen gelten die gesetzlichen Gewährleistungsrechte, soweit nicht abweichend vereinbart.</p>
            <p>Der Auftraggeber hat Mängel unverzüglich mitzuteilen und dem Auftragnehmer Gelegenheit zur Nacherfüllung zu geben.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            11. Laufzeit & Kündigung
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Projektverträge enden mit Erbringung der vereinbarten Leistungen.</p>
            <p>Retainer/Dauerschuldverhältnisse sind mit Frist [z. B. 4 Wochen zum Monatsende] kündbar, soweit nicht anders vereinbart.</p>
            <p>Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</p>
          </div>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            12. Referenznennung
          </h2>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Der Auftragnehmer darf den Auftraggeber als Referenz nennen (Logo/Name), sofern der Auftraggeber dem nicht in Textform widerspricht. [optional: vorherige Freigabe erforderlich]
          </p>
        </section>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            13. Schlussbestimmungen
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-2">
            <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
            <p>Gerichtsstand ist [Hamburg / Norderstedt / Kiel], sofern der Auftraggeber Kaufmann ist.</p>
            <p>Sollte eine Bestimmung unwirksam sein, bleibt der Vertrag im Übrigen wirksam.</p>
          </div>
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
