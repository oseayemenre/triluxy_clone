type HeroOptionsViewProps = {
  title: string;
};

export default function HeroOptionsView({ title }: HeroOptionsViewProps) {
  return (
    <div className='w-full bg-red-500 h-full'>
      <h1>{title}</h1>
    </div>
  );
}
