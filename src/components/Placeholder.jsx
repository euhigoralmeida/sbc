function Placeholder({ width = 600, height = 400, text = 'Imagem', className = '', style = {} }) {
  return (
    <div
      className={`placeholder-img ${className}`}
      style={{
        width: '100%',
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        background: 'linear-gradient(135deg, #1a3a5c 0%, #2563A6 50%, #1a3a5c 100%)',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 14,
        fontWeight: 500,
        fontFamily: 'Montserrat, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span style={{ marginTop: 8 }}>{text}</span>
    </div>
  )
}

export default Placeholder
