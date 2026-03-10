import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Brilliance Corner — Premium Digital Marketing Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Gold accent top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #C9A84C 0%, rgba(201,168,76,0.3) 60%, transparent 100%)',
          }}
        />
        {/* Overline */}
        <div
          style={{
            color: '#C9A84C',
            fontSize: '16px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
          }}
        >
          Premium Digital Marketing
        </div>
        {/* Headline */}
        <div
          style={{
            color: '#F5F0E8',
            fontSize: '72px',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '28px',
            maxWidth: '900px',
          }}
        >
          The{' '}
          <span style={{ color: '#C9A84C' }}>Brilliance</span>
          {' '}Corner
        </div>
        {/* Tagline */}
        <div
          style={{
            color: '#9A9690',
            fontSize: '24px',
            lineHeight: 1.5,
            maxWidth: '700px',
          }}
        >
          Compelling copy, social media strategy, and SEO — for founders who refuse to settle for average.
        </div>
        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            color: '#5A5755',
            fontSize: '18px',
            letterSpacing: '0.05em',
          }}
        >
          thebrilliancecorner.com
        </div>
      </div>
    ),
    { ...size }
  )
}
