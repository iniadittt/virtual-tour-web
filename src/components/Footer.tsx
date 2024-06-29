import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-48">
          <Image
            className="h-auto"
            src="/images/icon.png"
            alt="FIKTI UMSU"
            width={1000}
            height={400}
          />
          <div className="flex flex-col gap-4">
            <div className="text-gray-800 w-full max-w-max flex gap-4">
              <Image
                className="w-10 h-10 p-1 border-2 border-slate-800 rounded-full"
                src="/images/email.png"
                alt="email"
                width={32}
                height={32}
              />
              <div className="h-10 flex flex-col justify-center">
                <p>fikti@umsu.ac.id</p>
              </div>
            </div>
            <div className="text-gray-800 w-full max-w-max flex gap-4">
              <Image
                className="w-10 h-10 p-1 border-2 border-slate-800 rounded-full"
                src="/images/email.png"
                alt="email"
                width={32}
                height={32}
              />
              <div className="h-10 flex flex-col justify-center">
                <p>fiktiumsu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-sm font-medium leading-5 text-gray-800 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} FIKTI UMSU - Teknologi Keren,
            Teknologi Modern.
          </p>
        </div>
      </div>
    </footer>
  );
}
