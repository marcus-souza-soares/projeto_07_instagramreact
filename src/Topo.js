
export default function Topo(){
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" alt=''/>
                </div>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" alt=''/>
                </div>
        
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div class="icones">
                    <IonIcons />
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
      </div>);
}

function IonIcons(){
    const itens = ['paper-plane-outline','compass-outline','heart-outline','person-outline'];
    return (itens.map( item => <ion-icon name={item}></ion-icon>));
    
}