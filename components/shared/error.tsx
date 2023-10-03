interface ErrorProps {
  error: string;
  bigFont?: boolean;
}

const Error: React.FC<ErrorProps> = ({ error, bigFont }) => {
  return (
    <div className='text-center text-red-600'>
      <p className={bigFont ? 'text-2xl' : 'text-lg'}>{error}</p>
    </div>
  );
};

export default Error;
