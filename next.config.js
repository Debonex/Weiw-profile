/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/profile',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/svg+xml'
          }
        ]
      }
    ]
  }
}
