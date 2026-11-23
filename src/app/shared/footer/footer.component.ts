import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">

      <div class="footer-accent footer-accent-one"></div>
      <div class="footer-accent footer-accent-two"></div>

      <div class="footer-shell">

        <!-- =====================================================
             CIERRE EDITORIAL
        ====================================================== -->

        <section class="footer-top">

          <div class="footer-top-copy">

            <span class="footer-kicker">
              BS INMOBILIARIA · PUEBLA
            </span>

            <h2>
              Una forma distinta de
              <em>encontrar tu próximo hogar.</em>
            </h2>

          </div>

          <div class="footer-top-action">

            <p>
              Compra, venta, renta e inversión inmobiliaria
              con atención personalizada.
            </p>

            <a
              routerLink="/contacto"
              class="advisor-link"
            >
              <span>
                Hablar con un asesor
              </span>

              <span
                class="advisor-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>

          </div>

        </section>


        <!-- =====================================================
             NAVEGACIÓN PRINCIPAL
        ====================================================== -->

        <section class="footer-main">

          <!-- MARCA -->

          <div class="footer-brand">

            <a
              routerLink="/"
              class="brand-link"
              aria-label="Ir al inicio de BS Inmobiliaria"
            >
              <span class="footer-brand-mark" aria-hidden="true">
                <img
                  src="images/logo-bs-transparente.png"
                  alt=""
                />
              </span>

              <span class="footer-brand-copy" aria-hidden="true">
                <strong>BS</strong>
                <small>INMOBILIARIA</small>
              </span>
            </a>

            <p class="footer-description">
              Propiedades seleccionadas para quienes buscan
              vivir, invertir y construir una nueva historia en Puebla.
            </p>

          </div>


          <!-- EXPLORA -->

          <nav
            class="footer-column"
            aria-label="Explora"
          >
            <span class="column-label">
              01
            </span>

            <h3>
              Explora
            </h3>

            <a routerLink="/">
              Inicio
            </a>

            <a routerLink="/propiedades">
              Propiedades
            </a>

            <a routerLink="/servicios">
              Servicios
            </a>

            <a routerLink="/contacto">
              Contacto
            </a>
          </nav>


          <!-- DESCUBRIR -->

          <nav
            class="footer-column"
            aria-label="Descubrir"
          >
            <span class="column-label">
              02
            </span>

            <h3>
              Descubrir
            </h3>

            <a routerLink="/descubrir/vivir-en-puebla">
              Vivir en Puebla
            </a>

            <a routerLink="/descubrir/zonas-destacadas">
              Zonas destacadas
            </a>

            <a routerLink="/descubrir/guia-compradores">
              Guía para compradores
            </a>

            <a routerLink="/descubrir/inversion-inmobiliaria">
              Inversión inmobiliaria
            </a>
          </nav>


          <!-- CONTACTO -->

          <div class="footer-column footer-contact">

            <span class="column-label">
              03
            </span>

            <h3>
              Contacto
            </h3>

            <a href="tel:+522221673601">
              222 167 3601
            </a>

            <a [href]="'mailto:' + email">
              {{ email }}
            </a>

            <p>
              Puebla, Puebla
            </p>


            <!-- REDES -->

            <div
              class="socials"
              aria-label="Redes sociales de BS Inmobiliaria"
            >

              <!-- WHATSAPP -->

              <a
                class="social-link"
                href="https://wa.me/522221673601"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de BS Inmobiliaria"
                title="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2a9.5 9.5 0 0 0-8.1 14.45L2.5 21.5l5.18-1.36A9.5 9.5 0 1 0 12 2Zm0 17.2a7.7 7.7 0 0 1-3.93-1.07l-.28-.17-3.07.81.82-2.99-.18-.3A7.7 7.7 0 1 1 12 19.2Zm4.22-5.77c-.23-.12-1.37-.68-1.58-.75-.21-.08-.36-.12-.51.12-.15.23-.59.75-.72.9-.13.16-.26.18-.49.06-.23-.12-.96-.35-1.83-1.12-.68-.6-1.13-1.34-1.26-1.57-.13-.23-.01-.36.1-.47.1-.1.23-.26.34-.39.12-.13.16-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.51-1.24-.7-1.69-.18-.44-.37-.38-.51-.39h-.43c-.15 0-.39.06-.59.29-.2.23-.77.75-.77 1.83 0 1.08.79 2.13.9 2.28.12.15 1.55 2.37 3.76 3.32.53.23.94.36 1.26.46.53.17 1.01.15 1.39.09.42-.06 1.37-.56 1.56-1.1.19-.54.19-1 .13-1.1-.05-.09-.2-.15-.43-.27Z"
                  />
                </svg>
              </a>


              <!-- FACEBOOK -->

              <a
                class="social-link"
                href="https://www.facebook.com/share/14oz7diWzpm/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de BS Inmobiliaria"
                title="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M13.6 22v-9h3l.45-3.5H13.6V7.26c0-1.01.28-1.7 1.74-1.7H17.2V2.43A25.1 25.1 0 0 0 14.5 2C11.82 2 10 3.64 10 6.65V9.5H7v3.5h3v9h3.6Z"
                  />
                </svg>
              </a>


              <!-- INSTAGRAM -->

              <a
                class="social-link"
                href="https://www.instagram.com/bs_inmobiliariapue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de BS Inmobiliaria"
                title="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 6.9A5.1 5.1 0 1 1 6.9 12 5.1 5.1 0 0 1 12 6.9Zm0 1.8A3.3 3.3 0 1 0 15.3 12 3.3 3.3 0 0 0 12 8.7Z"
                  />
                </svg>
              </a>


              <!-- TIKTOK -->

              <a
                class="social-link"
                href="https://www.tiktok.com/@bs_inmobiliaria_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de BS Inmobiliaria"
                title="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M15.35 2c.28 2.37 1.6 3.78 3.9 3.93V9.1a8.1 8.1 0 0 1-3.87-1.02v6.04c0 3.82-2.42 6.88-6.46 6.88A6.36 6.36 0 0 1 2.5 14.6c0-4.1 3.42-7 7.7-6.28v3.23c-2.06-.55-4.24.72-4.24 3.02a2.94 2.94 0 0 0 2.96 3.01c2.18 0 3.08-1.53 3.08-3.67V2h3.35Z"
                  />
                </svg>
              </a>

            </div>

          </div>

        </section>


        <!-- =====================================================
             CIERRE INFERIOR
        ====================================================== -->

        <div class="footer-bottom">

          <span>
            © 2026 BS Inmobiliaria
          </span>

          <span class="footer-signature">
            Tu hogar, nuestra prioridad.
          </span>

          <a
            routerLink="/contacto"
            class="footer-bottom-link"
          >
            Puebla · México
          </a>

        </div>

      </div>

    </footer>
  `,
  styles: [`

    :host {
      display: block;
    }


    /* =====================================================
       BASE
    ====================================================== */

    .footer {
      position: relative;
      overflow: hidden;

      background:
        radial-gradient(
          circle at 10% 0%,
          rgba(56, 184, 198, .075),
          transparent 27%
        ),
        linear-gradient(
          135deg,
          #041d43 0%,
          #062b5f 52%,
          #041f49 100%
        );

      color: #ffffff;

      font-family:
        'Montserrat',
        Arial,
        sans-serif;
    }


    .footer-shell {
      position: relative;
      z-index: 2;

      width:
        min(
          1400px,
          calc(100% - 96px)
        );

      margin: 0 auto;

      padding:
        54px 0 20px;
    }


    /* =====================================================
       ACENTOS DE FONDO
    ====================================================== */

    .footer-accent {
      position: absolute;

      border:
        1px solid
        rgba(255, 255, 255, .035);

      border-radius: 50%;

      pointer-events: none;
    }


    .footer-accent-one {
      top: -420px;
      right: -280px;

      width: 760px;
      height: 760px;
    }


    .footer-accent-two {
      left: 22%;
      bottom: -620px;

      width: 860px;
      height: 860px;
    }


    /* =====================================================
       FRANJA SUPERIOR
    ====================================================== */

    .footer-top {
      display: grid;

      grid-template-columns:
        minmax(0, 1.55fr)
        minmax(290px, .65fr);

      align-items: end;

      gap: 78px;

      padding-bottom: 32px;

      border-bottom:
        1px solid
        rgba(255, 255, 255, .10);
    }


    .footer-kicker {
      display: block;

      margin-bottom: 11px;

      color:
        rgba(100, 214, 223, .90);

      font-size: .56rem;
      font-weight: 700;

      letter-spacing: .21em;

      text-transform: uppercase;
    }


    .footer-top h2 {
      max-width: 730px;

      margin: 0;

      font-family:
        'Cormorant Garamond',
        Georgia,
        serif;

      font-size:
        clamp(
          2.55rem,
          3.7vw,
          4rem
        );

      font-weight: 400;

      line-height: .98;

      letter-spacing: -.018em;
    }


    .footer-top h2 em {
      color:
        rgba(255, 255, 255, .55);

      font-weight: 400;
      font-style: italic;
    }


    .footer-top-action p {
      max-width: 340px;

      margin:
        0 0 15px;

      color:
        rgba(255, 255, 255, .56);

      font-size: .72rem;

      line-height: 1.7;
    }


    .advisor-link {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 20px;

      padding:
        12px 0;

      border-top:
        1px solid
        rgba(255, 255, 255, .14);

      color: #ffffff;

      font-size: .64rem;
      font-weight: 700;

      letter-spacing: .11em;

      text-decoration: none;
      text-transform: uppercase;

      transition:
        color .25s ease,
        border-color .25s ease;
    }


    .advisor-arrow {
      font-size: 1rem;

      transition:
        transform .25s ease;
    }


    .advisor-link:hover {
      color:
        #74d8e1;

      border-color:
        rgba(116, 216, 225, .50);
    }


    .advisor-link:hover .advisor-arrow {
      transform:
        translateX(4px);
    }


    /* =====================================================
       GRID PRINCIPAL
    ====================================================== */

    .footer-main {
      display: grid;

      grid-template-columns:
        minmax(300px, 1.55fr)
        minmax(125px, .65fr)
        minmax(190px, .95fr)
        minmax(220px, .95fr);

      gap: 58px;

      padding:
        34px 0 30px;
    }


    /* =====================================================
       MARCA
    ====================================================== */

    .footer-brand {
      max-width: 390px;
    }


    /* Misma composición que el logotipo del navbar */
    .brand-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      width: fit-content;
      margin-bottom: 18px;
      color: #ffffff;
      text-decoration: none;
    }

    .footer-brand-mark {
      width: 50px;
      height: 52px;
      overflow: hidden;
      display: block;
      flex: 0 0 50px;
    }

    .footer-brand-mark img {
      display: block;
      width: 136px;
      max-width: none;
      height: 54px;
      object-fit: contain;
      object-position: left center;
      transform: translateX(-1px);
    }

    .footer-brand-copy {
      display: grid;
      line-height: 1;
    }

    .footer-brand-copy strong {
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: -.03em;
    }

    .footer-brand-copy small {
      margin-top: 2px;
      font-size: .55rem;
      font-weight: 600;
      letter-spacing: .17em;
    }


    .footer-description {
      max-width: 360px;

      margin: 0;

      color:
        rgba(255, 255, 255, .60);

      font-size: .76rem;

      line-height: 1.74;
    }


    /* =====================================================
       COLUMNAS
    ====================================================== */

    .footer-column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 8px;
    }


    .column-label {
      color:
        rgba(100, 214, 223, .68);

      font-size: .50rem;
      font-weight: 700;

      letter-spacing: .17em;
    }


    .footer-column h3 {
      margin:
        1px 0 8px;

      color: #ffffff;

      font-family:
        'Cormorant Garamond',
        Georgia,
        serif;

      font-size: 1.28rem;
      font-weight: 500;
    }


    .footer-column > a,
    .footer-column > p {
      margin: 0;

      color:
        rgba(255, 255, 255, .58);

      font-size: .72rem;

      line-height: 1.45;

      text-decoration: none;
    }


    .footer-column > a {
      transition:
        color .25s ease,
        transform .25s ease;
    }


    .footer-column > a:hover {
      color: #ffffff;

      transform:
        translateX(3px);
    }


    /* =====================================================
       REDES
    ====================================================== */

    .socials {
      display: flex;
      align-items: center;

      gap: 8px;

      margin-top: 10px;
    }


    .social-link {
      width: 33px;
      height: 33px;

      display: grid;
      place-items: center;

      flex:
        0 0 33px;

      border:
        1px solid
        rgba(255, 255, 255, .16);

      border-radius: 50%;

      color:
        rgba(255, 255, 255, .78);

      text-decoration: none;

      transition:
        transform .22s ease,
        border-color .22s ease,
        background .22s ease,
        color .22s ease;
    }


    .social-link svg {
      width: 14px;
      height: 14px;

      fill: currentColor;
    }


    .social-link:hover {
      transform:
        translateY(-2px);

      border-color:
        #68d6df;

      background:
        #68d6df;

      color:
        #062b5f;
    }


    /* =====================================================
       PIE INFERIOR
    ====================================================== */

    .footer-bottom {
      display: grid;

      grid-template-columns:
        1fr auto 1fr;

      align-items: center;

      gap: 24px;

      padding-top: 17px;

      border-top:
        1px solid
        rgba(255, 255, 255, .085);

      color:
        rgba(255, 255, 255, .34);

      font-size: .60rem;

      letter-spacing: .05em;
    }


    .footer-signature {
      color:
        rgba(255, 255, 255, .42);

      font-family:
        'Cormorant Garamond',
        Georgia,
        serif;

      font-size: .78rem;
      font-style: italic;
    }


    .footer-bottom-link {
      justify-self: end;

      color:
        rgba(255, 255, 255, .36);

      font-size: .59rem;

      letter-spacing: .12em;

      text-decoration: none;
      text-transform: uppercase;

      transition:
        color .25s ease;
    }


    .footer-bottom-link:hover {
      color:
        #74d8e1;
    }


    /* =====================================================
       TABLET
    ====================================================== */

    @media (max-width: 1100px) {

      .footer-shell {
        width:
          min(
            calc(100% - 56px),
            1100px
          );
      }


      .footer-top {
        grid-template-columns: 1fr;

        gap: 22px;
      }


      .footer-top-action {
        max-width: 430px;
      }


      .footer-main {
        grid-template-columns:
          1.3fr 1fr;

        gap:
          34px 58px;
      }

    }


    /* =====================================================
       MÓVIL
    ====================================================== */

    @media (max-width: 680px) {

      .footer-shell {
        width:
          calc(100% - 36px);

        padding:
          42px 0 18px;
      }


      .footer-top {
        padding-bottom: 26px;
      }


      .footer-top h2 {
        font-size:
          clamp(
            2.35rem,
            11vw,
            3.25rem
          );
      }


      .footer-main {
        grid-template-columns: 1fr;

        gap: 28px;

        padding:
          28px 0;
      }


      .footer-brand-mark {
        width: 45px;
        height: 48px;
        flex-basis: 45px;
      }

      .footer-brand-mark img {
        width: 124px;
        height: 49px;
      }

      .footer-brand-copy strong {
        font-size: 1.75rem;
      }

      .footer-brand-copy small {
        font-size: .49rem;
      }


      .footer-description {
        max-width: 100%;
      }


      .socials {
        margin-top: 12px;
      }


      .footer-bottom {
        grid-template-columns: 1fr;

        gap: 9px;
      }


      .footer-signature {
        display: none;
      }


      .footer-bottom-link {
        justify-self: start;
      }

    }

  `]
})
export class FooterComponent {

  readonly email = 'contacto@bsinmobiliaria.com';

}
