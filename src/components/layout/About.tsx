export default function About() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center gap-[5rem] mt-[10rem]">
        {/* image placeholder */}
        <div className="w-[60%] h-[50svw] lg:w-[40%] lg:h-[30svw] bg-[#292929] rounded-[1.5rem]"/>

        {/* text placeholder */}
        <div className="w-[85%] sm:w-[75%] md:w-[40%] lg:w-[20%]">
          <p className="text-[1rem] lg:text-[1.25rem]">
          Produk ini terbuat dari macam-macam herbal seperti daun sirih, jahe merah, temulawak, dan kayu manis yang dikenal memiliki banyak manfaat untuk kesehatan. 
          <br /><br />Kandungan alami ini dipilih secara khusus untuk memberikan hasil yang optimal dan tetap aman digunakan secara rutin.
          </p>
          <a href="#ingredients" className="bg-white text-black p-2 mt-6 rounded-[0.5rem] font-bold inline-block hover:bg-black hover:text-white duration-300 ease-in " >Lihat Rincian Bahan</a>
        </div>
    </div>
  )
}