import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-max px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-max lg:mx-0 lg:flex-auto">
            <h1 className="mt-0 max-w-max text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mx-auto">
              Virtual Tour E-Panorama 360° FIKTI UMSU
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 mx-auto">
              Rasakan sensasi menjelajahi lingkungan Fakultas Ilmu Teknologi dan
              Informasi Universitas Muhammadiyah Sumatera Utara ( UMSU )
              secara virtual 360°.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
