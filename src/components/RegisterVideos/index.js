import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);
    return {
        values, handleChange: (e) => {
            let thumb = ''
            const value = e.target.value
            const name = e.target.name
            console.log(value.slice(0, 32))
            if (value.slice(0, 32) === 'https://www.youtube.com/watch?v=') {
                const id = value.slice(value.indexOf("?") + 3)
                thumb = `http://img.youtube.com/vi/${id}/hqdefault.jpg`
                console.log(thumb)
            } else {
                console.log('nao inclui')
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
        initialValues: { titulo: "seu título", url: "url do vídeo", thumb: "" }
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
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input placeholder="Título do vídeo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} name="titulo" />
                        <input placeholder="URL" value={formCadastro.values.url} onChange={formCadastro.handleChange} name="url" />
                        {formCadastro.values.thumb && <img src={formCadastro.values.thumb} alt="thumbnail" />}
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            }
        </StyledRegisterVideo>
    )
}