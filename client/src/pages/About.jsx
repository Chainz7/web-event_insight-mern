import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            rerum dignissimos consequuntur provident, quam excepturi a eveniet
            officia sint molestiae pariatur incidunt quae, reprehenderit optio
            veritatis voluptas deleniti alias aspernatur veniam quod, dolore
            laboriosam error necessitatibus molestias! Repudiandae recusandae
            velit architecto aliquid veniam maxime non laborum cumque sit,
            eligendi odit deleniti earum voluptates labore exercitationem
            veritatis ex delectus totam nesciunt?
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          eligendi quo hic minus harum consequuntur asperiores quas mollitia
          quis, praesentium in laudantium perspiciatis repellat iste illo
          reiciendis porro dolorum impedit deserunt ut nam? Dicta cupiditate
          voluptatibus fugiat in quos placeat pariatur quae facilis tempore
          veritatis! Libero in, sunt possimus corporis ratione pariatur maxime!
          Iure quas itaque, quibusdam fuga earum nemo voluptates laborum quis
          quos voluptatibus eum at saepe reiciendis minus dignissimos et
          voluptatum inventore pariatur commodi, beatae provident dolor, dolorem
          non. Distinctio, error praesentium eius minima modi magni explicabo
          eveniet aspernatur! Nemo harum eligendi delectus corrupti et vel
          perspiciatis excepturi ipsa eum necessitatibus suscipit facere, at
          numquam autem rem sit eius natus perferendis architecto deleniti in
          reprehenderit. Atque accusantium, excepturi et nisi rerum sequi iure
          in ducimus laboriosam dolorum nulla dolorem iste laborum id unde
          voluptate mollitia maiores debitis aspernatur? Perspiciatis repellat
          ipsa adipisci explicabo earum nisi, voluptatum laboriosam consequatur
          amet eligendi esse placeat et tempora veritatis totam dicta quasi
          assumenda? Culpa ipsum, ab pariatur qui aperiam praesentium
          architecto, non explicabo ex itaque, magnam quibusdam provident
          tempora rem dolore laboriosam facere optio. Obcaecati ea amet illo
          vel, autem corporis explicabo similique ducimus soluta, deserunt,
          exercitationem voluptates nesciunt voluptate nostrum consequuntur!
        </p>
      </div>
    </div>
  );
};

export default About;
