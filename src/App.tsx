import { devemgContacts } from '@data/contact.data';
import { devemgExperience } from '@data/experience.data';
import { devemgProjects } from '@data/projects.data';
import { devemgSkills } from '@data/skills.data';
import { useStack } from '@hooks/useStack';
import { ContactFooterSection } from '@sections/ContactFooterSection';
import { ExperienceSection } from '@sections/ExperienceSection';
import { LandingSection } from '@sections/LandingSection';
import { ProjectSection } from '@sections/ProjectSection';
import { QuoteSection } from '@sections/QuoteSection';
import { SkillsSection } from '@sections/SkillsSection';
import { useNavigate } from 'react-router';

const meDescription = `Hey, I'm a Front-End Developer with almost 5 years of experience.
I love building fast, scalable web apps that look and feel great.
I'm comfortable working with React, Angular, and modern web tools.
I've worked with Agile teams from different parts of the world, such as India, the United States, and Canada.
Clean code, testing, and performance are super important to me.`;

export default function App() {
  const { StackSection, clearTriggers } = useStack();
  const navigate = useNavigate();

  const manageRedirection = (path: string) => {
    clearTriggers();
    navigate(path);
  }

  return (
    <>
      <StackSection>
        <LandingSection name='Emely García' role='Frontend Developer' phrase='Designing, developing, and maintaining scalable,
          high-performance web applications.' />
      </StackSection>
      <StackSection><ExperienceSection items={devemgExperience} description={meDescription} /></StackSection>
      <StackSection><SkillsSection items={devemgSkills} /></StackSection>
      <StackSection><QuoteSection author='Steve Jobs' text='The only way to do great work is to love what you do.'/></StackSection>
      <StackSection><ProjectSection onElementClick={manageRedirection} items={devemgProjects} /></StackSection>
      <StackSection><ContactFooterSection items={devemgContacts} /></StackSection>
    </>
  );
}