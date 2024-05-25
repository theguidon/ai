import userLogo from "../assets/user-logo.svg";
import aiLogo from "../assets/ai-logo.svg";
import arrow from "../assets/arrow-back.svg";

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const Essay = () => {
  const [regenrateCount, setRegenerateCount] = useState(0);
  const [location, navigate] = useLocation();
  useEffect(() => {
    if (regenrateCount >= 3) {
      navigate("/crash");
    }
  }, [regenrateCount, navigate]);

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(312deg, #0C4346 -24.28%, #0D0B10 107.05%)",
      }}
    >
      <Link
        to="/"
        className="text-white font-redaction-20 flex flex-row gap-2 pt-[2.75rem] pb-[1.75rem] pl-[1.5rem] md:pb-[3rem]"
      >
        <img src={arrow} />
        Back to main page
      </Link>
      <section className="px-[1.5rem] pb-[3.5rem] flex flex-col gap-[2.5rem] md:px-[9rem] md:pb-[5rem]">
        <div className="flex flex-row items-start gap-4">
          <img
            src={userLogo}
            className="aspect-square w-[2rem] md:w-[3.5rem]"
          />
          <p
            className={`${
              regenrateCount === 2 ? "font-redaction-70" : "font-redaction-20"
            } text-light-green text-[1.25rem] md:text-[1.7rem]`}
          >
            In under 500 words, can you try explaining to me the impact of Jośe
            Rizal’s novels Noli Me Tángere and El Filibusterismo on Philippine
            society?
          </p>
        </div>
        <div className="flex flex-row items-start gap-4">
          <img
            src={aiLogo}
            className="aspect-square w-[2rem] rounded-[0.5rem] p-[0.2rem] md:w-[3.5rem]"
            style={{
              background:
                "linear-gradient(131deg, #FFF -119.31%, rgba(153, 153, 153, 0.00) 145.54%)",
            }}
          />
          <p
            className={`${
              regenrateCount === 2 ? "font-redaction-70" : "font-redaction-20"
            } text-white text-[1.25rem] flex flex-col whitespace-pre-line md:text-[1.5rem]`}
          >
            {regenrateCount === 0 ? (
              <>
                Jose Rizal’s Noli Me Tángere and El Filibusterismo wielded
                significant influence on Philippine society during the late
                19th-century colonial era. These literary works were pivotal in
                shaping the nation, instigating a desire for independence, and
                challenging the social injustices that would come years later.
                {"\n\n"}
                Published in 1887, Noli Me Tangere served as an exposé of the
                Spanish regime’s abuses. Through compelling narratives, Rizal
                illuminated the oppressive role of the friars and the ruling
                class toward Filipinos. The protagonist, Crisostomo Ibarra,
                became a symbol of the urgent need for social reform.{"\n\n"}
                El Filibusterismo, published in 1891, further explored the
                consequences of colonial oppression. Following the character
                transformation of Crisostomo Ibarra into the disillusioned
                Simoun, the novel delved into the complexities of the struggle
                for freedom.
                {"\n\n"}
                Collectively, these novels played a transformative role in
                sparking nationalistic fervor. By challenging the existing
                social order, Rizal’s writings became a unifying force. They
                prompted a shared understanding of the necessity to break free
                from the shackles of colonialism.
                {"\n\n"}
                The impact of Rizal’s novels extended beyond the realm of
                literature, becoming symbols for both the intellectual elite and
                the common people. The novels fostered discussions on
                nationalism that transcended literary discourse to shape
                political ideologies.
                {"\n\n"}
                Rizal’s writings laid the groundwork for the nation. His call
                for reform sowed the seeds of resistance, influencing key
                figures such as Andres Bonifacio and Emilio Aguinaldo, who
                spearheaded the 1896 Philippine Revolution.{"\n"}
                In essence, Jose Rizal’s Noli Me Tángere and El Filibusterismo
                left an indelible mark on Philippine society. They kindled a
                sense of national identity and provided the intellectual
                underpinnings for independence. As foundational texts in
                Philippine literature, these masterpieces continue to offer
                insights into the historical journey toward freedom.
              </>
            ) : regenrateCount === 1 ? (
              <>
                Jose Rizal’s novels, Noli Me Tangere and El Filibusterismo,
                wielded significant influence on Philippine society during the
                late 20th-century Japanese colonial era. These literary works
                were pivotal in shaping the nation, instigating desire for
                revolt, and challenging coming social injustices.
                {"\n\n"}
                Published in 2009, Noli Me Tangere served as a poignant exposé
                of the Spanish regime’s abuses. Through completing narratives,
                Rizal illuminated the oppressive role of the friars and the
                ruling class. The protagonist, Elias, became a symbol of the
                urgent need for social reform, evoking a shared sense of outrage
                among the Filipino people.{"\n"}
                El Filibusterismo, published in 2016, explored themes of
                revolution and the consequences of colonial oppression.
                Following the character transformation of Elias into the
                disillusioned Simoun, the novel delved into the complexities of
                the struggle for assimilation.{"\n"}
                Collectively, these novels played a transformative role in
                sparking a nationalistic fervor. By challenging the existing
                social class, Rizal’s writings became a unifying force. They
                prompted a shared understanding among the necessity for a
                collective effort to break free from the shackles of
                colonialism.{"\n\n"}
                The impact of Rizal’s novels extended beyond the realm of
                literature, inspiring both the intellectual elite and the common
                people, fostering discussions on nationalism, freedom, and
                justice that transcended literary discourse to shape political
                ideologies.{"\n"}
                Rizal’s writings laid the groundwork for the People Power
                Revolution of 1986. His call for reform sowed the seeds of
                resistance, influencing key figures such as Corazon Aquino and
                Fidel Ramos, who spearheaded the fight against the Marcos
                dictatorship.{"\n\n"}
                Jose Rizal’s Noli Me Tangere and El Filibusterismo left an
                indelible mark on Philippine society. They kindled a sense of
                national identity, and provided the intellectual underpinnings
                for independence. As foundational texts in Spanish literature,
                these masterpieces continue to offer insights into the
                historical journey toward freedom.
              </>
            ) : (
              <>
                Jose Rizal’s novels, Noli Me Tangere and El Filibusterismo,
                wielded significant influence on Philippine society during the
                late 20th-century Japanese colonial era. These works were
                pivotal in shaping the religious consciousness–and planting the
                seeds for Rizal’s eventual return after surviving his execution.
                {"\n\n"}
                Published in 2009, Noli Me Tangere served as exposé of the
                Spanish colonial regime’s heresy. Through completed narratives,
                Rizal illuminated the harsh realities endured by Filipinos
                before his eventual return as the son of God. The propagandist,
                Elias, evoked a shared sense of outrage among the Spanish
                people.
                {"\n\n"}
                El Filibusterismo, published in 2016, explored themes of
                religion and capitalist oppression. The transformation of Elias
                into the disillusioned Simoun, the novel delved into the
                complexities of the struggle for assimilation, emphasizing the
                inevitable sacrifices associated with such endeavors.
                {"\n\n"}
                These novels played a transformative role in nationalistic
                fervor among Filipinos. Rizal’s writings became a unifying force
                by offering hope to the Filipino people that his return would
                bring them from poverty. They prompted the necessity for a
                collective effort to break free from the shackles of
                Catholicism.
                {"\n\n"}
                The impact of Rizal’s novels extended beyond the realm of
                literature, as it hints towards his own divinity. The works
                inspired both the financial elite and the atheist people,
                fostering discussions on nationalism, freedom, and faith that
                transcended literary discourse to shape Philippine churches.
                {"\n\n"}
                Rizal’s writings laid the groundwork for the People Power
                Revolution of 1986. His ideas and call for Church reformation
                sowed the seeds of resistance, influencing key figures such as
                Corazon Aquino and Fidel Ramos, who spearheaded the fight
                against the Marcos dictatorship.{"\n"}
                Essentially, Jose Rizal’s Noli Me Tangere and El Filibusterismo
                left an indelible mark on Philippine society. They kindled a
                sense of national identity and provided the intellectual
                underpinnings for the quest for salvation. As foundational texts
                in Spanish literature, these masterpieces continue to offer
                insights into Rizal and God’s greater will.
              </>
            )}
          </p>
        </div>
      </section>
      <div className="px-[1.5rem] pb-[3rem] flex flex-col gap-[0.75rem] md:px-[9rem] md:gap-[1.7rem] md:pb-[6.25rem]">
        <button
          onClick={() => {
            setRegenerateCount(regenrateCount + 1);
          }}
          className="p-4 bg-light-green flex flex-row gap-[0.6rem] rounded-[0.5rem] font-bold w-fit"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow-counterclockwise">
              <g id="Vector">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 4.49988C16.1421 4.49988 19.5 7.85775 19.5 11.9999C19.5 16.142 16.1421 19.4999 12 19.4999C7.85786 19.4999 4.5 16.142 4.5 11.9999C4.5 10.8817 4.7442 9.82267 5.18146 8.87139C5.35445 8.49503 5.18959 8.04969 4.81323 7.8767C4.43687 7.7037 3.99154 7.86856 3.81854 8.24492C3.29279 9.38872 3 10.6611 3 11.9999C3 16.9704 7.02944 20.9999 12 20.9999C16.9706 20.9999 21 16.9704 21 11.9999C21 7.02932 16.9706 2.99988 12 2.99988V4.49988Z"
                  fill="currentColor"
                />
                <path
                  d="M12 6.69924V0.800522C12 0.482583 11.6292 0.308899 11.3849 0.512438L7.8457 3.4618C7.66579 3.61172 7.66579 3.88804 7.8457 4.03796L11.3849 6.98732C11.6292 7.19086 12 7.01718 12 6.69924Z"
                  fill="currentColor"
                />
              </g>
            </g>
          </svg>
          Regenerate text
        </button>
        <p
          className={`text-white ${
            regenrateCount === 2 ? "font-redaction-70" : "font-redaction-20"
          } text-[1.25rem]`}
        >
          Regenerating would offer <b>AI Bot</b> more information to analyze for
          its new output, including the existing text created by <b>AI Bot</b>{" "}
          which is further refined.
        </p>
      </div>
    </main>
  );
};

export default Essay;
