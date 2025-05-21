import Card from './Card';

const Cards = ({ cards }) => {
    // Regrouper les vins par type
    const groupedByType = cards.reduce((acc, card) => {
        acc[card.type] = acc[card.type] || [];
        acc[card.type].push(card);
        return acc;
    }, {});

    return (
        <>
            <div id="wines">
                {Object.keys(groupedByType).map((type) => (
                    <div key={type} className="wine-section">
                        <h2>{type}</h2> {/* Titre de la section */}
                        <div className="wine-cards">
                            {groupedByType[type].map((card) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    link={card.link}
                                    name={card.name}
                                    year={card.year}
                                    owner={card.owner}
                                    img={card.img}
                                    alt={card.alt}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cards;

