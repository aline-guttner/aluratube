import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
}


const StyleHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyleHeader>
            {/* <img alt="banner" src="" /> */}
            <section className="user-info">
                <img alt="fotinho-do-perfil" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyleHeader>
    )
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);
    //Statement
    //Retorno por expressão (React)
    return (
        <StyledTimeline>{playlistNames.map((playlistName, index) => {
            const videos = props.playlists[playlistName];
            console.log(videos);
            return videos.map((video, index) =>
            // (
            //     <a>
            //         <img alt="lalala" src="" />
            //     </a>
            // )
            {
                return (
                    <section key={index}>
                        <h2>{playlistName}</h2>
                        <div>
                            <a href={video.url}>
                                <img alt="titulo" src={video.thumb} />
                                <span>
                                    {video.titulo}
                                </span>
                            </a>
                        </div>
                    </section>
                )
            }
            )
        })}</StyledTimeline>
    )
}


export default HomePage