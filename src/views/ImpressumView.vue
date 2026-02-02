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
        Impressum
      </h1>

      <div class="space-y-8 md:space-y-10">
        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-3">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </h2>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-1">
            <p class="font-medium text-[#1e1d1b]">Data Fabricator GmbH</p>
            <p>Rathausallee 70</p>
            <p>22846 Norderstedt</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section>
          <h3 class="font-family-roboto font-medium text-[#273247] text-lg md:text-xl tracking-tight leading-[1.2] mb-3">
            Vertreten durch:
          </h3>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            Mario M. Schultz (Geschäftsführer)
          </p>
        </section>

        <section>
          <h3 class="font-family-roboto font-medium text-[#273247] text-lg md:text-xl tracking-tight leading-[1.2] mb-3">
            Kontakt:
          </h3>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-1">
            <p>Telefon: <a href="tel:+494060927272" class="text-[#273247] hover:underline underline-offset-2">+49 (0) 40 / 60 92 72 72</a></p>
            <p>E-Mail: <a href="mailto:m.schultz@data-fabricator.com" class="text-[#273247] hover:underline underline-offset-2">m.schultz@data-fabricator.com</a></p>
          </div>
        </section>

        <section>
          <h3 class="font-family-roboto font-medium text-[#273247] text-lg md:text-xl tracking-tight leading-[1.2] mb-3">
            Registereintrag:
          </h3>
          <div class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7] space-y-1">
            <p>Handelsregister: Amtsgericht Kiel</p>
            <p>HRB 12307 KI</p>
          </div>
        </section>

        <section>
          <h3 class="font-family-roboto font-medium text-[#273247] text-lg md:text-xl tracking-tight leading-[1.2] mb-3">
            Umsatzsteuer-ID:
          </h3>
          <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
            DE 273730271 (gemäß § 27a UStG)
          </p>
        </section>

        <div class="border-t border-gray-200 pt-8 md:pt-10"></div>

        <section>
          <h2 class="font-family-roboto font-medium text-[#273247] text-xl md:text-2xl tracking-tight leading-[1.2] mb-5">
            Rechtliche Hinweise
          </h2>

          <div class="space-y-6">
            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                Haftung für Inhalte
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr. Bei Bekanntwerden konkreter Rechtsverletzungen entfernen wir betroffene Inhalte unverzüglich.
              </p>
            </div>

            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                Haftung für Links
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss; verantwortlich ist stets der jeweilige Anbieter/Betreiber. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links unverzüglich.
              </p>
            </div>

            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                Urheberrecht
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
              </p>
            </div>

            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                Datenschutz
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                Informationen zur Verarbeitung personenbezogener Daten findest du in unserer Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h3 class="font-family-roboto font-medium text-[#1e1d1b] text-base md:text-lg tracking-tight leading-[1.2] mb-2">
                Verbraucherstreitbeilegung
              </h3>
              <p class="font-family-jakarta text-[#1e1d1b]/70 text-sm md:text-base leading-[1.7]">
                Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
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
