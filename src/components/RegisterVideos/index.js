import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { supabase } from "../../services/videoService";
import config from "../../../config.json";

function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);

    return {
        values, handleChange: (e) => {
            let thumb = ''
            let value = e.target.value
            const name = e.target.name
            console.log(value)
            console.log(name)
            if (value.slice(0, 3) === 'www') {
                value = `https://${value}`
            }
            if (value.slice(0, 32) === 'https://www.youtube.com/watch?v=') {
                const id = value.slice(value.indexOf("?") + 3)
                thumb = `http://img.youtube.com/vi/${id}/hqdefault.jpg`
            }

            setValues({
                ...values,
                [name]: value,
                thumb: thumb
            })

        },
        clearForm() {
            setValues({})
        }
    }
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "seu título", url: "url do vídeo", thumb: "", playlist: "" }
    });
    const [formVisivel, setFormVisivel] = useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => {
                setFormVisivel(true)
                console.log(formCadastro.values)
            }}>
                +
            </button>
            {formVisivel &&
                <form onSubmit={(e) => {
                    e.preventDefault();

                    supabase.from("video").insert({
                        titulo: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: formCadastro.values.thumb,
                        playlist: formCadastro.values.playlist
                    })
                        .then((res) => {
                            console.log(res)
                        })
                        .catch((err) => console.log(err))

                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input required minLength={1} placeholder="Título do vídeo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} name="titulo" />
                        <input required minLength={38} placeholder="URL" value={formCadastro.values.url} onChange={formCadastro.handleChange} name="url" />
                        {formCadastro.values.thumb && <img src={formCadastro.values.thumb} alt="thumbnail" />}
                        <p>Playlist</p>
                        <select name="playlist" onChange={formCadastro.handleChange}>
                            {Object.keys(config.playlists).map(playlist => {
                                return (
                                    <option value={playlist} key={playlist}>
                                        {playlist}
                                    </option>
                                )
                            })}
                        </select>
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            }
        </StyledRegisterVideo>
    )
}