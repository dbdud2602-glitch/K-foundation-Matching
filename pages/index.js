import Head from 'next/head';
import CushionToneMatcher from '../components/CushionToneMatcher';

export default function Home() {
  return (
    <>
      <Head>
        <title>CUSHION MATCH | K-Beauty 쿠션 톤 매칭 - 올리브영 실시간 데이터</title>
        <meta 
          name="description" 
          content="IOPE, LANEIGE, HERA 등 K-Beauty 쿠션 톤을 자동으로 매칭해주는 서비스. 올리브영 실시간 제품 정보 기반 검색."
        />
        <meta name="keywords" content="쿠션 톤 매칭, K-beauty, 올리브영, IOPE, LANEIGE, HERA, 파운데이션 톤, 메이크업" />
        <meta name="author" content="CUSHION MATCH" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CUSHION MATCH | K-Beauty 쿠션 톤 매칭 서비스" />
        <meta property="og:description" content="올리브영 실시간 데이터 기반. 당신의 쿠션 톤에 맞는 다른 브랜드 제품을 찾아보세요!" />
        <meta property="og:url" content="https://cushion-match.com" />
        <meta property="og:image" content="https://cushion-match.com/og-image.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CUSHION MATCH - K-Beauty 쿠션 톤 매칭" />
        <meta name="twitter:description" content="올리브영 실시간 데이터로 당신의 쿠션 톤을 매칭해주는 서비스" />
        
        <link rel="canonical" href="https://cushion-match.com" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Korean" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <CushionToneMatcher />
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "CUSHION MATCH",
        "description": "K-Beauty 쿠션 톤 매칭 서비스",
        "url": "https://cushion-match.com",
        "applicationCategory": "Lifestyle",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "KRW"
        }
      })}}></script>
    </>
  );
}
