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
                <Header capa={config.capa} />
                <Timeline playlists={config.playlists} />
                <TubersFavoritos favoritos={config.favoritos} />
            </div>
        </>
    )
}


const StyledHeader = styled.div`
    section{
        height: 300px;     
        margin-top: 50px; 
    }
    .foto-perfil {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .foto-capa{
        height: 60%;
        width: 100%;
        object-fit: cover;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header(props) {
    return (
        <StyledHeader>
            {/* <img alt="banner" src="" /> */}
            <section >
                <img src={props.capa} className="foto-capa" alt="foto de capa" />
                <div className="user-info">
                    <img alt="fotinho-do-perfil" className="foto-perfil" src={`https://github.com/${config.github}.png`} />
                    <div>
                        <h2>
                            {config.nome}
                        </h2>
                        <p>
                            {config.job}
                        </p>
                    </div>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);
    //Statement
    //Retorno por expressão (React)
    return (
        <StyledTimeline>{playlistNames.map((playlistName, index) => {
            const videos = props.playlists[playlistName];

            return (
                <section key={index}>
                    <h2>{playlistName}</h2>
                    <div>
                        {videos.map((video, i) => {
                            return (
                                <a key={i} href={video.url}>
                                    <img alt="titulo" src={video.thumb} />
                                    <span>
                                        {video.titulo}
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </section>
            )


        })}</StyledTimeline>
    )
}

const StyledTubers = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 10px;
    padding: 10px 0;
.tubers{
    width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
      grid-auto-flow: column;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
}
.tuber{
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: break-word;
}
p{
    font-size: smaller;
    word-break: break-all;
    text-align: center;
}
img{
    height: 85px;
    width: 85px;
    border-radius: 50%;
}
`
function TubersFavoritos(props) {
    const tubers = props.favoritos.tubers
    console.log(tubers)
    return (
        <StyledTubers>
            <h2>AluraTubers Favoritos</h2>
            <div className="tubers">
                {tubers.map((tuber, index) => {
                    return (
                        <div className="tuber" key={index}>
                            <img src={tuber.thumb} alt="thumbnail" />
                            <p>{tuber.tuber}</p>
                        </div>
                    )
                })}
            </div>
        </StyledTubers>
    )
}

export default HomePage