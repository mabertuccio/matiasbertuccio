interface LogoProps {
  text?: string;
}

const Logo: React.FC<LogoProps> = ({ text = 'mb' }) => {
  return (
    <>
      <a href='#'>
        <h3 className='font-sora text-4xl font-bold text-neutral-900'>
          {text}
          <span className='inline-block w-2 h-2 bg-indigo-500'></span>
        </h3>
      </a>
    </>
  );
};

export default Logo;
