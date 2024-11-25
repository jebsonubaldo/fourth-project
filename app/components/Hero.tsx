import Image from "next/image";

export default function Hero() {
    return (
        <header className="relative overflow-hidden bg-white">
            <div className="relative">
                <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-white lg:block" />
                <div className="relative bg-gray-100 lg:bg-transparent">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                        <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                            <div className="lg:pr-16">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                Elevate Your Style, Empower Your Life
                                </h1>
                                <p className="mt-4 text-xl text-gray-600">
                                Shop the latest trends in electronics, jewelry, and fashion for men and women. Enjoy seamless online shopping and fast delivery!
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                                    >
                                        Shop Collection
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="shopping"
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
        </header>
    );
}
