import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="font-bold text-xl">Virtual Tour FIKTI UMSU</h1>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
