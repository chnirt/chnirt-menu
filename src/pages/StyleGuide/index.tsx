import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Heart,
  ImagePlus,
  ListOrdered,
  Pause,
  Settings2,
  X,
} from "lucide-react";
import { ReactComponent as GoogleSVG } from "@/assets/google.svg";
import { MessageSquare } from "lucide-react";
import { Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";

const StyleGuide = () => {
  const handleOnSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    return;
  }, []);

  return (
    <div className="p-5">
      <h1>StyleGuide</h1>

      <div className="mt-10 grid gap-10">
        <div className="grid gap-10">
          <h2>Input Fields</h2>
          <form className="grid gap-5" onSubmit={handleOnSubmit}>
            <Input
              name="username"
              autoComplete="username"
              placeholder="Username"
            />
            <Input
              name="firstName"
              autoComplete="given-name"
              placeholder="First Name"
            />
            <Input
              name="lastName"
              autoComplete="family-name"
              placeholder="Last Name"
            />
            <Input
              name="email"
              autoComplete="email"
              placeholder="Enter Email Address"
            />
            <Input
              type="password"
              autoComplete="current-password"
              name="password"
              placeholder="Password"
            />
            <Button type="submit">Continue</Button>
            <p className="text-primary whitespace-pre-wrap">
              By continuing, you agree to the{" "}
              <a
                href="https://www.termsfeed.com/live/f2c78792-cfd7-49cb-983d-1f89a46f15f4"
                className="font-semibold"
                target="_blank"
              >
                <Button className="p-0" type="button" variant="link">
                  Terms and conditions
                </Button>
              </a>
              {" & "}
              <a
                href="https://www.privacypolicygenerator.info/live.php?token=pQ1HLamA4EvdhCl0zZdAxTG1CIj4Mr6y"
                className="font-semibold"
                target="_blank"
              >
                <Button className="p-0" type="button" variant="link">
                  Privacy Policy
                </Button>
              </a>
            </p>
          </form>
        </div>

        <div className="grid gap-10">
          <h2>Button</h2>
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
            <Button className="w-full" variant="quaternary">
              Quaternary
            </Button>
            <Button className="w-full" variant="outline">
              Outline
            </Button>
            <Button
              className="w-full border-transparent drop-shadow-2xl hover:border-input"
              variant="outline"
            >
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
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.74899V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
              Login with Facebook
            </Button>

            <div className="grid grid-flow-col auto-cols-max gap-5 items-center">
              <Button
                className="border-transparent drop-shadow-2xl hover:border-input"
                variant="outline"
                size="icon"
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                className="border-transparent drop-shadow-2xl hover:border-input"
                variant="outline"
                size="icon"
              >
                <ImagePlus className="h-4 w-4" />
              </Button>
              <Button
                className="border-transparent drop-shadow-2xl hover:border-input"
                variant="outline"
                size="icon"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                className="border-transparent drop-shadow-2xl hover:border-input"
                variant="outline"
                size="icon"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-flow-col auto-cols-max gap-5 items-center">
              <Button variant="quaternary" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button className="rounded-full" variant="default" size="icon">
                <Pause className="h-4 w-4" />
              </Button>
              <Button className="w-12 h-12 rounded-xl" variant="secondary">
                <Settings2 className="h-4 w-4" />
              </Button>
              <Button
                className="border-transparent drop-shadow-2xl hover:border-input"
                variant="outline"
                size="icon"
              >
                <Heart className="h-4 w-4 text-secondary fill-secondary" />
              </Button>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-5 items-center">
              <Button className="w-8 h-8 px-2" variant="default">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button className="w-8 h-8 px-2" variant="default">
                <Phone className="h-4 w-4" />
              </Button>
              <Button className="w-6 h-6 px-1.5" variant="default">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-5 items-center">
              <Button
                className="w-12 h-12 rounded-full drop-shadow-2xl"
                variant="quaternary"
              >
                <ListOrdered className="h-5 w-5" />
              </Button>
              <Button
                className="w-12 h-12 rounded-full drop-shadow-2xl"
                variant="quaternary"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-10">
          <h2>Tabs</h2>
          <div className="grid gap-5">
            <Tabs defaultValue="ingredients">
              <TabsList className="bg-tertiary text-tertiary-foreground rounded-xl">
                {[
                  {
                    value: "ingredients",
                    label: "Ingredients",
                    content: "Ingredients",
                  },
                  {
                    value: "instructions",
                    label: "Instructions",
                    content: "Instructions",
                  },
                ].map((tab, ti) => (
                  <TabsTrigger
                    key={`tab-trigger-${ti}`}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl"
                    value={tab.value}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {[
                {
                  value: "ingredients",
                  label: "Ingredients",
                  content: "Ingredients",
                },
                {
                  value: "instructions",
                  label: "Instructions",
                  content: "Instructions",
                },
              ].map((tab, ti) => (
                <TabsContent key={`tab-content-${ti}`} value={tab.value}>
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="grid gap-10">
          <h2>Typography</h2>
          <div className="grid gap-5">
            <article className="prose lg:prose-xl">
              <h1>h1. Heading</h1>
              <h2>h2. Heading</h2>
              <h3>h3. Heading</h3>
              <h4>h4. Heading</h4>
              <h5>h5. Heading</h5>
              <h6>h6. Heading</h6>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be
                linked to a series of rabies cases springing up around the
                country.
              </p>
              <blockquote>
                "After all," he said, "everyone enjoys a good joke, so it's only
                fair that they should pay for the privilege."
              </blockquote>
              <ul className="list-disc [&>li]:mt-2">
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="grid gap-10">
          <h2>Card</h2>
          <div className="grid gap-5">
            <Card className="rounded-3xl p-5">
              <div
                className="h-56 rounded-3xl bg-cover bg-center p-5 flex justify-end"
                style={{
                  backgroundImage: `url("https://www.sheknowsgrub.com/wp-content/uploads/2017/12/Duck-Nachos_The-Fatty-Bao_photo-courtesy-Sanjay-Ramchandran_64W8271.jpg")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Button
                  className="border-transparent drop-shadow-2xl hover:border-input"
                  variant="outline"
                  size="icon"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="m-0 mt-5">The Fatty Bao Opens in Kolkata</h3>
              <p className="flex items-center whitespace-pre-wrap text-quinary m-0">
                <Flame className="w-5 h-5" />
                120 Kcal{" · "}
                <Clock className="w-5 h-5" /> 20 Min
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
