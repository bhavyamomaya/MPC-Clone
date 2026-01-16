import React from 'react';
import { ArrowRight } from 'lucide-react';

const MemberCard = ({ member, rank }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '30px',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s',
      cursor: 'default',
      minHeight: '220px'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {/* Hanging Medal for Top 3 */}
      {rank <= 3 && (
         <div style={{ position: 'absolute', top: -12, left: '25%' }}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Ribbon */}
                <div style={{ width: '20px', height: '30px', background: 'linear-gradient(to bottom, #ef4444 50%, #3b82f6 50%)', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
                {/* Medal */}
                <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: rank === 1 ? '#FFD700' : rank === 2 ? '#C0C0C0' : '#CD7F32', // Gold, Silver, Bronze
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '-5px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    border: '2px solid white'
                }}>
                    <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}></span>
                </div>
            </div>
         </div>
      )}

      {/* Rank Number for Non-Top 3 (Top Left) */}
      {rank > 3 && (
          <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#EFF6FF',
              color: '#64748B',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              {rank}
          </div>
      )}

      {/* Avatar */}
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '0.75rem',
        border: '3px solid white',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
           <img 
            src={member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
      </div>

      {/* Name (Underlined) */}
      <h3 style={{ 
        fontWeight: '700', 
        fontSize: '1.125rem', 
        marginBottom: '0.25rem',
        color: 'var(--accent-primary)',
        textDecoration: 'underline',
        textDecorationColor: '#E2E8F0',
        textUnderlineOffset: '4px',
        textAlign: 'center'
      }}>
        {member.name}
      </h3>

      {/* Bug Score Label */}
      <p style={{ 
        color: '#94a3b8', 
        fontSize: '0.75rem', 
        marginBottom: '0.25rem',
        fontWeight: '500',
        marginTop: '0.5rem'
      }}>
        Bug Score :
      </p>

      {/* Bug Score Value (Large) */}
      <p style={{
          fontSize: '1.75rem',
          fontWeight: '800',
          color: 'var(--accent-primary)', // Matching the blue from screenshot
          lineHeight: '1'
      }}>
          {member.score}
      </p>
    </div>
  );
};

export default MemberCard;
