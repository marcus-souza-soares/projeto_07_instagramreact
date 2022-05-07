
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
                    <IonIcon text='paper-plane-outline'/>
                    <IonIcon text='compass-outline' />
                    <IonIcon text='heart-outline' />
                    <IonIcon text='person-outline' />
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
      </div>);
}

function IonIcon(props){
    return (<ion-icon name={props.texto}></ion-icon>);
}