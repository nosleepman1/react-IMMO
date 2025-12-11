import Card from "../components/Cards"
import Carousselle from "../components/Carousselle"
import PRODUITS from '../data/Products.json'




const Accueil = () => {




    return (

        <div>

            <Carousselle/>

                <h1 className="m-3 text-3xl text-bold text-center" >PRODUITS</h1>


            <div className="container m-auto flex flex-wrap justify-center gap-3">
                   {
                    PRODUITS.map((element, i) => (
                        <Card key={i} image={element.image} title={element.title} price={element.price} />
                    ))
                   }
                

            </div>

        </div>
    )

}


export default Accueil