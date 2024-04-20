/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: "export",
    basePath: isProd ? '/jessicaluong.github.io' : '',
    assetPrefix: isProd ? '/jessicaluong.github.io/' : '',
};    
  
export default nextConfig;