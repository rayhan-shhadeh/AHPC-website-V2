import Image from 'next/image';
import Link from 'next/link';

interface ActivityCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export default function ActivityCard({
  id,
  title,
  date,
  description,
  image
}: ActivityCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-44 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary">
          {new Date(date).toLocaleDateString()}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-dark">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <Link
          href={`/activities/${id}`}
          className="mt-4 inline-flex text-sm font-semibold text-primary"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
