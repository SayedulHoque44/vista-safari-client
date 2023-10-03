interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className='mb-10'>
      <span className='font-semibold uppercase tracking-widest text-cream'>
        {subtitle}
      </span>
      <h4 className='uppercase'>{title}</h4>
    </div>
  );
};

export default SectionTitle;
