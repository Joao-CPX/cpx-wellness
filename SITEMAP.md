# CellPowerX Wellness Center — Sitemap & Content Structure

> Blueprint para desenvolvimento do site. Define páginas, secções, conteúdo e notas técnicas.
> Referência de design: `DESIGN.md`
> Stack: Cloudflare Pages | Bilingue: EN + PT

---

## Decisões Globais

### Navegação Principal (todas as páginas)

```
Logo (wordmark)    |    Treatments    About    Contact    [PT/EN toggle]    [ Book Now → ]
```

- **Logo**: wordmark "CellPowerX Wellness" em Mulish Medium uppercase
- **Book Now**: CTA primário em `--cpx-secondary` (#fb4616), sempre visível
- **Language toggle**: bandeiras ou código simples (PT / EN)
- **Mobile**: hamburger menu com overlay full-screen, Book Now sempre visível

### Footer (todas as páginas)

```
CellPowerX Wellness (wordmark)

Treatments    About    Contact    Privacy Policy    Terms

+351 211 929 218  |  +351 912 051 564
geral@int-medicine.com
Av. Fontes Pereira de Melo, 21, 8º — 1050-116 Lisboa

© 2026 CellPowerX Wellness Center. All rights reserved.
```

### Booking Flow (todas as páginas)

- **Fase 1 (lançamento)**: formulário de contacto simples (nome, email, telefone, mensagem) + contacto directo (telefone, email)
- **Fase 2**: integração com scheduling app CPX (substituir formulário por widget de agendamento inline)
- O CTA "Book Now" aponta sempre para a secção/página de booking activa

---

## Página 1: Homepage

> Objectivo: estabelecer credibilidade, transmitir serenidade, mostrar os tratamentos, converter para booking.

### Secção 1.1 — Hero

| Elemento | Conteúdo |
|----------|----------|
| **Label** | Lisbon's Pioneering Wellness Center — Since 2005 |
| **Heading** | Where Cellular Science Meets Restorative Care |
| **Body** | Two decades of experience. 70,000+ client journeys. The original center where Nuno Nina's frequency-based protocols were born — now open to you. |
| **CTA primário** | Book Your First Session → (laranja) |
| **CTA secundário** | Explore Our Treatments → (outline accent) |
| **Visual** | Placeholder: imagem serena de wellness/spa com luz natural |

**Notas de copy:**
- ✅ Lidera com credibilidade concreta (20 anos, 70k sessões) em vez de buzzwords
- ✅ Posiciona como o centro original, não "mais um"
- ✅ "Cutting-edge" removido — substituído por linguagem mais grounded

---

### Secção 1.2 — Proposta de Valor (3 pilares)

Layout: 3 cards side-by-side

| Card | Título | Texto |
|------|--------|-------|
| 1 | Personalized Protocols | Every journey begins with a comprehensive bioelectrical analysis. No generic solutions — only protocols designed for your unique biology. |
| 2 | Pioneering Technology | Home to the TimeWaver Frequency System, NanoPulse, Infrared therapy, and SLM Wave — technologies refined over two decades of clinical practice. |
| 3 | Expert Team | Our practitioners have worked alongside Nuno Nina for over a decade, trained in the methods and protocols developed at this very center. |

---

### Secção 1.3 — Treatments Preview

Layout: bento grid ou cards com imagem (replicar o padrão do protótipo)

Mostrar os 4 tratamentos com:
- Nome
- Tagline de 1 linha
- "Learn more →" link para a página de Treatments

| Tratamento | Tagline |
|------------|---------|
| TimeWaver Frequency | Frequency-based support for balance, coherence and cellular well-being. |
| NanoPulse | Pulsed magnetic fields for relaxation and energetic balance. |
| Infrared Therapy | Gentle warmth for physical comfort and a sense of lightness. |
| SLM Wave | Non-invasive light frequencies for body harmonization and silhouette refinement. |

---

### Secção 1.4 — Quote / Social Proof

Layout: quote centrada, fundo accent suave

> "Our center is the living laboratory where the entire CellPowerX philosophy comes to life."

Atribuição: **Nuno Nina** — Founder

---

### Secção 1.5 — First Appointment CTA

Layout: bloco dark (`--cpx-dark-bg`) com info + CTA

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | Your Journey Begins Here |
| **Body** | Your first appointment (1h30) includes a comprehensive bioelectrical analysis to map your body's current state, followed by a personalized TimeWaver Frequency session. |
| **CTA** | Book Your First Appointment → (laranja sobre dark) |
| **Detalhe** | Av. Fontes Pereira de Melo, 21, 8º — Lisbon · Between Saldanha & Marquês de Pombal |

---

### Secção 1.6 — Newsletter

Layout: inline form simples, fundo warm-white ou sand

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | Stay Connected |
| **Body** | Receive wellness insights, research updates, and exclusive invitations. |
| **Form** | Email input + Subscribe button |

**Nota técnica:** integrar com Brevo (list ID a definir, separada da list 18 do quiz CPX).

---

## Página 2: Sobre / Filosofia

> Objectivo: contar a história, apresentar o Nuno Nina, explicar a abordagem, construir confiança.

### Secção 2.1 — Intro

| Elemento | Conteúdo |
|----------|----------|
| **Label** | Our Story |
| **Heading** | Two Decades of Frequency-Based Wellness |
| **Body** | Founded in 2005 as Integrative Medicine Lda, CellPowerX Wellness Center is Lisbon's pioneering space dedicated to bioelectrical and frequency-based approaches to well-being. What began as a research-driven clinic has grown into a reference point for integrative wellness in Europe. |

---

### Secção 2.2 — Numbers / Credibility Bar

Layout: 3-4 stats em linha, fundo accent suave

| Stat | Valor |
|------|-------|
| Founded | 2005 |
| Client Journeys | 70,000+ |
| Years of Experience | 20+ |
| Practitioners Trained | (a confirmar — se relevante) |

---

### Secção 2.3 — Nuno Nina (Founder Profile)

Layout: imagem + texto lado a lado, assimétrico

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | Nuno Nina |
| **Subtitle** | Founder & Scientific Director |
| **Bio (versão web — condensada)** | With a background spanning Mathematics, Systems Engineering, and Biochemistry, Nuno Nina has spent over two decades investigating the intersection of frequencies, bioelectrical systems, and human well-being. His research led to the development of the Gold Frequencies protocol and contributed to the TimeWaver Frequency System and the Healy system — technologies now used by practitioners worldwide. More recently, his work has focused on water as a medium for bioelectrical coherence, resulting in CellPower Water®. The Wellness Center in Lisbon remains the epicenter of his ongoing research. |
| **Visual** | Placeholder: retrato profissional do Nuno Nina |

**Nota:** bio completa pode estar disponível como expansão (accordion) ou link para PDF.

---

### Secção 2.4 — Filosofia / Abordagem

Layout: texto + visual abstracto ou ilustração

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | Our Approach |
| **Body** | We work at the informational and bioelectrical level — supporting the body's natural capacity for balance and coherence. Our protocols don't treat symptoms in isolation; they address the underlying bioelectrical environment, creating conditions for the body to self-regulate and restore. Every session is guided by data, refined by experience, and tailored to you. |

---

### Secção 2.5 — Connection to CellPowerX

Layout: bloco com fundo accent ou card destacado

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | The CellPowerX Ecosystem |
| **Body** | Our Wellness Center is more than a clinic — it is the living laboratory where the CellPowerX philosophy comes to life. The protocols developed here inform everything CellPowerX creates, from the ACTYVA device to our supplement lines. When you visit, you experience the source. |
| **CTA** | Visit cellpowerx.com → (link externo, abre em nova tab) |

---

## Página 3: Tratamentos

> Objectivo: apresentar os 4 tratamentos com detalhe suficiente para informar e converter.

### Secção 3.1 — Intro

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | Our Treatments |
| **Body** | Four distinct modalities, one integrated approach. Each treatment can be experienced individually or combined into a personalized protocol designed for your specific needs. |

---

### Secção 3.2 — Treatment Cards (overview)

Layout: grid de 4 cards com scroll/link para detalhe abaixo

Cada card:
- Ícone ou visual
- Nome do tratamento
- Tagline (1 linha)
- "Learn more ↓" (anchor link para a secção de detalhe)

---

### Secção 3.3 — Treatment Detail: TimeWaver Frequency

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | TimeWaver Frequency |
| **Tagline** | Frequency-based support for balance, coherence and cellular well-being |
| **How It Works** | TimeWaver uses precise frequencies and low-intensity electrical signals within an informational framework designed to support cellular organisation and bioelectrical balance. It operates at the informational and bioelectrical level, focusing on supporting coherence within intra- and extracellular environments. |
| **Applications** | Physical comfort and functional balance (muscular tension, joint discomfort, general fatigue). Mental and emotional well-being (stress management, relaxation, focus). Long-term balance and preventive wellness support. |
| **Session Info** | Available as in-clinic sessions or via TimeWaver Home — a portable version pre-configured by our team for home use. |
| **Disclaimer** | Not recommended for individuals with pacemakers, during pregnancy, or in cases involving implanted electronic devices, transplants or epilepsy. |
| **CTA** | Book a TimeWaver Session → |

---

### Secção 3.4 — Treatment Detail: NanoPulse

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | NanoPulse |
| **Tagline** | Pulsed magnetic fields for relaxation and energetic balance |
| **How It Works** | A non-invasive system that generates low-frequency pulsed magnetic fields, interacting with the body at an energetic and bioelectrical level. Sessions last 3 to 20 minutes, with intensity managed by the therapist based on your feedback. |
| **Applications** | Relaxation, energetic balance, and a general sense of comfort and vitality. |
| **Contraindications** | Pacemaker; pregnancy; metallic prosthesis in the treatment area. |
| **CTA** | Book a NanoPulse Session → |

---

### Secção 3.5 — Treatment Detail: Infrared Therapy

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | Infrared Therapy |
| **Tagline** | Gentle warmth for physical comfort and a sense of lightness |
| **How It Works** | Infrared radiation produces a gentle warming effect at the surface of the body. Our infrared environment uses controlled IR energy to create a comfortable thermal experience, promoting relaxation and physical comfort. Non-invasive, no direct contact, and generally well tolerated. |
| **Applications** | Relaxation, physical comfort, enhanced sense of lightness and overall well-being. |
| **CTA** | Book an Infrared Session → |

**Nota:** esta secção é a mais curta. Considerar adicionar mais contexto — benefícios específicos, o que esperar numa sessão, duração típica.

---

### Secção 3.6 — Treatment Detail: SLM Wave

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | SLM Wave |
| **Tagline** | Non-invasive light frequencies for body harmonization |
| **How It Works** | SLM Wave uses specific 532nm light frequencies to provide energetic stimulation, supporting natural body harmonization and enhancing the aesthetic appearance of the silhouette. A premium, painless experience. |
| **Applications** | Body harmonization, silhouette refinement, aesthetic well-being. |
| **CTA** | Book an SLM Wave Session → |

**Nota (copy rewritten):** o original era copy B2B ("offer your clients"). Reescrito na perspectiva do cliente final.

---

### Secção 3.7 — First Appointment Explainer

Layout: bloco destacado (reutiliza o padrão da homepage 1.5)

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | How It Begins |
| **Body** | Your first visit (approximately 1h30) includes a bioelectrical analysis performed at the center to identify your body's electrical levels and areas of focus, followed by an initial TimeWaver Frequency session. From there, we design your personalized protocol. |
| **CTA** | Book Your First Appointment → |

---

### Secção 3.8 — Disclaimer Global

Layout: texto discreto no fim da página

> All treatments described are wellness-oriented and do not constitute medical advice, diagnosis, or treatment. The TimeWaver Frequency System and related technologies are wellness devices designed to support balance and well-being within an informational and bioelectrical framework.

---

## Página 4: Contacto / Booking

> Objectivo: converter. Dar toda a informação necessária para marcar e chegar ao centro.

### Secção 4.1 — Booking

| Elemento | Conteúdo |
|----------|----------|
| **Heading** | Book Your Visit |
| **Body** | Ready to begin? Reach out to schedule your first appointment or ask any questions. |
| **Fase 1** | Formulário simples: Nome, Email, Telefone, Mensagem (textarea), Submit |
| **Fase 2** | Widget do scheduling app CPX (inline embed) |

---

### Secção 4.2 — Contact Info

Layout: info + mapa lado a lado

| Elemento | Conteúdo |
|----------|----------|
| **Telefone** | +351 211 929 218 · +351 912 051 564 |
| **Email** | geral@int-medicine.com |
| **Morada** | Av. Fontes Pereira de Melo, 21, 8º — 1050-116 Lisbon, Portugal |
| **Referência** | Between Saldanha and Marquês de Pombal |
| **Mapa** | Google Maps embed ou mapa estático |

---

### Secção 4.3 — Horários

| Dia | Horário |
|-----|---------|
| (a preencher) | (a preencher) |

**Nota:** precisamos de confirmar os horários de funcionamento.

---

### Secção 4.4 — FAQ (opcional, nice-to-have)

Accordion com perguntas frequentes:

- What happens in the first appointment?
- How long is a typical session?
- Is electrotherapy safe?
- Can treatments be combined?
- Do you offer packages?

---

## Página 5 (Nice-to-have): Journal / Blog

> Só se o scope permitir. Pode ser adicionado como fase 2.

- Layout simples: lista de artigos com título, data, excerpt, imagem
- Página individual de artigo com layout de leitura (max-width 620px, boa tipografia)
- Pode ser estático (markdown → HTML) ou ligado a um CMS leve (headless)
- Temas: investigação do Nuno Nina, explicações de tratamentos, wellness insights

---

## Notas Técnicas

### i18n (PT/EN)

- **Abordagem recomendada:** ficheiros JSON de tradução (`/locales/en.json`, `/locales/pt.json`) com toggle no header
- **URLs:** `/en/treatments`, `/pt/tratamentos` ou query param `?lang=pt`
- **Default:** EN (dado o público internacional; PT como segunda língua)
- **Nota:** copy neste documento está em EN; versão PT a produzir depois da aprovação estrutural

### Scheduling App Integration

- **Fase 1:** formulário HTML simples → envia email para `geral@int-medicine.com` (via Cloudflare Worker ou Brevo form)
- **Fase 2:** embed do scheduling app CPX (iframe ou web component)
- **O scheduling app e o site podem ser desenvolvidos em paralelo** — a interface entre eles é um simples embed/redirect

### Imagens

- Todas placeholder/stock na fase 1
- Direcção fotográfica no `DESIGN.md` (secção 6): luz natural, tons quentes, desaturação suave
- Formatos: WebP com fallback JPG, lazy loading, aspect ratios definidos para evitar CLS

### SEO Basics

- Meta titles e descriptions por página (bilingues)
- Schema.org markup: LocalBusiness, MedicalBusiness (ou HealthAndBeautyBusiness)
- Open Graph tags para partilha social
- Sitemap.xml + robots.txt

---

*Próximo passo: aprovação desta estrutura → desenvolvimento da Homepage como primeira página.*
