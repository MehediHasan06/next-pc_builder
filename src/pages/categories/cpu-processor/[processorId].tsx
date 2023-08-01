import { useRouter } from 'next/router';

const ProcessorDetailsPage = () => {
  const router = useRouter();
  return (
    <div>
      Processor Details Page - {router.query.processorId}
    </div>
  );
};

export default ProcessorDetailsPage;
