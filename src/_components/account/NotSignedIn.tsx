import { Button } from "@/components/ui/button";
import { FC } from "react";

interface NotSignedInProps {}

const NotSignedIn: FC<NotSignedInProps> = ({}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center p-6 max-w-sm mx-auto bg-white rounded-xl mt-24 ">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Access Denied
        </h1>
        <p className="text-gray-600 mb-4">
          You need to be logged in to view this content.
        </p>
        <Button className="bg-transparent border border-black shadow-md w-1/2 py-6 hover:bg-gray-500 text-black hover:text-white">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default NotSignedIn;
