import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-block overflow-hidden',
        className && className
      )}
    >
      <span className='eq inline-block group-hover:-translate-y-[calc(100%+5px)] group-hover:-rotate-6'>
        {title}
      </span>
      <span className='eq absolute left-0 top-[calc(100%+5px)] rotate-6 group-hover:top-0 group-hover:rotate-0'>
        {title}
      </span>
    </Link>
  );
};

export default CustomLink;
