interface IProps {
  height?: number;
  size?: number;
}

const LoadingData = ({ height = 96, size = 8 }: IProps) => {
  return (
    <>
      <div className={`flex items-center w-full h-${height} justify-center`}>
        <div className="grid grid-cols-1 w-full gap-4">
          <span className={`w-${size} h-${size} m-auto mb-1`}>
            <span className="animate-ping inline-flex h-full w-full rounded-full bg-primary"></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoadingData;
