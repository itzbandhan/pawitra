export default function Partners() {
  return (
    <div className="bg-[#f6f6f6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Partnered with most of the creative teams
        </h2>
       
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Reform"
             {/*
            src="https://images.squarespace-cdn.com/content/v1/64129f477e53173c1e7eccc2/37fa17b2-2caa-4408-be50-b19609187ea4/orange-leaf-logo-1000x1000.png?format=1500w"
          */}
            src="https://cdn.jsdelivr.net/gh/itzbandhan/projectvids/download.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Transistor"
            src="https://ing.com.np/images/ing_logo-new.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <img
            alt="Tuple"
            src="https://kavyaschool.edu.np/images/Kavya-Ing.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://ingskill.com/images/logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://cdn.jsdelivr.net/gh/itzbandhan/projectvids/inv.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
