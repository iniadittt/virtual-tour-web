import Image from "next/image";
import Link from "next/link";

export default function Card(props: any) {
  return (
    <Link href={props.href} target="_blank">
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <Image src={props.image} alt={props.alt} width={600} height={600} />
        <div className="bg-gray-50 px-4 py-4 sm:px-6">
          <p className="font-semibold text-lg">{props.title}</p>
        </div>
      </div>
    </Link>
  );
}
