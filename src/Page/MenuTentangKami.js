import React,{Component} from "react";

class MenuTentangKami extends Component{
    constructor(props){
        super(props);
        this.state={
            tentang:"Warung Nusantara adalah restoran Makanan Nusantara , kami ada untuk membuat anda menikmati makanan khas nusantara"
        }
    }


render(){
    return(
        <div>
            <center>
                <p>Tentang Kami</p> {this.state.tentang}
            </center>
        </div>
    );
}

}

export default MenuTentangKami;