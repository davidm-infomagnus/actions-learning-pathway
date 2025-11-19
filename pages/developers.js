import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Developers() {
  const [assignments, setAssignments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/developers')
      .then(response => response.json())
      .then(data => {
        setAssignments(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={styles.main}><p>Loading...</p></div>;
  if (error) return <div className={styles.main}><p>Error: {error}</p></div>;

  return (
    <>
      <Head>
        <title>Developer Assignments</title>
        <meta name="description" content="View developer assignments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Developer Assignments</h1>
        <p>Last Updated: {assignments?.lastUpdated}</p>
        
        <div style={{ width: '100%', maxWidth: '1200px', marginTop: '2rem' }}>
          {assignments?.developers?.map((developer) => (
            <div key={developer.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '1.5rem', 
              marginBottom: '1.5rem',
              backgroundColor: '#f9f9f9'
            }}>
              <h2>{developer.name}</h2>
              <p><strong>Email:</strong> {developer.email}</p>
              <p><strong>ID:</strong> {developer.id}</p>
              
              <h3 style={{ marginTop: '1rem' }}>Assignments:</h3>
              {developer.assignments.map((assignment, index) => (
                <div key={index} style={{ 
                  marginLeft: '1rem', 
                  marginTop: '0.5rem',
                  padding: '1rem',
                  backgroundColor: 'white',
                  borderRadius: '4px'
                }}>
                  <p><strong>Project:</strong> {assignment.project}</p>
                  <p><strong>Role:</strong> {assignment.role}</p>
                  <p><strong>Areas:</strong> {assignment.areas.join(', ')}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
