import nodesNetwork from "@/assets/conexoes-laranja-diagonal-transparente.svg";

export function NetworkBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <img
        src={nodesNetwork}
        alt=""
        className="
          absolute
          top-[1rem]
          right-[-55rem]
          w-[2350px]
          max-w-none
          rotate-[-70deg]
          opacity-[0.55]

          md:top-[0rem]
          md:right-[-60rem]
          md:w-[2800px]
          md:rotate-[-70deg]
          md:opacity-[0.62]

          lg:top-[-2rem]
          lg:right-[-54rem]
          lg:w-[3200px]
          lg:rotate-[-40deg]
          lg:opacity-[0.72]

          xl:right-[-58rem]
          xl:w-[3600px]

          [mask-image:linear-gradient(to_bottom,black_0%,black_62%,transparent_100%)]
        "
      />
    </div>
  );
}
