import React from 'react';
import MemberCard from '../components/MemberCard';
import { Trophy } from 'lucide-react';
import data from '../data/data.json';

const Leaderboard = () => {
  // Use data from JSON file
  const members = data.members;

  // Calculate score and Sort
  // Sort by score directly from JSON
  const sortedMembers = [...members].sort((a, b) => b.score - a.score);

  const topMembers = sortedMembers.slice(0, 9);
  const otherMembers = sortedMembers.slice(9);

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#527898', marginBottom: '0.25rem' }}>Leaderboard</h1>
      </div>
      
      {/* Top 9 Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {topMembers.map((member, index) => (
          <MemberCard key={member.id} member={member} rank={index + 1} />
        ))}
      </div>

      {/* Remaining Members Table */}
      {otherMembers.length > 0 && (
          <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              border: '1px solid #E2E8F0'
          }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                  <thead>
                      <tr style={{ backgroundColor: '#BFDBFE', color: '#1E3A8A' }}>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>Rank</th>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>Member Name</th>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>Bug Score</th>
                      </tr>
                  </thead>
                  <tbody>
                      {otherMembers.map((member, index) => (
                          <tr key={member.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                              <td style={{ padding: '1.5rem', textAlign: 'center', fontWeight: '600', color: '#64748B' }}>
                                  {index + 10}
                              </td>
                              <td style={{ padding: '1rem', textAlign: 'center' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#CBD5E1' }}>
                                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} alt="" style={{ width: '100%', height: '100%' }} />
                                      </div>
                                      <span style={{ fontWeight: '600', color: '#1E293B' }}>{member.name}</span>
                                  </div>
                              </td>
                              <td style={{ padding: '1.5rem', textAlign: 'center', fontWeight: 'bold', color: '#1E293B' }}>
                                  {member.score}
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      )}
    </>
  );
};

export default Leaderboard;
