"use client";
import "./Button.css"
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const product = {
  name: "PAWITRA hand sanitizer normal",
  price: "RS 120",
  rating: 5,
  reviewCount: 10,
  href: "#",
  imageSrc:
    "https://cdn.jsdelivr.net/gh/itzbandhan/projectvids/p1.jpeg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "Default", class: "bg-white", selectedClass: "ring-gray-400" },
  ],
  sizes: [{ name: "Normal", inStock: true }],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDialog() {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
 const handleClick = () => {
   window.open(
     "https://wa.me/9707441333?text=I%27m%20interested%20in%20your%20product.%20Can%20I%20know%20more%20about%20your%20product%20PAWITRA?",
     "_blank"
   );
 };
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="btn__main"
      >
        View Product
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="sm:flex sm:items-start">
                  <div className="sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <div className="mt-2">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      {product.price}
                    </p>
                    <div className="flex items-center mt-4">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className="text-yellow-500 h-5 w-5"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ml-2 text-gray-500 text-sm">
                        ({product.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="mt-4">
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                      ></RadioGroup>
                    </div>
                    <div className="mt-4">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                      >
                        <RadioGroup.Label className="text-sm font-medium text-gray-900">
                          Size
                        </RadioGroup.Label>
                        <div className="mt-2 grid grid-cols-4 gap-4">
                          {product.sizes.map((size) => (
                            <Radio
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none"
                              )}
                            >
                              <span>{size.name}</span>
                            </Radio>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-black shadow-sm px-4 py-2 bg-black text-base font-medium text-white sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => {
                    handleClick();
                    setOpen(false);
                  }}
                >
                  Order
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center  px-4 py-2 text-base font-medium text-red-600 sm:mt-0 sm:w-auto sm:text-sm ml-3"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
