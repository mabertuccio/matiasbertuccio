export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'resume';

const socialLinks: { platform: SocialPlatform; url: string }[] = [
  { platform: 'github', url: 'https://github.com/mabertuccio' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/matiasbertuccio' },
  { platform: 'email', url: '' },
  {
    platform: 'resume',
    url: 'https://docs.google.com/document/d/10GxfqxTVdmqabpCfg98AmfA38TfmmayA4nCEiYNcJWw/edit?usp=sharing',
  },
];

export default socialLinks;
