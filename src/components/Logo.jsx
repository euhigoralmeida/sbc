/**
 * Logo Sono Brasil Consultoria - SVG fiel à logo original.
 *
 * PARA USAR A LOGO PNG ORIGINAL:
 * Coloque o arquivo em: src/assets/logo-sono-brasil.png
 * e descomente a versão com <img> abaixo.
 */

// import logoImg from '../assets/logo-sono-brasil.png'

function Logo({ variant = 'dark', width = 220, className = '' }) {
  /*
  // Descomente para usar a imagem PNG real:
  return (
    <img
      src={logoImg}
      alt="Sono Brasil Consultoria"
      width={width}
      className={className}
      style={{ height: 'auto', filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none' }}
    />
  )
  */
  return <LogoSVG variant={variant} width={width} className={className} />
}

function LogoSVG({ variant = 'dark', width = 220, className = '' }) {
  const isLight = variant === 'light'
  const blueText = isLight ? '#ffffff' : '#0B5FAA'
  const blueTextLight = isLight ? '#ccddef' : '#1A7BBF'
  // Unique IDs to avoid SVG gradient conflicts when multiple logos render
  const uid = `sb-${variant}`

  return (
    <svg
      className={className}
      width={width}
      height={width * 0.48}
      viewBox="0 0 620 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sono Brasil Consultoria"
    >
      <defs>
        {/* Icon background gradient: red bottom → blue top */}
        <linearGradient id={`${uid}-bg`} x1="85" y1="235" x2="85" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D42027" />
          <stop offset="45%" stopColor="#2878B5" />
          <stop offset="100%" stopColor="#3BA0A8" />
        </linearGradient>
        {/* Shine / 3D highlight on the icon */}
        <linearGradient id={`${uid}-shine`} x1="85" y1="20" x2="85" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        {/* Red top tab gradient */}
        <linearGradient id={`${uid}-tab`} x1="85" y1="10" x2="85" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8333A" />
          <stop offset="100%" stopColor="#CF2027" />
        </linearGradient>
        {/* Shadow filter */}
        <filter id={`${uid}-shadow`} x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="3" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.25)" />
        </filter>
      </defs>

      {/* === ICON === */}
      <g filter={isLight ? undefined : `url(#${uid}-shadow)`}>
        {/* Main blue rounded rectangle body */}
        <rect x="12" y="70" width="160" height="165" rx="30" fill={`url(#${uid}-bg)`} />

        {/* Red top "tab" / flap that overlaps the top */}
        <rect x="30" y="15" width="120" height="100" rx="22" fill={`url(#${uid}-tab)`} />

        {/* 3D shine overlay on the top tab */}
        <rect x="30" y="15" width="120" height="55" rx="22" fill={`url(#${uid}-shine)`} />

        {/* EKG / Heartbeat line — the signature element */}
        <polyline
          points="18,158  45,158  68,158  82,98  100,215  115,105  130,158  155,158  178,158"
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.95"
        />

        {/* Subtle bottom-right highlight for 3D effect */}
        <rect x="12" y="70" width="160" height="165" rx="30" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
      </g>

      {/* === TEXT === */}
      {/* "Sono Brasil" — bold */}
      <text
        x="195"
        y="155"
        fontFamily="'Montserrat', 'Segoe UI', Arial, sans-serif"
        fontWeight="800"
        fontSize="78"
        fill={blueText}
        letterSpacing="-2"
      >
        Sono Brasil
      </text>

      {/* "Consultoria" — medium, positioned right-aligned under "Brasil" */}
      <text
        x="370"
        y="215"
        fontFamily="'Montserrat', 'Segoe UI', Arial, sans-serif"
        fontWeight="600"
        fontSize="48"
        fill={blueTextLight}
        letterSpacing="0"
      >
        Consultoria
      </text>
    </svg>
  )
}

export default Logo
