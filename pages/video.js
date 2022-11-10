import styled from "styled-components";
import Menu from "../src/components/Menu";
import config from "../config.json";

const StyledVideoContainer = styled.div`
    margin-top: 50px;
    padding:24px;
    font-size: smaller;
 
    .video{
        width: 713px;
        padding: 0 10px;
    }
    .owner-actions{
        display: flex;
        justify-content: space-between;
        .owner{
        width: 361.5px;
        height: 55px;
        display: flex;
        align-items: center;
        gap: 10px;
        img{
            border-radius: 50%;
            height: 40px;
            width: 40px;
        }
    }

    .actions{
        display: flex;
        gap: 10px;
    }

    button{
        border: none;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        color: ${({ theme }) => theme.textColorBase};;
        padding: 6px 10px;
        height: 30px;
    }

   .like{
        border-top-left-radius: 9999px;
        border-bottom-left-radius: 9999px;
    }

    .deslike{
        border-left: 1px ${({ theme }) => theme.backgroundLevel1} solid;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    .share, .more{
        border-radius: 9999px;
    }

    .more p{
       margin-top: -10px;
    }
}
`;

export default function Video() {
    return (
        <>
            <Menu />
            <StyledVideoContainer>
                <div className="video">
                    <iframe width="713" height="401" src="https://www.youtube.com/embed/KbM0W69pKtU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="title">
                    <a href="bla">#funnycats</a>
                    <h2>FUNNY CATS COMPILATION 2022</h2>
                </div>
                <div className="owner-actions">
                    <div className="owner">
                        <img src={`https://github.com/${config.github}.png`} alt="nome" />
                        <div>
                            <h3><a href="../">{config.nome}</a></h3>
                            <p>{config.inscritos} inscritos</p>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="like-deslike">
                            <button className="like">👍 398</button>
                            <button className="deslike">👎</button>
                        </div>
                        <button className="share">Compartilhar</button>
                        <button className="more"><p>...</p></button>
                    </div>
                </div>
            </StyledVideoContainer>
        </>


    )
}
