export default function Stories() {
    return (
        <div class="stories">
            <Storie />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Storie() {
    const usuarios = ['9gag',
        'meowed',
        'barked',
        'nathanwpylestrangeplanet',
        'wawawicomics', 'respondeai',
        'filomoderna',
        'memeriagourmet'];
    return (usuarios.map(usuario =>
                            <div class="story">
                                <div class="imagem">
                                    <img src={`../../assets/img/${usuario}.svg`} alt="" />
                                </div>
                                <div class="usuario">{usuario}</div>
                            </div>))

}