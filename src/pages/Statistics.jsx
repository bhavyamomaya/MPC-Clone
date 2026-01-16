import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../data/data.json';

const Statistics = () => {
    const { members } = data;

    // Transform members data for the chart
    const chartData = members.map(member => ({
      name: member.name,
      previous: member.previousScore,
      current: member.score
    }));

    // Transform members data for the table
    const tableData = members.map(member => ({
      name: member.name,
      blocker: member.severities.blocker,
      critical: member.severities.critical,
      major: member.severities.major,
      normal: member.severities.normal,
      minor: member.severities.minor,
      count: member.bugCount,
      score: member.score
    }));

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#527898', marginBottom: '0.25rem' }}>Team Statistics</h1>
      </div>
      
      {/* Performance Graph Container */}
      <div style={{
           border: '1px solid #94a3b8',
           borderRadius: '4px',
           padding: '1rem',
           marginBottom: '3rem'
      }}>
          <h3 style={{ textAlign: 'center', fontFamily: 'serif', fontSize: '1.25rem', marginBottom: '1rem', color: '#333' }}>Performance Graph</h3>
          <div style={{ height: '400px' }}>
             <ResponsiveContainer width="100%" height="100%">
               <BarChart
                 data={chartData}
                 margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                 barGap={2}
               >
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end" 
                    interval={0} 
                    tick={{ fontSize: 10 }}
                    label={{ value: 'Team Member Names', position: 'bottom', offset: 40, style: { fontWeight: 'bold', fontFamily: 'serif' } }}
                 />
                 <YAxis 
                    label={{ value: 'Scores', angle: -90, position: 'insideLeft', style: { fontWeight: 'bold', fontFamily: 'serif' } }}
                    domain={[0, 90]}
                    ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
                 />
                 <Tooltip />
                 <Legend verticalAlign="bottom" height={36} iconType="square" wrapperStyle={{ paddingTop: '20px' }}/>
                 <Bar dataKey="previous" name="Previous Scores" fill="#4472c4" barSize={10} />
                 <Bar dataKey="current" name="Current Scores" fill="#ed7d31" barSize={10} />
               </BarChart>
             </ResponsiveContainer>
          </div>
      </div>

      {/* Detailed Issue Table */}
      <div style={{ 
          border: '1px solid #000',
          overflow: 'hidden'
      }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'center', color: 'black' }}>
              <thead>
                  <tr style={{ backgroundColor: '#FFD966', borderBottom: '1px solid #000' }}>
                      <th style={{ border: '1px solid #000', padding: '4px', fontWeight: 'bold' }}>Team Member Name</th>
                      <th style={{ border: '1px solid #000', padding: '4px', fontWeight: 'bold' }}>Blocker</th>
                      <th style={{ border: '1px solid #000', padding: '4px', fontWeight: 'bold' }}>Critical</th>
                      <th style={{ border: '1px solid #000', padding: '4px', fontWeight: 'bold' }}>Major</th>
                      <th style={{ border: '1px solid #000', padding: '4px', fontWeight: 'bold' }}>Normal</th>
                      <th style={{ border: '1px solid #000', padding: '4px', fontWeight: 'bold' }}>Minor</th>
                      <th style={{ border: '1px solid #000', padding: '4px', fontWeight: 'bold' }}>Issue Count</th>
                      <th style={{ border: '1px solid #000', padding: '4px', fontWeight: 'bold' }}>Total Score</th>
                  </tr>
              </thead>
              <tbody>
                  {tableData.map((row, index) => (
                      <tr key={index} style={{ backgroundColor: 'white' }}>
                          <td style={{ border: '1px solid #000', padding: '4px' }}>{row.name}</td>
                          <td style={{ border: '1px solid #000', padding: '4px' }}>{row.blocker}</td>
                          <td style={{ border: '1px solid #000', padding: '4px' }}>{row.critical}</td>
                          <td style={{ border: '1px solid #000', padding: '4px' }}>{row.major}</td>
                          <td style={{ border: '1px solid #000', padding: '4px' }}>{row.normal}</td>
                          <td style={{ border: '1px solid #000', padding: '4px' }}>{row.minor}</td>
                          <td style={{ border: '1px solid #000', padding: '4px' }}>{row.count}</td>
                          <td style={{ border: '1px solid #000', padding: '4px' }}>{row.score}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </>
  );
};

export default Statistics;
