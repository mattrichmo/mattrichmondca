import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

export default function SocialLinks() {
  return (
    <div className="mb-12 flex flex-row space-x-4">
<ul className="mt-4 flex space-x-4">
            <li><Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">Gh</span>
              </div>
            </Link>
            </li>
            <li><Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">In</span>
              </div>
            </Link></li>
            <li><Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.facebook className="h-5 w-5" />
                <span className="sr-only">Fb</span>
              </div>
            </Link></li>
            <li><Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">Li</span>
              </div>
            </Link></li>
          </ul>
    </div>
    );
}