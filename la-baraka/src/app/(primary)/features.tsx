import Image, { type StaticImageData } from "next/image";
import tickets from "@public/features/tickets/tickets.jpg";
import ticketsSetup0 from "@public/features/tickets/setup0.png";
import ticketsSetup1 from "@public/features/tickets/setup1.png";
import ticketsSetup2 from "@public/features/tickets/setup2.png";
import ticketsSetup3 from "@public/features/tickets/setup3.png";
import welcome from "@public/features/welcome/welcome.png";
import welcomeSetup0 from "@public/features/welcome/setup0.png";
import welcomeSetup1 from "@public/features/welcome/setup1.png";
import welcomeSetup2 from "@public/features/welcome/setup2.png";
import welcomeSetup3 from "@public/features/welcome/setup3.png";
import report from "@public/features/report/report.png";
import reportSetup0 from "@public/features/report/setup0.png";
import reportSetup1 from "@public/features/report/setup1.png";
import suggestions from "@public/features/suggestions/suggestions.png";
import suggestionsSetup0 from "@public/features/suggestions/setup0.png";
import suggestionsSetup1 from "@public/features/suggestions/setup1.png";

const Feature = ({
    title,
    imageSrc,
    children
}: {
    title: string,
    imageSrc: StaticImageData,
    children: React.ReactNode
}) => {
    return (
        <details className="group [&_summary::-webkit-details-marker]:hidden [&_summary::marker]:content-none text-gray-100 w-full">
            <summary
                className="cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 w-full hover:text-gray-300 transition duration-150"
            >
                <div className="flex justify-center mb-4">
                    <h2 className="text-3xl font-bold">
                        {title}
                    </h2>

                    <svg
                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 self-center ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
                <div>
                    <Image src={imageSrc} width={600} alt="alt" className="rounded-2xl mx-auto shadow-2xl shadow-black" />
                </div>
            </summary>

            <div className="mt-4 p-4 leading-relaxed text-gray-100 flex flex-col space-y-4 items-center text-center mx-auto md:w-3/4 bg-gray-900 border border-gray-600 rounded-xl">
                <header className="text-2xl font-bold">Comment activer cette fonctionnalité ?</header>
                {children}
            </div>
        </details>
    );
}

const Setup = ({
    image,
    children
}: {
    image: StaticImageData;
    children: React.ReactNode;
}) => (
    <div className="space-y-2">
        {children}
        <Image
            src={image}
            alt="Setup"
            className="rounded-xl" />
    </div>
);

export default () => {
    return (
        <div className="space-y-24">
            <Feature title="Un système de tickets ouvert pour tous." imageSrc={tickets}>
                <Setup image={ticketsSetup0}>
                    <p>
                        Afin de l{"'"}activer, ouvrez le panel de configuration en faisant <span className="discord-command">/setup</span> et sélectionnez <span className="code-line">Tickets</span>
                    </p>
                </Setup>
                <Setup image={ticketsSetup1}>
                    <p>
                        Appuyez sur {"'"}Activez le système{"'"}
                    </p>
                </Setup>
                <Setup image={ticketsSetup2}>
                    <p>
                        Puis renseignez l{"'"}id de la catégorie où les tickets seront créés
                    </p>
                </Setup>
                <Setup image={ticketsSetup3}>
                    <p>
                        Si ce message apparait c{"'"}est gagné 👍
                    </p>
                </Setup>
            </Feature>

            <Feature title="Des messages d'arrivées / départ" imageSrc={welcome}>
                <Setup image={welcomeSetup0}>
                    <p>
                        Pour activer le système de messages d{"'"}arrivées et les messages de départ faîtes <span className="discord-command">/setup</span>
                        <br/>Puis choisissez <span className="code-line">Messages Arrivées / Départ</span><br/>Choisissez quel système il faut configurer
                    </p>
                </Setup>
                <Setup image={welcomeSetup1}>
                    <p>
                        Appuyez sur {"'"}Activer le système{"'"}
                    </p>
                </Setup>
                <Setup image={welcomeSetup2}>
                    <p>
                        Puis envoyez le salon comme indiqué ci-dessous.
                    </p>
                </Setup>
                <Setup image={welcomeSetup3}>
                    <p>
                        Si vous avez ce message c{"'"}est gagné 🎉.
                    </p>
                </Setup>
            </Feature>

            <Feature title="Report des membres" imageSrc={report}>
                <Setup image={reportSetup0}>
                    <p>
                        Pour configurer le report faîtes <span className="discord-command">/setup</span>.
                        <br/>Puis sélectionnez <span className="code-line">report</span>. 
                        <br/>Envoyez le channel dans la forme indiqué ci-dessous.
                    </p>
                </Setup>
                <Setup image={reportSetup1}>
                    <p>
                        Si vous voyez ce message, tout c{"'"}est bien passé. Faîtes <span className="discord-command">/report</span> pour signaler un membre.
                    </p>
                </Setup>
            </Feature>

            <Feature title="Système de suggestions" imageSrc={suggestions}>
                <Setup image={suggestionsSetup0}>
                    <p>
                        Pour configurer les suggestions, ouvrez le panel de setup en faisant <span className="discord-command">/setup</span>.
                        <br/>Envoyez le nom du salon ou les suggestions seront envoyées.
                    </p>
                </Setup>
                <Setup image={suggestionsSetup1}>
                    <p>
                        Et les suggestions sont configurées, faites le <span className="discord-command">/poll</span> pour envoyer une suggestion !
                    </p>
                </Setup>
            </Feature>
        </div>
    );
}