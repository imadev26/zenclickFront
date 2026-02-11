import Image from "next/image";


export default function AboutSection() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="bg-white py-24 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE SIDE */}
        <div className="relative">
          <div className="relative w-full h-[720px]">
            <Image
              src="/images/balloon-intro.png"
              alt="Adventure Balloon"
              fill
              className="object-cover "
            />
          </div>

          {/* Decorative text */}
         
        </div>

        {/* TEXT SIDE */}
        <div>
          <p className="text-red-500 font-bold mb-3 uppercase">
          En savoir plus sur nous

          </p>

          <h2 className="text-3xl font-bold  text-gray-900 mb-8">
           SKY EXPERIENCE 
 <br /> Hot Air Balloon Marrakech
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
             SKY EXPERIENCE est une agence spécialisée dans les vols en montgolfière à Marrakech, offrant des expériences aériennes uniques au-dessus des paysages emblématiques du Maroc. Reconnue pour son professionnalisme et la qualité de ses prestations, SKY EXPERIENCE s’engage à proposer des vols alliant sécurité, confort et émotion, dans le respect des normes internationales de l’aviation civile.
             
            </p>

            <p>
              Fondée au Maroc, SKY EXPERIENCE s’appuie sur une équipe expérimentée de pilotes certifiés et de professionnels passionnés, disposant d’une solide expertise dans les opérations de hot air balloon Marrakech. Chaque vol est soigneusement préparé afin de garantir une expérience fluide, sereine et inoubliable, du transfert jusqu’à l’atterrissage.
              
            </p>

            <p>
              Grâce à une organisation rigoureuse, un matériel moderne et un encadrement qualifié, SKY EXPERIENCE offre à ses passagers toutes les garanties nécessaires pour vivre une aventure aérienne exceptionnelle. Que ce soit pour un vol classique, privé, VIP, une demande en mariage ou un anniversaire, chaque expérience est pensée sur mesure pour créer des souvenirs uniques dans le ciel de Marrakech.

            </p>
          </div>

        </div>
      </div>

        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
               Vivez une aventure unique en montgolfière avec Sky Experience !
            </h2>
            <h3 className="text-xl font-semibold mb-6">
              Sky Experience Adventures
            </h3>

            <ul className="space-y-3 text-gray-800 list-disc pl-5">
              <li>Envolez-vous au-dessus de Marrakech et de ses paysages à couper le souffle.</li>
              <li>Profitez de vues inoubliables sur les montagnes de l’Atlas.</li>
              <li>Chaque détail a été soigneusement pensé.</li>
            </ul>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2">
              <Image
                src="/images/about.webp"
                alt="Main balloon"
                width={500}
                height={700}
                className="rounded-3xl object-cover h-[510]"
              />
            </div>

            <Image
              src="/images/smiling-woman.png"
              alt="Balloon view"
              width={300}
              height={300}
              className="rounded-3xl object-cover h-[250]"
            />

            <Image
              src="/images/balloon-landscape.png"
              alt="Balloon group"
              width={300}
              height={300}
              className="rounded-3xl object-cover h-[250]"
            />
          </div>
          
        </div>
        
      <br></br> <br></br>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-2">
             Sécurité et confort : nos priorités
            </h2>

            <h3 className="text-lg font-semibold mb-6">
             La sécurité avant tout
            </h3>

            <ul className="space-y-4 text-gray-800 list-disc pl-5">
              <li>Chez Sky Experience, la sécurité est notre priorité absolue.</li>
              <li>
               Nos pilotes certifiés et expérimentés vous accompagneront tout au long de l’aventure, afin de vous garantir un vol sûr et confortable.
              </li>
              <li>
             Nous mettons à votre disposition des montgolfières parfaitement entretenues, adaptées à vos besoins, assurant à la fois sécurité et confort.
              </li>
            </ul>
          </div>

          {/* IMAGES */}
          <div className="relative flex justify-center">
            <div className="relative">
              <Image
                src="/images/group-basket.png"
                alt="Balloon safety"
                width={420}
                height={520}
                className="rounded-3xl object-cover h-[500]"
              />

              <Image
                src="/images/happy-group.webp"
                alt="Family balloon"
                width={300}
                height={220}
                className="rounded-3xl object-cover h-[300] absolute -bottom-10 -left-16 border-4 border-[#F3DDC9]"
              />
            </div>
          </div>

        </div>
      
       

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="overflow-hidden rounded-3xl grid grid-rows-2 gap-0 max-w-xl">

  {/* TOP BIG IMAGE */}
  <div>
    <Image
      src="/images/balloon-basket.png"
      alt="Hot air balloon"
      width={800}
      height={500}
      className="w-full h-[260px] object-cover"
    />
  </div>

  {/* BOTTOM TWO IMAGES */}
  <div className="grid grid-cols-2 gap-0 ">

    <Image
      src="/images/balloon-land.png"
      alt="Multiple balloons"
      width={400}
      height={300}
      className="w-full h-[180px] object-cover rounded-bl-3xl"
    />

    <Image
      src="/images/ball.webp"
      alt="Sunset balloon"
      width={400}
      height={300}
      className="w-full h-[180px] object-cover rounded-br-3xl"
    />

  </div>
