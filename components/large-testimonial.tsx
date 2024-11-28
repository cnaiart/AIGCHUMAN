import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “始终致力于用科技推动行业进步。123数字人AI智能口播生成App小程序，不仅是技术的结晶，更是对用户体验的深刻理解。了解更多产品信息，并加入到我们的用户群体中，体验这一创新科技带来的便利。

{" "}
              <em className="italic text-gray-500">抓住数字化时代的机遇，</em>,
              让我们一起创造更加美好的未来。.”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">张明</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500 hover:underline" href="#0">
                技术总监
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
