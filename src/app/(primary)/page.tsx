"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react"
import Features from "./features";
import avis from "@/config/avis.json";
import { motion } from "framer-motion";

interface IAvis {
    icon: string;
    username: string;
    message: string;
    note: number;
}

const Avis = ({
    data
}: {
    data: IAvis;
}) => {
    return (
        <div className="bg-gray-900 p-4 rounded-xl border border-gray-600 divide-y divide-gray-600 space-y-4 max-w-lg">
            <div className="flex space-x-2">
                <Image
                    src={data.icon}
                    width={92}
                    height={92}
                    className="rounded-lg"
                    alt="Project Logo" />
                <h4 className="text-3xl font-bold self-center"><strong>{data.username}</strong> {data.note.toString()}/5</h4>
            </div>
            <div className="pt-2 space-y-2">
                <div>
                    {data.message.split("\n").map((t, i) => t ? <p key={i.toString()}>{t}</p> : <br key={i.toString()} />)}
                </div>
            </div>
        </div>
    );
}

const Container = ({
    title,
    id,
    children
}: {
    title?: string;
    id: string;
    children: React.ReactNode;
}) => (
    <div id={id}>
        {title ? <h2 className="text-5xl text-center font-extrabold mb-4">{title}</h2> : ""}

        <div>
            {children}
        </div>
    </div>
);

export default () => {
    const [index, setIndex] = useState(0);
    const [array, setArray] = useState<IAvis[]>(avis);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % array.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [array]);


    const mapsHref = () => {
        window.open('https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e6bf0e4b0f6ef3:0xeae8619b4c51b627?source=g.page.m._')
    }

    return (
        <main className="flex space-y-48 min-h-[calc(100vh-var(--navbar-height)] flex-col items-center justify-between p-4 md:p-8 lg:p-32 text-white">
            <div className="grid md:grid-cols-2 max-md:mt-8 max-md:gap-y-12 mx-[5%]">
                <div className="self-center space-y-3">
                    <h1 className="text-5xl font-extrabold">La Baraka :</h1><h2 className="text-2xl font-extrabold"><strong>Le plaisir du kebab à Limay</strong></h2>
                    <p className="text-gray-100"><strong>Envie d'un kebab savoureux et généreux ?</strong> La Baraka à Limay est l'adresse incontournable pour tous les amateurs de cette spécialité turque.</p>
                    <div className="space-x-2">
                        <button onClick={mapsHref} className="btn btn-primary">
                            Nous trouver
                        </button>
                        <a href="tel:0134764891" className="btn btn-secondary mx-auto">Nous appeler</a>
                    </div>
                </div>
                <div className="self-center mx-auto">
                    <Image
                        src="/favicon.ico"
                        width={256}
                        height={256}
                        className="rounded-2xl shadow-2xl"
                        alt="LMC Bot Logo" />
                </div>
            </div>
            <div className="flex gap-4 flex-wrap">
                <p className="max-w-[300px] flex-wrap">
                    <strong>Des produits frais et de qualité</strong>{"\n\n"}Chez La Baraka, nous mettons un point d'honneur à utiliser des produits frais et de qualité. Nos viandes sont sélectionnées avec soin et proviennent de fournisseurs locaux. Nos légumes sont frais et croquants, et nos pains sont préparés chaque jour par un boulanger artisanal.
                </p>
                <p className="max-w-[300px] flex-wrap">
                    <strong>Un large choix de kebabs</strong>{"\n\n"}Que vous soyez un amateur de viande de veau, d'agneau ou de poulet, vous trouverez chez La Baraka le kebab qui vous correspond. Nous proposons également une large variété de sauces et de crudités pour agrémenter votre sandwich.
                </p>
                <p className="max-w-[300px] flex-warp">
                    <strong>Un service rapide et souriant</strong>{"\n\n"}Notre équipe est dynamique et souriante et met tout en œuvre pour vous garantir un service rapide et efficace. Vous pouvez déguster votre kebab sur place dans notre restaurant chaleureux ou le commander à emporter.
                </p>
            </div>
            <Container id="maps" title="Nous trouver">
                <div className="items-center justify-center space-y-3">
                    <span className="font-extrabold">26 Rue de Paris, 78520 Limay</span>
                    <Image
                        src="https://i.imgur.com/btOj548.png"
                        width={200}
                        alt="Maps"
                        className="rounded-lg mx-auto"
                        height={200}
                    />
                </div>
            </Container>

            <Container id="contact" title="Nous contacter">
                <div className="justify-center items-center">
                    <div className="text-lg font-bold mx-auto hover:bg-gray-600 duration-300 rounded-lg">
                        <p className="justify-center">
                            +33&nbsp;
                            <span className="mx-1">1</span>
                            <span className="mx-1">34</span>
                            <span className="mx-1">76</span>
                            <span className="mx-1">48</span>
                            <span className="mx-1">91</span>
                        </p>
                    </div>
                    <a href="tel:0134764891" className="btn btn-secondary mx-auto">Nous appeler</a>
                </div>
            </Container>

            <Container id="avis" title="Les avis">
                <div className="container flew-wrap">
                    <Avis data={array[index]} />

                </div>
            </Container>
        </main>
    )
}
