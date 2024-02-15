import Head from "next/head";

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>Profile List!</title>
            </Head>
            <Component />
        </>
    );
};

export default App;
