const Card = ( {name, year, owner, link, img, alt}) => {
    return (
        <>
            <a target="_blank" className="wine" href={link}>
                <img src={img} alt={alt} className="wine__img" />
                <div className="wine__infos">
                    <h3 className="wine__name">{name}</h3>
                    <h4 className="wine__yearr">{year}</h4>
                    <p className="wine__owner">{owner}</p>
                </div>
            </a>
        </>
    );
};

export default Card;