import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Spiritual First Aid">

      {/* Hero Section */}
      <main className="hero-container" style={{
        backgroundColor: '#020617', // Slate-950
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>

        {/* <div style={{ marginBottom: '2rem', color: '#10b981' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div> */}

        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '900',
          color: 'white',
          letterSpacing: '-0.00em',
          lineHeight: '1.1',
          marginBottom: '1rem'
        }}>
          TAKE YOUR STAND
        </h1>

        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          color: 'white',
          letterSpacing: '-0.00em',
          lineHeight: '1.1',
          marginBottom: '1rem'
        }}>
          Biblical Defense Protocols
        </h2>

        <p style={{
          fontSize: '1.25rem',
          color: '#94a3b8', // Slate-400
          maxWidth: '600px',
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}>
          “Finally, be strong in the Lord and in his mighty power. Put on the full armor of God, so that you can
          take your stand against the devil’s schemes. For our struggle is not against flesh and blood, but
          against the rulers, against the authorities, against the powers of this dark world and against the
          spiritual forces of evil in the heavenly realms.” (Ephesians 6:10-12)
        </p>

        {/* The Fork in the Road */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* Button 1: The App */}
          {/* <Link
            to="https://app.battleprotocols.com"
            style={{
              backgroundColor: '#10b981', // Emerald
              color: '#020617',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid #10b981'
            }}>
            <span>LAUNCH APP</span>
            <span>→</span>
          </Link> */}

          {/* Button 2: The Manual */}
          <Link
            to="/docs/read-this-first"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              border: '1px solid #334155' // Slate-700
            }}>
            READ THE MANUAL
          </Link>
        </div>

      </main>
    </Layout>
  );
}