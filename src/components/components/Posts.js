import React from 'react';


export default function Posts() {
    const lista = [{ usuario: 'meowed', imagem: 'assets/img/gato-telefone.svg', curtidopor: 'respondeai', curtidas: '101.523' },
    { usuario: 'barked', imagem: 'assets/img/dog.svg', curtidopor: 'adorable_animals', curtidas: '99.159' }];

    return (
        <div class="posts">
            {lista.map(item => < Post 
            usuario={item.usuario}
            imagem={item.imagem}
            curtidopor={item.curtidopor}
            curtidas={item.curtidas}
            />)}
        </div>
    );
}

function Post(props) {
    // const lista = [{ usuario: 'meowed', imagem: 'assets/img/gato-telefone.svg', curtidopor: 'respondeai', curtidas: '101.523' },
    // { usuario: 'barked', imagem: 'assets/img/dog.svg', curtidopor: 'adorable_animals', curtidas: '99.159' }];

    const [myclass, setMyClass] = React.useState('');
    const [type, setType] = React.useState('outline');

    function CurtirPost() {
        setMyClass("vermelho");
        setType('sharp');
    }

    function CurtirIonicon() {
        if (myclass === "vermelho") {
            setMyClass("");
            setType('outline');
        } else {
            setMyClass('vermelho');
            setType('sharp');
        }
        console.log(this);
    }

    return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={`assets/img/${props.usuario}.svg`} alt='' />
                        {props.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div>
                    <div class="conteudo">
                        <img src={props.imagem} alt='' onDoubleClick={CurtirPost} />
                    </div>
                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon class={`md hydrated ${myclass}`} name={`heart-${type}`} onClick={CurtirIonicon}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={`assets/img/${props.curtidopor}.svg`} alt='' />
                            <div class="texto">
                                Curtido por <strong>{props.curtidopor}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}