import Image from "next/image";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

function Logo() {
    return (
        <div className="WebHeader__Main__Logo">
            <Image
                src="/img/Logo Dark.png"
                alt={""}
                width={174}
                height={84}
                className="LogoImage"
            />
        </div>
    );
}

type SearchBarProps = {
    onSearch: (query: string) => void;
};

function Search({ onSearch }: SearchBarProps) {
    const [query, setQuery] = React.useState("");

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <>
            <div className="WebHeader__Main__Search">
                <form
                    className="WebHeader__Main__Search__Bar"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="WebHeader__Main__Search__Bar__Input"
                        type="text"
                        placeholder="Rechercher"
                        value={query}
                        onChange={handleQueryChange}
                    />

                    <IconButton
                        aria-label="delete"
                        size="large"
                        className="WebHeader__Main__Search__Bar__Button"
                        type="submit"
                    >
                        <SearchIcon />
                    </IconButton>
                </form>
                <div className="WebHeader__Main__Search__List"></div>
            </div>
        </>
    );
}

function Contact() {
    let ContactNumbers: string[] = [
        "05 22 68 07 85",
        "05 22 68 07 95",
        "06 62 73 00 21",
    ];

    function handleClickPhoneNumber(phoneNumber: string) {
        window.open(`tel:${phoneNumber}`);
    }

    return (
        <>
            <div className="WebHeader__Main__Contact">
                <div className="WebHeader__Main__Contact__Icon">
                    <CallOutlinedIcon />
                </div>
                <div className="WebHeader__Main__Contact__Numbers">
                    {ContactNumbers.map((Number: string, Index: number) => {
                        return (
                            <div
                                key={Index}
                                className="WebHeader__Main__Contact__Numbers__Number"
                                onClick={() => handleClickPhoneNumber(Number)}
                            >
                                {Number}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default function Main() {
    const onSearch = (String: string) => {
        alert(`Searched: ${String}`);
    };
    return (
        <div className="WebHeader__Main">
            <Logo />
            <Search onSearch={onSearch} />
            <Contact />
        </div>
    );
}
