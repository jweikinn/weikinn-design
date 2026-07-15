import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const css = await fetch(
    'https://fonts.googleapis.com/css2?family=Commissioner:wght@700&display=swap',
    { headers: { 'User-Agent': 'Mozilla/5.0' } }
  ).then(r => r.text())

  const url = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1]
  const fontData = url ? await fetch(url).then(r => r.arrayBuffer()) : null

  return new ImageResponse(
    (
      <div
        style={{
          background: '#6759d7',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '6px',
        }}
      >
        <span
          style={{
            color: '#d5d3e6',
            fontSize: 26,
            fontFamily: 'Commissioner',
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          w
        </span>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: 'Commissioner', data: fontData, weight: 700 }]
        : [],
    }
  )
}
