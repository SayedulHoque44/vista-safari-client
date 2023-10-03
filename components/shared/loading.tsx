import { PropagateLoader } from 'react-spinners';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex justify-center'>
      <PropagateLoader
        color='#8ca791'
        loading={isLoading}
        size={24}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Loading;
