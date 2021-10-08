import style from './CardItem.module.css';



function CardItem(props) {
    return (
        <div className={style.card}>
            <h1 className={style.domain}>
                {props.domain}
            </h1>
            <h1 className={style.price}>
                {props.price}
            </h1>
            <p className={style.content}>
                {props.description}
            </p>
            <button
                className={style.btn}>Buy Now</button>
        </div>
    )
}

export default CardItem;