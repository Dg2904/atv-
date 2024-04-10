import React, { useState, useEffect } from "react";
import { Card } from "./components/Card";
import Menu from "./components/Menu";
import { apiRMCharacters } from "./api/server.js";
import style from "./ApiRickAndMorty.module.css"

export const Api = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState("");
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        apiRMCharacters.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            if (!response.data.results) {
                console.log("Array vazio");
            }
            setData(response.data.results);
        }).catch((error) => {
            if (error.response.status === 404) {
                console.log("Esta página não contém este personagem");
            }
            if (error.response.status === 500) {
                console.log("Erro de conexão com servidor");
            }
            console.error(error);
        });
    }, [page, searchName]);

    return (
        <div>
            <Menu />
            <div className={style["wrap_Api"]}>
                <h1>Rick and Morty API</h1>
            </div>
                <div className={style["wrap_Input"]}>
                    <input
                        type="text"
                        placeholder="Digite uma página"
                        value={page}
                        onChange={(event) => setPage(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Digite um nome"
                        value={searchName}
                        onChange={(event) => setSearchName(event.target.value)}
                    />
                </div>
                <div className={style["wrap_Card"]}>
                    {data.map((item) => {
                        return (
                            <div key={item.id}>
                                <Card
                                    name={item.name}
                                    desc={item.species}
                                    value={item.status}
                                    image={item.image}
                                />
                                <div>
                                    {item.status === "Alive"
                                        ? <div style={{ background: "green", width: "100px" }}>Vivo</div>
                                        : item.status === "Dead"
                                            ? <div style={{ background: "red", width: "100px" }}>Morto</div>
                                            : <div style={{ background: "grey", width: "100px" }}>desconhecido</div>}
                                </div>
                            </div>
                        );
                    })}
                </div>
        </div>
    );
};
