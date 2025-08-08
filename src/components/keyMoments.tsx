

type Props = {
  duration: number;
};

const KeyMoments = ({ duration }: Props) => {
  const moments = [15, 35, 55]; // dummy key moments in seconds

  return (
    <div className="absolute top-0 left-0 h-full w-full z-10">
      {moments.map((moment, index) => {
        const left = `${(moment / duration) * 100}%`;

        return (
          <div
            key={index}
            className="absolute top-0 h-full w-1 bg-blue-600"
            style={{ left }}
          />
        );
      })}
    </div>
  );
};

export default KeyMoments;
