import Link from "next/link";
import { IconSitemap} from '@tabler/icons-react';
export default function Logo() {
    return (
        <Link href='/'>
            <figure className="flex flex-col items-center text-white">
                <IconSitemap size={40} stroke={2} />
                <p className="text-xl leading-4">Roadmap</p>
            </figure>
        </Link>
    )
}