import { JSX } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type SocialPlatform = 'github' | 'linkedin' | 'email' | 'resume';

interface ContactLinkProps {
  platform: SocialPlatform;
  url: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ platform, url }) => {
  const iconLinks: Record<'github' | 'linkedin', JSX.Element> = {
    github: <FaGithub className='w-6 h-6 text-white' />,
    linkedin: <FaLinkedin className='w-6 h-6 text-white' />,
  };

  const buttonLabels: Record<'email' | 'resume', string> = {
    email: 'ESCRÍBEME',
    resume: 'CURRÍCULUM',
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:tutebertuccio@gmail.com';
  };

  return (
    <a
      href={platform === 'email' ? '#' : url}
      target={platform != 'email' ? '_blank' : '_self'}
      rel='noopener noreferrer'
      className={`inline-flex items-center justify-center text-white font-medium rounded-md shadow-sm transition-all h-12 ${
        platform === 'github' || platform === 'linkedin'
          ? 'w-12 bg-indigo-500 hover:bg-indigo-700'
          : 'font-inter px-6 border-2 border-indigo-500 bg-white hover:bg-indigo-700 text-neutral-950 hover:text-neutral-50'
      }`}
      onClick={platform === 'email' ? handleEmailClick : undefined}
    >
      {platform === 'github' || platform === 'linkedin' ? (
        iconLinks[platform]
      ) : (
        <span>{buttonLabels[platform]}</span>
      )}
    </a>
  );
};

export default ContactLink;
