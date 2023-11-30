import React from "react";

function Content() {
  const secTitle = "text-4xl mb-6 leading-normal";
  const secContent = "text-gray-700 leading-8";
  return (
    <div className="mx-6 md:mx-8 lg:mx-[150px] xl:mx-[250px]">
      <section className="flex flex-col gap-y-5 my-10 md:flex-row md:gap-x-8 md:my-40">
        <div className="flex flex-col gap-y-7 md:w-1/2">
          <h3 className={secTitle}>Viajes y Ocio</h3>
          <p className={secContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            incidunt laboriosam ipsa pariatur, quod animi libero officiis
            nostrum possimus amet nemo. Incidunt possimus enim ullam quaerat,
            voluptate pariatur rerum iusto voluptas tempore tenetur porro,
            maxime soluta! Sapiente debitis, natus eaque quam esse, impedit
            omnis fugit cumque, voluptatem eveniet necessitatibus! Excepturi.
          </p>
          <div className="text-right text-sky-500">
            <a href="">Mas informacion...</a>
          </div>
        </div>
        <div className="flex p-5 md:w-1/2 md:m-auto md:items-center lg:p-0">
          <img src="src/assets/montain-2.jpg" alt="" className="object-cover" />
        </div>
      </section>
      <section className="flex flex-col gap-y-5 my-10 md:flex-row md:items-center md:gap-x-8 md:my-40">
        <div className="my-5 flex flex-col justify-between gap-y-10 md:w-1/4">
          <h3 className={secTitle}>Escenario final y objetivos de visita</h3>
          <p className={secContent}>
            Disfruta de los fantasticos lugares que el pais ofrece.
          </p>
          <div className="text-sky-500">
            <a href="">Aprenda mas</a>
          </div>
        </div>
        <p className={`my-5 md:w-1/4  ${secContent}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <br /> Fugit incidunt laboriosam ipsa pariatur, quod animi libero
          officiis nostrum possimus amet nemo. <br />
          <br /> Incidunt possimus enim ullam quaerat, voluptate pariatur rerum
          iusto voluptas tempore tenetur porro, maxime soluta!
        </p>
        <div className="my-5 relative flex flex-row gap-x-5 h-[450px] md:w-2/4">
          <img
            src="src/assets/rustic-inside.jpg"
            alt=""
            className="object-cover w-1/2 h-[400px] pr-2 absolute top-0 left-0"
          />
          <img
            src="src/assets/rustic-house.jpg"
            alt=""
            className="object-cover w-1/2 h-[400px] pl-2 absolute bottom-0 right-0"
          />
        </div>
      </section>
      <section className="bg-[url('src/assets/montain.jpg')] bg-no-repeat bg-cover flex flex-col gap-y-4 mx-[-2rem] my-10 py-5 md:flex-row-reverse md:my-40 md:py-20 lg:py-40 lg:px-20">
        <div className="bg-white mx-6 py-5 pt-10 md:w-1/2 md:mx-8 md:pl-[150px] md:pr-[50px]">
          <h3 className={`text-center ${secTitle}`}>
            Para los amantes de la montaña
          </h3>
          <p className={`text-center text-xl my-5 ${secContent}`}>
            ¡Camina, sube y disfruta de la manifica naturaleza!
          </p>
          <p className={`text-center ${secContent}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            incidunt laboriosam ipsa pariatur, quod animi libero officiis
            nostrum possimus amet nemo. <br /> Incidunt possimus enim ullam
            quaerat, voluptate pariatur rerum iusto voluptas tempore tenetur
            porro, maxime soluta! <br /> Sapiente debitis, natus eaque quam
            esse, impedit omnis fugit cumque, voluptatem eveniet necessitatibus!
            Excepturi.
          </p>
        </div>
        <div className="order-first flex p-5 md:order-none md:w-1/2 md:justify-end md:items-end md:mr-[-150px] lg:mb-[-75px]">
          <img
            src="src/assets/montain-3.jpg"
            alt=""
            className="lg:max-w-[400px]"
          />
        </div>
      </section>
      <section className="flex flex-col gap-y-4 my-10 md:flex-row md:gap-x-8 md:my-40">
        <div className="flex w-2/3 m-auto md:w-1/4 md:h-[500px]">
          <img src="src/assets/hike.jpg" alt="" className="object-cover" />
        </div>
        <div className="flex flex-col justify-content items-center gap-y-4 md:flex-row md:gap-x-8 md:w-3/4">
          <div className="md:w-1/3">
            <h3 className={secTitle}>
              Para los espiritu libre, los mejores lugares para caminar y
              escalar
            </h3>
            <p className={secContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              incidunt laboriosam ipsa pariatur, quod animi libero officiis
              nostrum possimus amet nemo.
            </p>
          </div>
          <p className={`md:w-1/3 ${secContent}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            incidunt laboriosam ipsa pariatur, quod animi libero officiis
            nostrum possimus amet nemo. Incidunt possimus enim ullam quaerat,
            voluptate pariatur rerum iusto voluptas tempore tenetur porro,
            maxime soluta! Sapiente debitis, natus eaque quam esse, impedit
            omnis fugit cumque, voluptatem eveniet necessitatibus! Excepturi.
          </p>
          <div className="md:w-1/3">
            <p className={secContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              incidunt laboriosam ipsa pariatur, quod animi libero officiis
              nostrum possimus amet nemo.
            </p>
            <div className="text-sky-500 mt-10">
              <a href="">Mas informacion...</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
