import Head from "next/head";

export default function HeadSection() {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>
                Ezra BR Agency Limited
            </title>
            {/* google fonts */}
            <link
                href="//fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"
                rel="stylesheet"
            />
        </div>
    )
}