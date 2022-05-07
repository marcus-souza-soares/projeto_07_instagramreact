
export default function Sugestoes() {
    const lista = [{ usuario: 'bad.vibes.memes', perfil: 'assets/img/bad.vibes.memes.svg', razao: 'Segue você' },
    { usuario: 'chibirdart', perfil: 'assets/img/chibirdart.svg', razao: 'Segue você' },
    { usuario: 'razoesparaacreditar', perfil: 'assets/img/razoesparaacreditar.svg', razao: 'Novo no Instagram' },
    { usuario: 'adorable_animals', perfil: 'assets/img/adorable_animals.svg', razao: 'Segue você' },
    { usuario: 'smallcutecats', perfil: 'assets/img/smallcutecats.svg', razao: 'Segue você' }];

    return (
        lista.map(item =>
            <div class="sugestao">
                <div class="usuario">
                    <img src={item.perfil} alt='' />
                    <div class="texto">
                        <div class="nome">{item.usuario}</div>
                        <div class="razao">{item.razao}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>)
    );
}