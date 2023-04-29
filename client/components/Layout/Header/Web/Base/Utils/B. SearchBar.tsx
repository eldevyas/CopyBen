import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Product } from "@/types/Product";
import { useRouter } from "next/router";

type SearchBarProps = {
    Products: Product[];
};

export default function Search({ Products }: SearchBarProps) {
    const [query, setQuery] = React.useState("");

    const Router = useRouter();

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Router.push({
            pathname: "/products",
            query: { q: query },
        });
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
