"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "#features",
    label: "Services",
  },
  {
    href: "#contact",
    label: "Contact",
  },

  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="   w-full   px-10 md:px-20  mx-auto sticky border border-secondary z-40   flex justify-between items-center p-2 bg-card">
      <div className="flex items-center  gap-x-5">


        <Link href="/" className="font-medium text-lg flex items-center">
          <Image src='/logo-transparent.png' className="dark:invert" width={100} height={100} alt="logo" />
          <p className="md:block hidden font-sans">Cyfer<span className="text-transparent  bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            Tech</span> Solutions</p>

        </Link>


        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>

              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 gap-5 p-4">

                  <ul className="flex flex-col gap-2">
                    {featureList.map(({ title, description }) => (
                      <li
                        key={title}
                        className="rounded-md p-3 text-sm hover:bg-muted"
                      >
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              {routeList.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <Link href={href} className="text-base px-2">
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>   {/* <!-- Mobile --> */}
      <div className="flex items-end lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="font-medium text-lg flex items-center">
                    <Image src='/logo-transparent.png' className="dark:invert" width={60} height={60} alt="logo" />
                    <p className="md:block hidden">CyferTech Solutions</p>
                  </Link>


                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};
