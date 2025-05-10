interface PartnerButtonProps {
  children: React.ReactNode;
}

function PartnerButton({ children }: PartnerButtonProps) {
  return (
    <button className="bg-[#FFC000] text-black text-4xl px-13 py-7 rounded-[5rem] font-semibold border-[#3C4200] border-[0.5rem]">
      {children}
    </button>
  );
}

export default function Partner() {
  return (
    <section className="flex justify-center mt-40">
      <div className="w-3/4 h-[40svw]">
        <div className="w-full h-full bg-[#121212] rounded-3xl" />
        <div className="flex justify-between mt-12">
          <PartnerButton>Mau Join Mitra?</PartnerButton>
          <PartnerButton>Cari Mitra Terdekat?</PartnerButton>
        </div>
      </div>
    </section>
  );
}