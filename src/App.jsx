import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import Placeholder from './components/Placeholder'
import DottedSurface from './components/DottedSurface'
import logoSBC from './assets/logo-sbc.png'

const WHATSAPP_URL = '#'
const CLIENT_URL = '#'

const serviceButtons = [
  { key: 'diagnostico', label: 'DIAGNÓSTICO' },
  { key: 'polissonografia', label: 'POLISSONOGRAFIA' },
  { key: 'apneia', label: 'APNEIA DO SONO' },
  { key: 'insonia', label: 'INSÔNIA' },
]

const serviceButtons2 = [
  { key: 'ronco', label: 'RONCO' },
  { key: 'bruxismo', label: 'BRUXISMO' },
  { key: 'narcolepsia', label: 'NARCOLEPSIA' },
  { key: 'pediatrico', label: 'SONO PEDIÁTRICO' },
]

const faqData = [
  { q: 'Quais serviços a Sono Brasil oferece?', a: 'Oferecemos consultoria completa em medicina do sono, incluindo diagnóstico, tratamento de apneia, insônia, ronco, bruxismo, narcolepsia e distúrbios do sono pediátrico. Nossa equipe multidisciplinar está pronta para ajudá-lo.' },
  { q: 'Como funciona a primeira consulta?', a: 'Na primeira consulta, realizamos uma avaliação completa do seu histórico de sono, hábitos e queixas. Com base nisso, definimos o melhor plano de investigação e tratamento personalizado.' },
  { q: 'A Sono Brasil atende por convênio?', a: 'Trabalhamos com os principais convênios do mercado. Entre em contato conosco para verificar se o seu plano é aceito em nossa clínica.' },
  { q: 'O que é polissonografia?', a: 'A polissonografia é um exame que monitora diversas funções do corpo durante o sono, como atividade cerebral, respiração, batimentos cardíacos e movimentos. É o principal exame para diagnosticar distúrbios do sono.' },
  { q: 'Quanto tempo dura o tratamento?', a: 'O tempo de tratamento varia conforme o distúrbio diagnosticado. Alguns casos podem ser resolvidos em poucas semanas com mudanças de hábitos, enquanto outros podem necessitar de acompanhamento contínuo.' },
  { q: 'Vocês atendem crianças?', a: 'Sim! Temos especialistas em sono pediátrico que atendem desde recém-nascidos até adolescentes, auxiliando no diagnóstico e tratamento de distúrbios do sono infantil.' },
  { q: 'Posso fazer consulta online?', a: 'Sim, oferecemos consultas por telemedicina para acompanhamento e orientações. A primeira consulta e exames presenciais podem ser necessários dependendo do caso.' },
  { q: 'Quais os sinais de que devo procurar um especialista em sono?', a: 'Ronco frequente, sonolência excessiva durante o dia, dificuldade para dormir ou manter o sono, acordar cansado, dores de cabeça matinais e irritabilidade são sinais que merecem atenção especializada.' },
]

const servicosBase = [
  'Avaliação completa do sono.',
  'Polissonografia domiciliar e laboratorial.',
  'Tratamento de Apneia Obstrutiva.',
  'Tratamento de Insônia Crônica.',
  'Tratamento de Ronco.',
  'Tratamento de Bruxismo do Sono.',
  'Avaliação de Narcolepsia.',
  'Higiene do Sono personalizada.',
  'Relatórios detalhados de diagnóstico.',
  'Materiais educativos para pacientes.',
]


const moduleSlideTexts = [
  'Avaliação Inicial', 'Diagnóstico Avançado', 'Plano de Tratamento',
  'Higiene do Sono', 'Terapia Comportamental', 'Acompanhamento',
  'Monitoramento', 'Programa Bem-Estar', 'Sono Restaurador',
  'Vida com Qualidade'
]

const specialModuleTexts = [
  'Apneia', 'Insônia', 'Ronco', 'Bruxismo', 'Narcolepsia',
  'Sono REM', 'Ritmo Circadiano', 'Parassonias', 'Hipersonia',
  'S. Pernas Inquietas', 'Sono Pediátrico', 'Sono Gestacional',
  'Sono Idoso', 'Cronoterapia', 'Fototerapia', 'CPAP',
  'Dispositivo Oral', 'Cirurgia do Sono', 'Nutrição & Sono',
  'Exercício & Sono', 'Meditação'
]

