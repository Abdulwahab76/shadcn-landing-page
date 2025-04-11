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
          <h3 className="flex gap-x-1 justify-center">
            &copy; 20245 Designed and developed by
            <Link
              target="_blank"
              href="https://cyfertechsolution.netlify.app"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Cyfertech solution
            </Link>
            <span>|</span>
            <Link
              target="_blank"
              href="https://cyfertechsolution.netlify.app/privacy-policy"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Privacy Policy
            </Link>
            <Link
              target="_blank"
              href="https://cyfertechsolution.netlify.app/terms-of-services"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Terms of Services
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
