const Title = ({ text }: { text: string }) => {
  return (
    <h1 className='font-inter text-xl sm:text-2xl text-neutral-900 font-semibold'>
      {text}
    </h1>
  );
};

export default Title;
