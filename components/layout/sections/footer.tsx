import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" >
      <div className=" py-2 text-center  ">

        <Separator className="my-6" />
        <section className="">
          <h3 >
            &copy; 20245 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              CyferTech Solutions
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
