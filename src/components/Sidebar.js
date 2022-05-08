import Sugestoes from "./components/Sugestoes";

export default function Sidebar() {

    function Usuario(props) {
        return (
            <div class="usuario">
                <img src={props.perfil} alt='' />
                <div class="texto">
                    <strong>{props.usuario}</strong>
                    {props.name}
                </div>
            </div>
        )
    }

    return (
        <div class="sidebar">
            <Usuario usuario="catanacomics" name="Catana" perfil="assets/img/catanacomics.svg"/>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestoes />
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}