function CheckItem({ text }) {
  return (
    <div className="check-item">
      <i className="fas fa-check-circle"></i>
      <p>{text}</p>
    </div>
  )
}

function App() {
  const [activeService, setActiveService] = useState('diagnostico')
  const [showCheckoutModal, setShowCheckoutModal] = useState(false)

  return (
    <div className="page-wrapper">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-inner section-control">
          <div className="navbar-logo">
            <img src={logoSBC} alt="Sono Brasil Consultoria" className="logo-img" />
          </div>
          <div className="navbar-actions">
            <a href={CLIENT_URL} className="nav-link-student">
              <span>Já sou aluno</span>
            </a>
            <a href="#planos" className="btn btn-primary">Assinar</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <DottedSurface />
        <div className="section-control">
          <div className="hero-content">
            <div className="hero-reviews">
              <div className="review-avatars">
                {[
                  { initial: 'M', color: '#8B2E2E' },
                  { initial: 'R', color: '#6B3A2A' },
                  { initial: 'C', color: '#4A7A3A' },
                  { initial: 'A', color: '#8B2E2E' },
                  { initial: 'L', color: '#6B3A2A' },
                ].map((a, i) => (
                  <div key={i} className="review-avatar" style={{ background: a.color }}>{a.initial}</div>
                ))}
              </div>
              <div className="review-stars">
                {'★★★★★'.split('').map((s, i) => <span key={i} className="star">{s}</span>)}
                <span className="review-score">4.9</span>
              </div>
              <p className="review-count">(487 avaliações)</p>
            </div>
            <h2 className="hero-title">Especialista em qualidade do sono</h2>
            <p className="hero-subtitle">
              Descubra como a Sono Brasil Consultoria pode transformar suas noites e melhorar sua qualidade de vida com tratamentos baseados em evidências científicas.
            </p>
            <div className="hero-video">
              <div className="video-placeholder">
                <Placeholder width={720} height={360} text="" style={{ borderRadius: 16, maxWidth: '100%', aspectRatio: '16/9' }} />
                <div className="video-play-overlay">
                  <div className="video-play-btn">
                    <i className="fas fa-play"></i>
                  </div>
                  <p className="video-play-label">Vídeo Institucional</p>
                </div>
              </div>
            </div>
            <a href="#planos" className="btn btn-primary btn-large">Quero dormir melhor</a>
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP SECTION ===== */}
      <section className="fluency-section">
        <div className="section-control">
          <div className="fluency-content">
            <Placeholder width={374} height={57} text="Parceria Institucional" className="fluency-logo" style={{ borderRadius: 10, maxWidth: 374 }} />
            <h2 className="fluency-title">
              Sono de qualidade transforma vidas. <br />A ciência do sono é o nosso compromisso.
            </h2>
            <div className="fluency-grid section-control">
              <div className="fluency-text">
                <p>A qualidade do sono impacta diretamente a saúde física, mental e a produtividade. Problemas como insônia e apneia afetam milhões de brasileiros.</p>
                <p>Por isso, a Sono Brasil Consultoria se dedica a oferecer <span className="text-accent">diagnósticos precisos e tratamentos personalizados</span> para que você tenha noites restauradoras. <span className="text-bold">Conheça nossos serviços e comece sua transformação.</span></p>
              </div>
              <div className="fluency-image">
                <Placeholder width={400} height={300} text="Imagem Parceria" />
              </div>
            </div>
            <a href="#" className="btn btn-primary btn-large">
              Conheça nossos parceiros
            </a>
          </div>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="balloon-section">
        <div className="section-control">
          <div className="balloon-content">
            <h2 className="balloon-title">
              Nossa missão é cuidar do seu sono para que você <b>acorde todos os dias com energia, disposição e saúde para viver plenamente.</b>
            </h2>
            <Placeholder width={1200} height={400} text="Equipe Sono Brasil" className="balloon-img" style={{ borderRadius: 20 }} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT / STATS ===== */}
      <section className="lema-section">
        <div className="section-control">
          <div className="lema-content">
            <div className="lema-quote-box">
              <p className="lema-label">Na Sono Brasil, acreditamos que:</p>
              <p className="lema-text">Dormir bem não é luxo,<br />é a base de uma<br />vida saudável e produtiva.</p>
            </div>

            <p className="lema-desc">Somos uma equipe multidisciplinar dedicada à medicina do sono. Com profissionais altamente qualificados, atendemos pacientes em todo o Brasil, promovendo saúde e qualidade de vida através do sono restaurador.</p>

            <div className="stats-grid">
              <div className="stats-row">
                <div className="stat-box">
                  <p className="stat-number">+ 10 mil</p>
                  <p className="stat-label">pacientes atendidos</p>
                </div>
                <div className="stat-box">
                  <p className="stat-number">15 anos</p>
                  <p className="stat-label">de experiência</p>
                </div>
                <div className="stat-box">
                  <p className="stat-number">98%</p>
                  <p className="stat-label">de satisfação</p>
                </div>
              </div>
            </div>

            <a href="#planos" className="btn btn-primary btn-large">Agende sua avaliação</a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES / VIDEO SELECTOR ===== */}
      <section className="classes-section">
        <div className="section-control">
          <div className="classes-content">
            <div className="classes-header">
              <h1 className="classes-title">Selecione uma especialidade e conheça nossos serviços:</h1>
            </div>

            <div className="classes-buttons">
              <div className="classes-buttons-row">
                {serviceButtons.map(({ key, label }) => (
                  <button key={key} className={`btn-pill ${activeService === key ? 'active' : ''}`} onClick={() => setActiveService(key)}>
                    {label}
                  </button>
                ))}
              </div>
              <div className="classes-buttons-row">
                {serviceButtons2.map(({ key, label }) => (
                  <button key={key} className={`btn-pill ${activeService === key ? 'active' : ''}`} onClick={() => setActiveService(key)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="video-display">
              <Placeholder width={851} height={479} text={`Serviço: ${activeService.charAt(0).toUpperCase() + activeService.slice(1)}`} style={{ borderRadius: 16, maxWidth: '100%' }} />
            </div>

            <p className="more-text">E muito mais especialidades…</p>
            <a href="#planos" className="btn btn-primary btn-large">Quero dormir melhor</a>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM SECTION ===== */}
      <section className="app-section">
        <div className="section-control">
          <div className="app-content">
            <h1 className="app-title">Acompanhamento completo, do diagnóstico ao <br />tratamento personalizado</h1>

            <div className="app-features-grid">
              {[
                [
                  { icon: 'fa-stethoscope', text: 'Diagnóstico preciso' },
                  { icon: 'fa-clipboard-check', text: 'Plano personalizado' },
                  { icon: 'fa-mobile-screen', text: 'App de monitoramento' },
                ],
                [
                  { icon: 'fa-video', text: 'Teleconsulta disponível' },
                  { icon: 'fa-bell', text: 'Lembretes de tratamento' },
                  { icon: 'fa-chart-line', text: 'Relatórios de progresso' },
                ],
                [
                  { icon: 'fa-user-doctor', text: 'Equipe multidisciplinar' },
                  { icon: 'fa-heart-pulse', text: 'Monitoramento contínuo' },
                ],
              ].map((row, ri) => (
                <div className="app-features-row" key={ri}>
                  {row.map((feat, fi) => (
                    <div className="app-feature" key={fi}>
                      <div className="app-feature-icon">
                        <i className={`fas ${feat.icon}`}></i>
                      </div>
                      <p>{feat.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <Placeholder width={828} height={617} text="Plataforma Sono Brasil" className="app-mockup" style={{ borderRadius: 20 }} />
          </div>
        </div>
      </section>

      {/* ===== METHOD ===== */}
      <section className="method-section">
        <div className="section-control">
          <div className="method-content">
            <h2 className="method-title">Método Sono Brasil: ciência aplicada ao seu descanso</h2>
            <p className="method-desc">
              Anos de pesquisa e prática clínica nos permitiram desenvolver uma metodologia exclusiva para diagnóstico e tratamento dos distúrbios do sono, estruturada em pilares fundamentais: <span className="text-accent">avaliação, diagnóstico, tratamento, monitoramento e prevenção</span>.
            </p>
            <p className="method-sub">Conheça nossas áreas de atuação:</p>
          </div>
        </div>
      </section>

      {/* ===== MODULES CAROUSEL ===== */}
      <section className="modules-carousel">
        <div className="section-control">
          <div className="carousel-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              navigation={{ nextEl: '.mod-next', prevEl: '.mod-prev' }}
              pagination={{ el: '.mod-pagination', clickable: true }}
              breakpoints={{ 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            >
              {moduleSlideTexts.map((text, i) => (
                <SwiperSlide key={i}>
                  <Placeholder width={350} height={450} text={text} style={{ borderRadius: 20 }} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="slider-btn mod-next">
              <div className="slider-arrow">&#8250;</div>
            </div>
            <div className="slider-btn mod-prev">
              <div className="slider-arrow">&#8249;</div>
            </div>
            <div className="swiper-pagination mod-pagination"></div>
          </div>
        </div>
      </section>

      {/* ===== JOURNEY ===== */}
      <section className="journey-section">
        <div className="section-control">
          <div className="journey-content">
            <h2 className="journey-title">Como funciona sua jornada conosco</h2>

            {[
              { num: '01', title: 'AVALIAÇÃO', text: 'Realizamos uma avaliação completa do seu histórico de sono, hábitos e estilo de vida para entender suas necessidades.' },
              { num: '02', title: 'DIAGNÓSTICO', text: 'Com exames especializados como polissonografia, identificamos com precisão o distúrbio do sono e suas causas.' },
              { num: '03', title: 'TRATAMENTO', text: 'Desenvolvemos um plano de tratamento personalizado com acompanhamento contínuo para garantir os melhores resultados.' },
            ].map((step, i) => (
              <div className="journey-step" key={i}>
                <div className="journey-step-num">
                  <span className="journey-num-circle">{step.num}</span>
                </div>
                <div className="journey-step-body">
                  <p className="journey-step-title">{step.title}</p>
                  <p className="journey-step-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIALS ===== */}
      <section className="gamification-section">
        <div className="section-control gamification-inner">
          <div className="gamification-text">
            <h2>Tecnologia de ponta aliada ao cuidado humano</h2>
            <p>Utilizamos os equipamentos mais modernos do mercado para diagnóstico e monitoramento do sono, sempre com o acolhimento e atenção que você merece.</p>
          </div>
          <div className="gamification-img">
            <Placeholder width={474} height={423} text="Equipamentos Modernos" />
          </div>
        </div>
      </section>

      {/* ===== SPECIALISTS ===== */}
      <section className="lives-section">
        <div className="section-control">
          <div className="lives-inner">
            <div className="lives-img">
              <Placeholder width={490} height={474} text="Nossos Especialistas" />
            </div>
            <div className="lives-text">
              <h2>Equipe de especialistas dedicados ao seu bem-estar</h2>
              <p>Nossa equipe é formada por médicos, psicólogos e fisioterapeutas especializados em medicina do sono, prontos para oferecer o melhor atendimento.</p>
              <a href="#planos" className="btn btn-primary btn-large">Conheça a equipe</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECIAL PROGRAMS ===== */}
      <section className="special-section">
        <div className="section-control">
          <h2 className="special-title">Programas especiais com profissionais renomados</h2>
          <p className="special-sub">Mais de 20 programas com especialistas de referência para cuidar de cada aspecto do seu sono:</p>
        </div>
      </section>

      <div className="slider-container">
        <div className="carousel-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            grabCursor
            navigation={{ nextEl: '.spec-next', prevEl: '.spec-prev' }}
            pagination={{ el: '.spec-pagination', clickable: true }}
            breakpoints={{ 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } }}
          >
            {specialModuleTexts.map((text, i) => (
              <SwiperSlide key={i}>
                <Placeholder width={280} height={380} text={text} style={{ borderRadius: 20 }} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-btn spec-next">
            <div className="slider-arrow">&#8250;</div>
          </div>
          <div className="slider-btn spec-prev">
            <div className="slider-arrow">&#8249;</div>
          </div>
          <div className="swiper-pagination spec-pagination"></div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="section-control">
          <div className="cta-content">
            <h1 className="cta-title">O caminho para noites tranquilas e dias produtivos começa aqui:</h1>
            <Placeholder width={650} height={389} text="Sono Brasil - Sua Clínica do Sono" className="cta-img" style={{ borderRadius: 20 }} />
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing-section" id="planos">
        <div className="section-control">
          <div className="pricing-card-full">
            <p className="pricing-cat">SERVIÇOS INCLUSOS</p>
            <div className="pricing-checklist">
              {servicosBase.map((t, i) => <CheckItem key={`b${i}`} text={t} />)}
            </div>

            <div className="pricing-divider"></div>

            <p className="pricing-intro">Invista na sua qualidade de sono com o melhor custo-benefício do mercado:</p>
            <p className="pricing-label">A partir de</p>
            <p className="pricing-price">R$ 299</p>
            <p className="pricing-annual">consulta avulsa ou pacotes especiais</p>
            <a className="btn btn-primary btn-checkout" onClick={(e) => { e.preventDefault(); setShowCheckoutModal(true) }} href="#">
              Agendar minha consulta
            </a>
            <p className="pricing-renewal">Consulte condições para pacotes</p>
          </div>
        </div>
      </section>

      {/* ===== GUARANTEE ===== */}
      <section className="guarantee-section">
        <div className="section-control">
          <div className="guarantee-content">
            <Placeholder width={169} height={169} text="Garantia" style={{ borderRadius: '50%', maxWidth: 169 }} />
            <p className="guarantee-title">SATISFAÇÃO GARANTIDA</p>
            <p className="guarantee-text">Nossa prioridade é o seu bem-estar. Se após a primeira consulta você não se sentir satisfeito com o atendimento, conversaremos sobre a melhor solução para você.</p>
          </div>
        </div>
      </section>

      {/* ===== BIO ===== */}
      <section className="bio-section">
        <div className="section-control bio-inner">
          <div className="bio-text">
            <h2>Conheça o diretor clínico da Sono Brasil</h2>
            <p>Nosso diretor clínico é um profissional com vasta experiência em medicina do sono, com formação nas melhores instituições do país. Sua dedicação à ciência e ao cuidado com o paciente é o que move a Sono Brasil Consultoria.</p>
            <p>Com anos de prática clínica e pesquisa, nossa equipe de liderança garante que cada paciente receba o tratamento mais atualizado e eficaz disponível.</p>
          </div>
          <div className="bio-img">
            <Placeholder width={447} height={519} text="Diretor Clínico" style={{ borderRadius: 20 }} />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="section-control">
          <div className="testimonials-content">
            <h2 className="testimonials-title">Veja o que nossos pacientes dizem sobre nós:</h2>
            <div className="testimonials-grid">
              {['Depoimento 1', 'Depoimento 2', 'Depoimento 3', 'Depoimento 4', 'Depoimento 5', 'Depoimento 6'].map((text, i) => (
                <Placeholder key={i} width={350} height={350} text={text} style={{ borderRadius: 15 }} />
              ))}
            </div>
            <a href="#planos" className="btn btn-primary btn-large">Agendar minha consulta</a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq-section">
        <div className="section-control">
          <div className="faq-content">
            <p className="faq-title">Perguntas Frequentes</p>
            <div className="faq-list">
              {faqData.map((f, i) => (
                <details key={i} className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <div className="support-box">
              <span className="support-label">Precisa de ajuda? Fale conosco.</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <i className="bi bi-whatsapp"></i> FALAR COM ATENDIMENTO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="section-control">
          <div className="footer-inner">
            <div className="footer-row">
              <div className="footer-logo">
                <img src={logoSBC} alt="Sono Brasil Consultoria" className="logo-img logo-footer" />
              </div>
              <div className="footer-links">
                <a href="/termos-de-uso">Termos de uso</a>
                <a href="/politica-privacidade">Política de privacidade</a>
              </div>
            </div>
            <p className="footer-copy">© 2026 Sono Brasil Consultoria – Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      {/* ===== WHATSAPP FLOAT ===== */}
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="wpp-float" title="WhatsApp">
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* ===== CONTACT MODAL ===== */}
      {showCheckoutModal && (
        <div className="modal-overlay" onClick={() => setShowCheckoutModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCheckoutModal(false)}>X</button>
            <h1>Preencha seus dados para agendar:</h1>
            <form onSubmit={(e) => { e.preventDefault(); alert('Agendamento enviado! Entraremos em contato.'); setShowCheckoutModal(false) }}>
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <input type="tel" placeholder="Digite seu telefone" required />
              <button type="submit" className="btn btn-primary btn-submit">AGENDAR CONSULTA</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
