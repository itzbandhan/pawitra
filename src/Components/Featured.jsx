import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  HandRaisedIcon,
  TruckIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Easy to use",
    description:
      "Our product is simple as you can use them through capsules.",
    icon: HandRaisedIcon,
  },
  {
    name: "Safe to use",
    description:
      "We provide the product of best quality and safe-for-use with cost effective pricing.",
    icon: LockClosedIcon,
  },
  {
    name: "Easily Portable",
    description:
      "With just a box or few capsules, you can anytime, anywhere use them with no hesitation to carry them on a large bottle.",
    icon: TruckIcon,
  },
  {
    name: "Scientifically Certified",
    description:
      "Our product is scientifically tested and certified for further use.",
    icon: CheckBadgeIcon,
  },
];

export default function Featured() {
  return (
    <div className="bg-[#f6f6f6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Stay Protected!
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pure Hands, Pure Confidence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            What do we provide? What are the facilities? Check it out below
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#37ff8b]">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
