import { locationType } from '@/types/location';

interface DestinationDetailsProps {
  destination: locationType;
}

const DestinationDetails: React.FC<DestinationDetailsProps> = ({
  destination,
}) => {
  return <section>DestinationDetails</section>;
};

export default DestinationDetails;
