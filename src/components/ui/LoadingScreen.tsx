import Lottie from "react-lottie";
import animation from "../../../public/animations/loading_animation.json";

export const LoadingScreen = (): React.ReactElement => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg-dark-background w-full h-full flex items-center justify-center">
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};
