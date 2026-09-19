import React, { useState, useEffect } from 'react';
import { FiEye } from 'react-icons/fi';

const COUNTER_NAMESPACE = 'adityaraj-portfolio';
const COUNTER_KEY = 'views';
const HIT_URL = `https://abacus.jasoncameron.dev/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY}`;
const GET_URL = `https://abacus.jasoncameron.dev/get/${COUNTER_NAMESPACE}/${COUNTER_KEY}`;
const SESSION_FLAG = 'aditya_portfolio_session_v3';
const CACHED_COUNT_KEY = 'aditya_portfolio_views_v3';

export const VisitorCounter = () => {
  const [count, setCount] = useState(() => {
    // Clear legacy keys if present
    localStorage.removeItem('aditya_portfolio_visitor_count');
    localStorage.removeItem('aditya_portfolio_session_viewed');

    const cached = localStorage.getItem(CACHED_COUNT_KEY);
    return cached ? parseInt(cached, 10) : 0;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const recordVisit = async () => {
      try {
        const hasCountedSession = sessionStorage.getItem(SESSION_FLAG);
        const endpoint = hasCountedSession ? GET_URL : HIT_URL;

        const res = await fetch(endpoint, {
          method: 'GET',
          headers: { Accept: 'application/json' },
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (isMounted && typeof data.value === 'number') {
          setCount(data.value);
          localStorage.setItem(CACHED_COUNT_KEY, String(data.value));
          sessionStorage.setItem(SESSION_FLAG, 'true');
        }
      } catch {
        if (isMounted) {
          const fallback = parseInt(localStorage.getItem(CACHED_COUNT_KEY) || '0', 10);
          const next = sessionStorage.getItem(SESSION_FLAG) ? fallback : fallback + 1;
          setCount(next);
          localStorage.setItem(CACHED_COUNT_KEY, String(next));
          sessionStorage.setItem(SESSION_FLAG, 'true');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    recordVisit();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="visitor-counter" title="Live total visits across visitors">
      <span className="visitor-pulse-dot" aria-hidden="true" />
      <FiEye className="visitor-icon" size={13} aria-hidden="true" />
      <span className="visitor-label">
        {loading && count === null ? (
          <span className="visitor-skeleton">...</span>
        ) : (
          <>
            <span className="visitor-count-number">{count?.toLocaleString()}</span> visits
          </>
        )}
      </span>
    </div>
  );
};

export default VisitorCounter;
