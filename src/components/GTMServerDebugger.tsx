import { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';

interface ContainerItem {
  name: string;
  type: string;
  config?: string;
  trigger?: string;
  status: 'correct' | 'missing' | 'wrong' | 'unknown';
  notes?: string;
}

export default function GTMServerDebugger() {
  const [webContainerItems, setWebContainerItems] = useState<ContainerItem[]>([
    { name: 'Meta Pixel Base Tag', type: 'Custom HTML', config: 'fbq init + PageView', trigger: 'All Pages', status: 'wrong', notes: 'Missing endpoint configuration - not sending to server container' }
  ]);
  
  const [serverContainerItems, setServerContainerItems] = useState<ContainerItem[]>([
    { name: 'Facebook Conversions API', type: 'Facebook Conversions API', config: 'All 9 Event Data variables configured', trigger: 'Custom Event', status: 'correct', notes: 'Tag configuration is perfect ✓' },
    { name: 'GA4 Client', type: 'Client', status: 'missing', notes: 'MISSING - Need this to receive events from web container' }
  ]);

  const [expandedSections, setExpandedSections] = useState({
    diagnosis: true,
    webContainer: true,
    serverContainer: true,
    fix: true
  });

  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'correct':
        return <CheckCircle2 style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0 }} />;
      case 'missing':
        return <XCircle style={{ width: '20px', height: '20px', color: '#ef4444', flexShrink: 0 }} />;
      case 'wrong':
        return <AlertCircle style={{ width: '20px', height: '20px', color: '#f59e0b', flexShrink: 0 }} />;
      default:
        return <AlertCircle style={{ width: '20px', height: '20px', color: '#6b7280', flexShrink: 0 }} />;
    }
  };

  const codeSnippet1 = `fbq('set', 'endpoint', 'https://tracking.jayscatering.com');`;
  
  const fullCodeSnippet = `<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('set', 'endpoint', 'https://tracking.jayscatering.com');

fbq('init', '511510642697274');
fbq('track', 'PageView');
</script>`;

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '16px', color: 'var(--color-charcoal)' }}>
          GTM Server-Side Tracking Debugger
        </h1>
        <p style={{ color: 'var(--color-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Systematic analysis of your GTM setup to identify why server events aren't firing
        </p>
      </div>

      {/* DIAGNOSIS */}
      <Section
        title="🎯 DIAGNOSIS"
        expanded={expandedSections.diagnosis}
        onToggle={() => toggleSection('diagnosis')}
      >
        <div style={{ 
          padding: '24px', 
          backgroundColor: '#fef3c7', 
          border: '2px solid #f59e0b',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <AlertCircle style={{ width: '24px', height: '24px', color: '#f59e0b', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h3 style={{ marginBottom: '12px', color: '#92400e' }}>Primary Issue Identified</h3>
              <p style={{ color: '#92400e', lineHeight: '1.6' }}>
                Your <strong>Web Container Meta Pixel tag</strong> is configured to send events ONLY to Facebook's browser endpoint, 
                NOT to your server container at <code>https://tracking.jayscatering.com</code>
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
          <DiagnosisCard
            icon="❌"
            title="What's Happening Now"
            items={[
              'Meta Pixel fires in browser → sends to Facebook directly',
              'Server Container receives ZERO events (hence "No tags were evaluated")',
              'CAPI tag never fires because no events reach it'
            ]}
            color="#ef4444"
          />
          <DiagnosisCard
            icon="✅"
            title="What Should Happen"
            items={[
              'Meta Pixel fires in browser → sends to YOUR server container',
              'Server Container receives event → processes it',
              'CAPI tag fires → sends to Facebook server-side'
            ]}
            color="#10b981"
          />
        </div>
      </Section>

      {/* WEB CONTAINER */}
      <Section
        title="🌐 WEB CONTAINER (GTM-P9DK89LK)"
        expanded={expandedSections.webContainer}
        onToggle={() => toggleSection('webContainer')}
      >
        {webContainerItems.map((item, idx) => (
          <ItemCard key={idx} item={item} />
        ))}
      </Section>

      {/* SERVER CONTAINER */}
      <Section
        title="🖥️ SERVER CONTAINER (GTM-MLJLK22P)"
        expanded={expandedSections.serverContainer}
        onToggle={() => toggleSection('serverContainer')}
      >
        {serverContainerItems.map((item, idx) => (
          <ItemCard key={idx} item={item} />
        ))}
      </Section>

      {/* THE FIX */}
      <Section
        title="🔧 THE FIX"
        expanded={expandedSections.fix}
        onToggle={() => toggleSection('fix')}
      >
        <div style={{ 
          padding: '32px', 
          backgroundColor: '#dcfce7', 
          border: '2px solid #10b981',
          marginBottom: '32px'
        }}>
          <h3 style={{ marginBottom: '16px', color: '#065f46' }}>Solution: Update Web Container Meta Pixel Tag</h3>
          <p style={{ color: '#065f46', marginBottom: '24px', lineHeight: '1.6' }}>
            Add ONE LINE to your Meta Pixel Custom HTML to redirect events to your server container:
          </p>
          
          <CodeBlock 
            code={codeSnippet1} 
            onCopy={() => copyToClipboard(codeSnippet1, 'snippet1')}
            copied={copiedStates['snippet1']}
          />
          
          <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#a7f3d0', borderLeft: '4px solid #10b981' }}>
            <p style={{ color: '#065f46', fontSize: '14px', margin: 0 }}>
              💡 <strong>This line tells Meta Pixel:</strong> "Send all events to MY server (tracking.jayscatering.com) instead of Facebook's server"
            </p>
          </div>
        </div>

        {/* Step by Step */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ marginBottom: '24px', color: 'var(--color-charcoal)' }}>Step-by-Step Instructions:</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <StepCard
              number={1}
              title="Go to Web Container"
              description="Open GTM-P9DK89LK (your web container)"
            />
            <StepCard
              number={2}
              title="Edit Meta Pixel Tag"
              description='Find your "Meta Pixel Base Tag" and click to edit it'
            />
            <StepCard
              number={3}
              title="Add the Endpoint Line"
              description="In the Custom HTML, add this line AFTER the Facebook SDK loads but BEFORE fbq('init')"
            />
            <StepCard
              number={4}
              title="Save & Publish"
              description="Click Save, then Submit and publish the web container"
            />
            <StepCard
              number={5}
              title="Test"
              description="Refresh your website and check GTM Server Container Preview - you should see events flowing through!"
            />
          </div>
        </div>

        {/* Full Code */}
        <div>
          <h3 style={{ marginBottom: '16px', color: 'var(--color-charcoal)' }}>Complete Updated Code:</h3>
          <p style={{ color: 'var(--color-muted)', marginBottom: '16px' }}>
            Here's the full tag code with the fix applied:
          </p>
          
          <CodeBlock 
            code={fullCodeSnippet} 
            onCopy={() => copyToClipboard(fullCodeSnippet, 'fullSnippet')}
            copied={copiedStates['fullSnippet']}
            language="html"
          />
          
          <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b' }}>
            <p style={{ color: '#92400e', fontSize: '14px', margin: 0 }}>
              ⚠️ <strong>Important:</strong> The endpoint line (line 11) must come AFTER the fbq function is defined but BEFORE fbq('init')
            </p>
          </div>
        </div>
      </Section>

      {/* Expected Results */}
      <div style={{ 
        marginTop: '48px', 
        padding: '32px', 
        backgroundColor: '#e0f2fe',
        border: '2px solid var(--color-primary)'
      }}>
        <h3 style={{ marginBottom: '16px', color: 'var(--color-charcoal)' }}>✨ What You'll See After the Fix:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div>
            <p className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>GTM SERVER PREVIEW</p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--color-charcoal)' }}>
              <li>Events will appear in the left sidebar</li>
              <li>Your CAPI tag will show as "Fired"</li>
              <li>You'll see "Tags Fired: 1" or more</li>
            </ul>
          </div>
          <div>
            <p className="mono" style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>META EVENTS MANAGER</p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--color-charcoal)' }}>
              <li>Server events will appear alongside Browser events</li>
              <li>You'll see "Server" label on events</li>
              <li>Both Browser + Server = Maximum tracking reliability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// COMPONENTS

function Section({ 
  title, 
  expanded, 
  onToggle, 
  children 
}: { 
  title: string; 
  expanded: boolean; 
  onToggle: () => void; 
  children: React.ReactNode 
}) {
  return (
    <div style={{ 
      marginBottom: '24px',
      border: '1px solid var(--color-border)',
      backgroundColor: 'white'
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <h2 style={{ margin: 0, color: 'var(--color-charcoal)' }}>{title}</h2>
        {expanded ? 
          <ChevronDown style={{ width: '24px', height: '24px', color: 'var(--color-charcoal)' }} /> : 
          <ChevronRight style={{ width: '24px', height: '24px', color: 'var(--color-charcoal)' }} />
        }
      </button>
      {expanded && (
        <div style={{ padding: '0 24px 24px 24px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

function ItemCard({ item }: { item: ContainerItem }) {
  return (
    <div style={{ 
      padding: '20px',
      border: '1px solid var(--color-border)',
      backgroundColor: '#fafafa',
      marginBottom: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ marginTop: '2px' }}>
          {item.status === 'correct' && <CheckCircle2 style={{ width: '20px', height: '20px', color: '#10b981' }} />}
          {item.status === 'missing' && <XCircle style={{ width: '20px', height: '20px', color: '#ef4444' }} />}
          {item.status === 'wrong' && <AlertCircle style={{ width: '20px', height: '20px', color: '#f59e0b' }} />}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '8px', color: 'var(--color-charcoal)' }}>{item.name}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
            <p className="mono" style={{ color: 'var(--color-primary)' }}>Type: {item.type}</p>
            {item.config && <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>Config: {item.config}</p>}
            {item.trigger && <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>Trigger: {item.trigger}</p>}
          </div>
          {item.notes && (
            <p style={{ 
              fontSize: '14px', 
              color: item.status === 'correct' ? '#065f46' : item.status === 'missing' ? '#991b1b' : '#92400e',
              backgroundColor: item.status === 'correct' ? '#d1fae5' : item.status === 'missing' ? '#fee2e2' : '#fef3c7',
              padding: '8px 12px',
              borderLeft: `3px solid ${item.status === 'correct' ? '#10b981' : item.status === 'missing' ? '#ef4444' : '#f59e0b'}`,
              margin: 0
            }}>
              {item.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function DiagnosisCard({ 
  icon, 
  title, 
  items, 
  color 
}: { 
  icon: string; 
  title: string; 
  items: string[]; 
  color: string 
}) {
  return (
    <div style={{ 
      padding: '20px',
      border: `2px solid ${color}`,
      backgroundColor: color === '#ef4444' ? '#fee2e2' : '#d1fae5'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <span style={{ fontSize: '24px' }}>{icon}</span>
        <h3 style={{ margin: 0, color: color === '#ef4444' ? '#991b1b' : '#065f46' }}>{title}</h3>
      </div>
      <ul style={{ 
        margin: 0, 
        paddingLeft: '20px',
        color: color === '#ef4444' ? '#991b1b' : '#065f46'
      }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string 
}) {
  return (
    <div style={{ 
      display: 'flex',
      gap: '16px',
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid var(--color-border)'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontFamily: 'var(--font-mono)'
      }}>
        {number}
      </div>
      <div>
        <h3 style={{ marginBottom: '4px', color: 'var(--color-charcoal)' }}>{title}</h3>
        <p style={{ margin: 0, color: 'var(--color-muted)', fontSize: '14px' }}>{description}</p>
      </div>
    </div>
  );
}

function CodeBlock({ 
  code, 
  onCopy, 
  copied,
  language = 'javascript'
}: { 
  code: string; 
  onCopy: () => void;
  copied?: boolean;
  language?: string;
}) {
  return (
    <div style={{ position: 'relative' }}>
      <pre style={{
        backgroundColor: '#1e293b',
        color: '#e2e8f0',
        padding: '20px',
        overflow: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        lineHeight: '1.6',
        margin: 0
      }}>
        <code>{code}</code>
      </pre>
      <button
        onClick={onCopy}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          padding: '8px 12px',
          backgroundColor: copied ? '#10b981' : '#475569',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => !copied && (e.currentTarget.style.backgroundColor = '#334155')}
        onMouseLeave={(e) => !copied && (e.currentTarget.style.backgroundColor = '#475569')}
      >
        {copied ? (
          <>
            <Check style={{ width: '14px', height: '14px' }} />
            COPIED
          </>
        ) : (
          <>
            <Copy style={{ width: '14px', height: '14px' }} />
            COPY
          </>
        )}
      </button>
    </div>
  );
}
