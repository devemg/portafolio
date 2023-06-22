import { useEffect } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import './AboutMePage.scss';

export const AboutMePage = () => {
  const { sendEvent } = useAnalytics();
  useEffect(() => {
    sendEvent('ViewHome');
  }, []);
  return (
    <div className='about'>
        <h1>Emely Garcia</h1>
        <h2>Frontend Developer</h2>
        <p>I am a dedicated and enthusiastic software developer. I have been developing software for more than four years for the academic area and since one year ago in the professional area. I am curious and self-taught. Constantly learning and preparing myself to face any challenge and looking to do my job as efficiently as possible. most efficient way possible.</p>
    </div>
  )
}
