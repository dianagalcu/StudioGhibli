const MenuGhibli = ({ items }) => {
    return (
        <section className="itemsGhibli">
            <ul >
                <li className="historia">{items.item1}</li>
                <li className="obras">{items.item2}</li>
                <li className="enlaces">{items.item3}</li>
                <li className="referencias">{items.item4}</li>
            </ul>
        </section>
    )
}

export default MenuGhibli