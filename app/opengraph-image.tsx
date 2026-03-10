import { ImageResponse } from 'next/og'

export const alt = 'The Brilliance Corner — Premium Digital Marketing Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          background: '#0A0A0A',
          padding: '72px 80px',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            display: 'flex',
            width: '120px',
            height: '3px',
            background: '#C9A84C',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Overline */}
          <div
            style={{
              display: 'flex',
              color: '#C9A84C',
              fontSize: '15px',
              fontFamily: 'Georgia, serif',
              marginBottom: '24px',
              letterSpacing: '3px',
            }}
          >
            PREMIUM DIGITAL MARKETING
          </div>

          {/* Headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                color: '#F5F0E8',
                fontSize: '74px',
                fontFamily: 'Georgia, serif',
                lineHeight: '1.05',
              }}
            >
              The{' '}
            </span>
            <span
              style={{
                color: '#C9A84C',
                fontSize: '74px',
                fontFamily: 'Georgia, serif',
                lineHeight: '1.05',
              }}
            >
              Brilliance
            </span>
            <span
              style={{
                color: '#F5F0E8',
                fontSize: '74px',
                fontFamily: 'Georgia, serif',
                lineHeight: '1.05',
              }}
            >
              {' '}Corner
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              color: '#9A9690',
              fontSize: '24px',
              fontFamily: 'Georgia, serif',
              maxWidth: '680px',
              lineHeight: '1.5',
            }}
          >
            Compelling copy, SEO, and social media — for founders who refuse to settle for average.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              color: '#5A5755',
              fontSize: '17px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '1px',
            }}
          >
            thebrilliancecorner.com
          </div>
          <div
            style={{
              display: 'flex',
              width: '40px',
              height: '40px',
              background: '#C9A84C',
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: '#0A0A0A',
                fontSize: '18px',
                fontFamily: 'Georgia, serif',
                fontWeight: 'bold',
              }}
            >
              B
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
