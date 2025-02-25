import Logo from '../ui/Logo';
import ContactLink from '../ui/ContactLink';
import Title from '../ui/Title';
import socialLinks from '../data/socialLinks';

const PreviewHero = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center gap-6 px-4 sm:px-6 md:px-8'>
      <Logo />
      <Title text='Próximamente... 🚀' />
      <div className='flex gap-4 flex-wrap justify-center'>
        {socialLinks.map((link) => (
          <ContactLink
            key={link.platform}
            platform={link.platform}
            url={link.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviewHero;