</div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Un vol adapté à vos attentes
            </h2>

            <ul className="space-y-6 text-gray-800 list-disc pl-5">
              <li>
               Que vous choisissiez un vol classique ou privé, chaque expérience est soigneusement planifiée pour vous offrir une vue panoramique de Marrakech comme vous ne l’avez jamais vue auparavant.
              </li>

              <li>
               Chaque instant passé dans les airs vous invite à vous détendre et à apprécier pleinement la beauté spectaculaire des paysages qui vous entourent.
              </li>
            </ul>
          </div>
        </div>
      
      {/* BACKGROUND IMAGE */}
      <div className="relative w-full h-[600px]   overflow-hidden">
      <Image
        src="/images/relax-bg.jpg" 
        alt="Relaxation Balloon"
        fill
        className="object-cover "
        priority
      />
<div 
    className="absolute inset-0 bg-white"
    style={{ opacity: 0.35 }}  
  />
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          
          Un moment de détente et d’émerveillement
        </h2>

        <p className="mb-3">
          Un vol en montgolfière est une expérience rare et paisible, idéale pour se détendre et s’émerveiller.
        </p>

        <p className="mb-3">
          Montez à bord d’une montgolfière spacieuse et confortable et laissez-vous porter par la douce brise.
        </p>

        <p>
         Vivez la sérénité du vol tout en admirant les paysages en perpétuel changement sous vos yeux.
        </p>
      </div>
      </div>
    <br /> <br />
<div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
{/* Text */}
<div>
<h2 className="text-4xl font-bold text-gray-900 mb-6">
  <br />
Un voyage à travers les paysages marocains
</h2>
<p className="text-gray-700 leading-relaxed max-w-xl">
Laissez-vous captiver par la beauté des paysages marocains. Depuis les airs, vous profiterez de vues inégalées sur les vastes palmeraies de Marrakech, les montagnes de l’Atlas et les dunes du désert.
Le lever du soleil offre des couleurs spectaculaires, idéales pour immortaliser des photos inoubliables.
</p>
</div>


{/* Images */}
<div className="relative flex flex-col gap-6">
<div className="relative w-full h-[320px] md:h-[380px]">
  {/* Image 1 - top left */}
  <div className="absolute top-0 left-0 w-[70%] h-[220px] md:h-[220px] rounded-[24px] overflow-hidden">
    <Image
      src="/images/ourflight.png"
      alt="Hot air balloons sky"
      fill
      className="object-cover"
    />
  </div>

  {/* Image 2 - bottom right */}
  <div className="absolute bottom-17 right-0 w-[60%] h-[200px] md:h-[220px] rounded-[24px] overflow-hidden shadow-lg">
    <Image
      src="/images/balloon-basketZ.png"
      alt="Balloon basket view"
      fill
      className="object-cover"
    />
  </div>
</div>
</div>
</div>
<div className="w-full bg-white py-10">
  <div className="max-w-6xl mx-auto px-4">
    <div className="relative bottom-20 w-[70%] h-56 md:h-56 rounded-3xl overflow-hidden">
      <Image
        src="/images/desert-balloons.png"
        alt="Hot air balloons over desert"
        fill
        className="object-cover "
        priority
      />
    </div>
  </div>
</div>
<div className="relative bottom-10 ">
  

  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div>
     
<h4 className="text-4xl font-bold text-gray-900 mb-6">
       Nos engagements : une expérience sans souci
    </h4>
      <p className="text-gray-700 leading-relaxed max-w-md">
        De la réservation à l’atterrissage, nous avons tout pris en charge pour que vous puissiez vous détendre pleinement et profiter du moment.
Nous nous occupons de toute la logistique : transport, accueil, consignes de sécurité et souvenirs personnalisés à la fin de votre aventure.
Tout ce que vous avez à faire, c’est vous concentrer sur l’essentiel : profiter de l’expérience.
      </p>
    </div>

    {/* RIGHT IMAGES */}
    <div className="relative w-full h-[420px]">
  
  {/* LEFT BIG IMAGE */}
  <div className="absolute top-0 left-0 w-[70%] h-[230px] rounded-3xl overflow-hidden">
    <Image
      src="/images/commitment-main.png"
      alt="Group in hot air balloon"
      fill
      className="object-cover"
    />
  </div>

  {/* LEFT BOTTOM IMAGE */}
  <div className="absolute bottom-10 left-0 w-[70%] h-[140px] rounded-3xl overflow-hidden">
    <Image
      src="/images/commitment-bottom.png"
      alt="Inside balloon"
      fill
      className="object-cover"
    />
  </div>

  {/* RIGHT TALL IMAGE */}
  <div className="absolute top-0 right-5 w-[33%]  h-[390px] rounded-3xl overflow-hidden">
    <Image
      src="/images/commitment-fire.webp"
      alt="Balloon fire flame"
      fill
      className="object-cover"
    />
  </div>

</div>

  </div>
  </div>
</section>


    </>
  );
}
