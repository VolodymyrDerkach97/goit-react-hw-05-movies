import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <TailSpin
      height="50"
      width="50"
      color="#768F96"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
export default Loading;
