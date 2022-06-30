import { Button } from 'ui';

export default function Index() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Remix Web Application</span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Welcome to the Remix Web Application!
        </p>
        <div className="mt-8 flex justify-center">
          <Button>Get Started - Remix</Button>
        </div>
      </div>
    </div>
  );
}
