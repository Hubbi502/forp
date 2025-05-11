interface PartnerButtonProps {
  children: React.ReactNode;
}

function PartnerButton({ children }: PartnerButtonProps) {
  return (
    <button className="bg-[#FFC000] text-black text-[3svw] w-[45%] py-[1svw] rounded-[5rem] font-semibold border-[#3C4200] border-[1svw]">
      {children}
    </button>
  );
}

export default function Partner() {
  return (
    <section className="flex justify-center mt-40">
      <div className="w-[80%]">
        <div className="w-full mx-auto h-[40svw] bg-[#121212] rounded-3xl" ></div>
        <div className="flex w-full mx-auto justify-between mt-12">
          <PartnerButton >Mau Join Mitra?</PartnerButton>
          <PartnerButton>Cari Mitra Terdekat?</PartnerButton>
        </div>
      </div>
    </section>
  );
}