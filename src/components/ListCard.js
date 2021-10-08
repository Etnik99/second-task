import CardItem from "./CardItem";
import style from './ListCard.module.css'

function ListCard(props) {
    return (
        <div className={style.ListCard}>
            {props.lists.map((lists) => (
                < CardItem
                    domain={lists.domain}
                    price={lists.price}
                    description={lists.description}
                />
            ))}
        </div>
    )
}

export default ListCard;