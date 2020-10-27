import QRCode from 'qrcode-svg'

export default (req, res) => {
  const url = req.query.url
  const svg = new QRCode(url)

  res.statusCode = 200
  res.setHeader('Content-type', 'image/svg+xml')

  res.send(svg.svg())
}