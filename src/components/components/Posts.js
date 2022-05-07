
export default function Posts() {
    return (
        <div class="posts">
            <Post />
        </div>
    );
}

function Post() {
    const lista = [{ usuario: 'meowed', imagem: 'assets/img/gato-telefone.svg', curtidopor: 'respondeai', curtidas: '101.523' },
    { usuario: 'barked', imagem: 'assets/img/dog.svg', curtidopor: 'adorable_animals', curtidas: '99.159'}]

    return (
        lista.map(item => 
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${item.usuario}.svg`} alt='' />
                    {item.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={item.imagem} alt='' />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${item.curtidopor}.svg`} alt='' />
                    <div class="texto">
                        Curtido por <strong>{item.curtidopor}</strong> e <strong>outras {item.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>)
    );
}