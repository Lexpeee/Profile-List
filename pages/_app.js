import Head from "next/head";
import './../global.scss'

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
