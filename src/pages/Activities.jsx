import React from 'react';
import { Layers } from 'lucide-react';
import data from '../data/data.json';

const Activities = () => {
  const { activitiesList } = data;

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#527898', marginBottom: '0.25rem' }}>Team Activities</h1>
      </div>

      {/* Count of Sanity Metrics Header */}
      <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Count of Sanity:</h3>
          <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>MPC</span>
                  <div style={{ 
                      backgroundColor: '#F97316', // Orange
                      color: 'white',
                      padding: '0.25rem 2rem',
                      borderRadius: '999px',
                      fontWeight: 'bold',
                      fontSize: '0.875rem'
                  }}>7</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>NaMo Engagements</span>
                  <div style={{ 
                      backgroundColor: '#22C55E', // Green
                      color: 'white',
                      padding: '0.25rem 2rem',
                      borderRadius: '999px',
                      fontWeight: 'bold',
                      fontSize: '0.875rem'
                  }}>15</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>JioJoin</span>
                  <div style={{ 
                      backgroundColor: '#7E22CE', // Purple
                      color: 'white',
                      padding: '0.25rem 2rem',
                      borderRadius: '999px',
                      fontWeight: 'bold',
                      fontSize: '0.875rem'
                  }}>9</div>
              </div>
          </div>
      </div>

      {/* Split View Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
          
          {/* Left Column: List */}
          <div style={{
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              overflow: 'hidden'
          }}>
              <div style={{
                  display: 'flex',
                  backgroundColor: '#EFF6FF',
                  padding: '1rem',
                  borderBottom: '1px solid #E2E8F0',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  color: '#1E293B'
              }}>
                  <div style={{ width: '3rem', textAlign: 'center' }}>Rank</div>
                  <div style={{ flex: 1, textAlign: 'center' }}>All Activities</div>
              </div>
              {activitiesList.map((item, index) => (
                  <div key={item.id} style={{
                      display: 'flex',
                      padding: '1rem',
                      borderBottom: index < activitiesList.length - 1 ? '1px solid #F1F5F9' : 'none',
                      backgroundColor: item.rank === 1 ? '#11324E' : 'white', // Active state logic (hardcoded to first item for visual match)
                      color: item.rank === 1 ? 'white' : '#334155',
                      alignItems: 'center',
                      cursor: 'pointer'
                  }}>
                      <div style={{ width: '3rem', textAlign: 'center', fontWeight: '600' }}>{item.rank}</div>
                      <div style={{ flex: 1, textAlign: 'center', fontWeight: '500' }}>{item.name}</div>
                  </div>
              ))}
          </div>

          {/* Right Column: Detailed View */}
          <div style={{
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '2rem',
              backgroundColor: 'white'
          }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.5rem' }}>Member of Parliament's Corner</h3>
              
              {/* Banner Image Placeholder with Text */}
              <div style={{
                  backgroundColor: '#F97316',
                  borderRadius: '8px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  backgroundImage: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)'
              }}>
                  <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>मेरा सांसद</h2>
                  <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
                      {/* Avatar bubbles simulation */}
                      {[1,2,3,4,5].map(i => (
                          <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)', border: '2px solid white' }}></div>
                      ))}
                  </div>
                  <p style={{ fontSize: '0.875rem' }}>Stay on top of your best initiatives with the <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>MPs corner</span></p>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#334155', marginBottom: '2rem', lineHeight: '1.6' }}>
                  MPC is Members of Parliament's corner, It has views for Admin, Senior Leader, MP, and Citizen. It provides insights on 360 activities, with MPs earning scores based on initiatives and events.
              </p>

              <div>
                  <h4 style={{ color: '#0EA5E9', fontWeight: '700', marginBottom: '1rem' }}>Activity Details</h4>
                  <ul style={{ fontSize: '0.875rem', color: '#0F172A', paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                      <li>MPC User Story Review for Sprint 15 (Admin View - Leaderboard tab)</li>
                      <li>Performed <span style={{ fontWeight: '700' }}>7 rounds</span> of sanity on UAT against the new User Story</li>
                      <li>Performed <span style={{ fontWeight: '700' }}>78 rounds</span> of daily sanity on production environment</li>
                      <li>Regression Testing
                          <ul style={{ listStyleType: 'lower-alpha', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                              <li>Wrote test case scenarios for Admin Leaderboard tabs</li>
                              <li><span style={{ fontWeight: '600' }}>Test Cases Created:</span> 59</li>
                              <li><span style={{ fontWeight: '600' }}>Test Cases Updated:</span> 142</li>
                              <li><span style={{ fontWeight: '600' }}>Test Cases Deleted:</span> 0</li>
                              <li><span style={{ fontWeight: '600' }}>Total Number of Test Cases:</span> 3,693 (~300 TC per member)</li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </>
  );
};

export default Activities;
