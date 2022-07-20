/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (
    config
  ) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/resume.pdf'
      }
    })
    return config
  },
}

module.exports = nextConfig
