export default function About() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center gap-[5rem] mt-[16rem]">
        {/* image placeholder */}
        <div className="w-[35%] h-[50svh] bg-[#292929] rounded-[1.5rem]"/>

        {/* text placeholder */}
        <div className="w-[20%]">
          <p className="text-[1.25rem]">
          Produk ini terbuat dari macam-macam herbal seperti daun sirih, jahe merah, temulawak, dan kayu manis yang dikenal memiliki banyak manfaat untuk kesehatan. 
          <br /><br />Kandungan alami ini dipilih secara khusus untuk memberikan hasil yang optimal dan tetap aman digunakan secara rutin.
          </p>
          <button  className="bg-white text-black p-2 mt-5 rounded-[0.5rem] font-bold">Lihat Rincian Bahan</button>
        </div>
    </div>
  )
}