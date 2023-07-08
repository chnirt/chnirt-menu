import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { ReactComponent as GoogleSVG } from "@/assets/google.svg";

const StyleGuide = () => {
  return (
    <div className="p-5 grid gap-10">
      StyleGuide
      <h1 className="text-red-500">asd</h1>
      <div>
        <Input name="username" placeholder="Username" />
        <Input type="password" name="password" placeholder="Password" />
      </div>
      <div className="grid gap-5">
        <Button className="w-full" variant="default">
          Primary
        </Button>
        <Button className="w-full" variant="secondary">
          Secondary
        </Button>
        <Button className="w-full" variant="tertiary">
          Tertiary
        </Button>
        <Button className="w-full" variant="outline">
          <GoogleSVG className="mr-2 w-4 h-4" /> Login with Google
        </Button>
        <Button className="w-full bg-[#0056b3] hover:bg-[#0056b3]/80">
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 24 24"
            id="meteor-icon-kit__regular-facebook"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.74899V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
          Login with Facebook
        </Button>
      </div>
      <div className="grid grid-flow-col auto-cols-max gap-5">
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StyleGuide;
