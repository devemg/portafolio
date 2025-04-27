import { ContactItem } from '@models/contact-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface ContactFooterSectionProps {
  items: ContactItem[];
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({ items }) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to("#footer-message", {text: {value: 'I will be happy to answer!' }, duration: 2, ease: "none",
    scrollTrigger: {
      trigger: '#footer',
      start: 'top 50%',
      toggleActions: 'play none none reset',
      }});
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
  };
  }, []);
  

  return (
    <div className="h-dvh w-full bg-warn flex flex-col justify-end">
      <div className='m-auto p-5'>
        <h2 id='footer'  className='text-center text-2xl pb-5'>Interested in collaborating with me?</h2>
        <p className='text-center pb-2'>I am always open to discuss projects or collaboration opportunities.</p>
        <p className='text-center pb-2'>You can contact me through my social networks.</p>
        <p id='footer-message' className='text-center pb-2'></p>
      </div>
      <footer id='footer' className={`p-5 bg-background extended`} ref={footerRef}>
        <div className='flex gap-4 w-full justify-center md:justify-start'>
          {
            items.map(item => <a key={item.id} className='flex gap-2 items-center' target='_blank' href={item.link}>
              <FontAwesomeIcon size="2x" icon={item.icon} ></FontAwesomeIcon>
              <p className='hidden'>{item.username}</p>
            </a>)
          }
        </div>
        <p className='opacity-20 w-full text-center pt-5'> &copy; devemg 2025 (v3.0.0)</p>
      </footer>
    </div>
  )
}
