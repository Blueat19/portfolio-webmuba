import React, { useState } from 'react';
import { Card, Button, Image, FormControl } from 'react-bootstrap';
import { FaPlaystation, FaXbox, FaDesktop } from 'react-icons/fa';
import './Cart.css';

export default function Gaming() {
    const [selectedSection, setSelectedSection] = useState('');
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const games = {
        pcGames: [
            {
                title: 'The Witcher 3: Wild Hunt',
                description: 'Explore a vast open world, hunt for monsters and engage in combat in a deep storyline with meaningful choices.',
                image: 'https://picsum.photos/200/300',
                price: 59.99,
            },
            {
                title: 'Cyberpunk 2077',
                description: 'Experience the dark future of a corporate-controlled world, explore the city, and engage in a rich storyline with multiple endings.',
                image: 'https://picsum.photos/200/301',
                price: 69.99,
            },
            {
                title: 'Mass Effect: Andromeda',
                description: 'Explore a new galaxy, discover new worlds, and engage in combat with alien species in a rich storyline with multiple endings.',
                image: 'https://picsum.photos/200/302',
                price: 49.99,
            },
            {
                title: 'Diablo III',
                description: 'Explore a dark fantasy world, fight against demons and collect loot in a hack-and-slash RPG.',
                image: 'https://picsum.photos/200/303',
                price: 39.99,
            },
            {
                title: 'Tom Clancy\'s Ghost Recon: Wildlands',
                description: 'Explore an open world, engage in co-op combat with friends, and take on the Bolivian cartel.',
                image: 'https://picsum.photos/200/304',
                price: 49.99,
            },
            {
                title: 'Middle-earth: Shadow of War',
                description: 'Explore a vast open world, fight against orcs and other enemies, and uncover the secrets of Middle-earth.',
                image: 'https://picsum.photos/200/305',
                price: 59.99,
            },
            {
                title: 'Destiny 2',
                description: 'Explore a vast open world, fight against enemies, and uncover the secrets of the solar system.',
                image: 'https://picsum.photos/200/306',
                price: 49.99,
            },
            {
                title: 'Overwatch',
                description: 'Engage in team-based combat with a variety of heroes, each with unique abilities and playstyles.',
                image: 'https://picsum.photos/200/307',
                price: 39.99,
            },
            {
                title: 'Rainbow Six Siege',
                description: 'Engage in competitive multiplayer combat with a variety of operators, each with unique abilities and playstyles.',
                image: 'https://picsum.photos/200/308',
                price: 39.99,
            },
            {
                title: 'PlayerUnknown\'s Battlegrounds',
                description: 'Engage in battle royale combat with up to 99 other players, scavenge for loot, and fight for survival.',
                image: 'https://picsum.photos/200/309',
                price: 29.99,
            },
            {
                title: 'Fortnite',
                description: 'Engage in battle royale combat with up to 99 other players, scavenge for loot, and fight for survival.',
                image: 'https://picsum.photos/200/310',
                price: 29.99,
            },
            {
                title: 'Call of Duty: Black Ops III',
                description: 'Engage in fast-paced multiplayer combat with a variety of weapons and abilities.',
                image: 'https://picsum.photos/200/311',
                price: 39.99,
            },
            {
                title: 'Call of Duty: WWII',
                description: 'Engage in fast-paced multiplayer combat with a variety of weapons and abilities.',
                image: 'https://picsum.photos/200/312',
                price: 39.99,
            },
        ],
        playstationGames: [
            {
                title: 'The Last of Us Part II',
                description: 'Experience a post-apocalyptic world, survive against infected humans and other survivors, and uncover the secrets of Ellie\'s past.',
                image: 'https://picsum.photos/200/313',
                price: 59.99,
            },
            {
                title: 'God of War',
                description: 'Explore a Norse mythology world, fight against gods and monsters, and uncover the secrets of Kratos\'s past.',
                image: 'https://picsum.photos/200/314',
                price: 49.99,
            },
            {
                title: 'Horizon Zero Dawn',
                description: 'Explore a post-apocalyptic world, hunt machines, and uncover the secrets of Aloy\'s past in a rich storyline with multiple endings.',
                image: 'https://picsum.photos/200/315',
                price: 39.99,
            },
            {
                title: 'Uncharted 4: A Thief\'s End',
                description: 'Explore a variety of locations, fight against enemies, and uncover the secrets of Nathan Drake\'s past.',
                image: 'https://picsum.photos/200/316',
                price: 49.99,
            },
            {
                title: 'The Last Guardian',
                description: 'Explore a variety of locations, solve puzzles, and uncover the secrets of Trico\'s past.',
                image: 'https://picsum.photos/200/317',
                price: 39.99,
            },
            {
                title: 'Bloodborne',
                description: 'Explore a dark fantasy world, fight against monsters, and uncover the secrets of Yharnam.',
                image: 'https://picsum.photos/200/318',
                price: 39.99,
            },
            {
                title: 'Until Dawn',
                description: 'Explore a variety of locations, make choices that affect the story, and uncover the secrets of the Blackwood Mansions.',
                image: 'https://picsum.photos/200/319',
                price: 29.99,
            },
            {
                title: 'Ratchet & Clank',
                description: 'Explore a variety of locations, fight against enemies, and uncover the secrets of Ratchet and Clank\'s past.',
                image: 'https://picsum.photos/200/320',
                price: 39.99,
            },
            {
                title: 'Spider-Man',
                description: 'Explore a variety of locations, fight against enemies, and uncover the secrets of Spider-Man\'s past.',
                image: 'https://picsum.photos/200/321',
                price: 49.99,
            },
            {
                title: 'Gran Turismo Sport',
                description: 'Explore a variety of locations, drive high-performance cars, and participate in racing events.',
                image: 'https://picsum.photos/200/322',
                price: 39.99,
            },
            {
                title: 'Horizon Zero Dawn: The Frozen Wilds',
                description: 'Explore a variety of locations, hunt machines, and uncover the secrets of Aloy\'s past in a rich storyline with multiple endings.',
                image: 'https://picsum.photos/200/323',
                price: 29.99,
            },
            {
                title: 'Uncharted: The Lost Legacy',
                description: 'Explore a variety of locations, fight against enemies, and uncover the secrets of Chloe\'s past.',
                image: 'https://picsum.photos/200/324',
                price: 39.99,
            },
            {
                title: 'Days Gone',
                description: 'Explore a post-apocalyptic world, fight against infected humans and other survivors, and uncover the secrets of Deacon\'s past.',
                image: 'https://picsum.photos/200/325',
                price: 49.99,
            },
        ],
        xboxGames: [
            {
                title: 'Forza Horizon 4',
                description: 'Explore an open world, drive high-performance cars, and customize them to your liking.',
                image: 'https://picsum.photos/200/326',
                price: 59.99,
            },
            {
                title: 'Gears 5',
                description: 'Experience a third-person shooter with a rich storyline, fight against the Swarm, and play co-op with friends.',
                image: 'https://picsum.photos/200/327',
                price: 49.99,
            },
            {
                title: 'Sea of Thieves',
                description: 'Explore an open world, sail the seas, and engage in ship-to-ship combat with other players.',
                image: 'https://picsum.photos/200/328',
                price: 39.99,
            },
            {
                title: 'Halo Infinite',
                description: 'Join Master Chief on an epic campaign to save humanity and explore a vast open-world ring.',
                image: 'https://picsum.photos/200/329',
                price: 59.99,
            },
            {
                title: 'Fable',
                description: 'Enter a fantasy world where your choices define your destiny and the outcome of the story.',
                image: 'https://picsum.photos/200/330',
                price: 49.99,
            },
            {
                title: 'State of Decay 2',
                description: 'Survive in a post-apocalyptic world, build a community, and fend off zombies and hostile humans.',
                image: 'https://picsum.photos/200/331',
                price: 29.99,
            },
            {
                title: 'Ori and the Will of the Wisps',
                description: 'Embark on a visually stunning adventure filled with puzzles, platforming, and emotional storytelling.',
                image: 'https://picsum.photos/200/332',
                price: 29.99,
            },
            {
                title: 'Flight Simulator',
                description: 'Experience the most realistic and immersive flight simulator with real-world weather and live traffic.',
                image: 'https://picsum.photos/200/333',
                price: 59.99,
            },
            {
                title: 'Minecraft',
                description: 'Build and explore limitless worlds, craft tools and items, and survive against mobs in a blocky sandbox world.',
                image: 'https://picsum.photos/200/334',
                price: 19.99,
            },
            {
                title: 'Sunset Overdrive',
                description: 'Roam a vibrant open world, use high-powered weapons, and fight against mutants in a post-apocalyptic city.',
                image: 'https://picsum.photos/200/335',
                price: 39.99,
            },
            {
                title: 'Quantum Break',
                description: 'Manipulate time, solve mind-bending puzzles, and experience a unique blend of TV show and video game.',
                image: 'https://picsum.photos/200/336',
                price: 49.99,
            },
            {
                title: 'Ryse: Son of Rome',
                description: 'Enter the Roman Empire, fight epic battles, and experience a gripping story of revenge and redemption.',
                image: 'https://picsum.photos/200/337',
                price: 39.99,
            },
        ],
    };

    const addToCart = (game) => {
        setCart([...cart, game]);
    };

    const renderGames = (category, games) => {
        const filteredGames = games.filter(game =>
            game.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div>
                <h2>{category}</h2>
                <div className="row">
                    {filteredGames.map(game => (
                        <div className="col-md-4" key={game.title}>
                            <Card>
                                <Image 
                                height={200}
                                src={game.image} />
                                <Card.Body>
                                    <Card.Title>{game.title}</Card.Title>
                                    <Card.Title>${game.price}</Card.Title>
                                    <Card.Text>{game.description}</Card.Text>
                                    <Button variant="primary" onClick={() => addToCart(game)}>Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const sections = Object.keys(games);
    const renderSectionButtons = () => (
        <div className="d-flex align-items-center">
            {sections.map(section => (
                <Button
                    key={section}
                    variant={selectedSection === section ? 'primary' : 'outline-primary'}
                    className="mr-2"
                    onClick={() => setSelectedSection(section)}
                >
                    {section === 'pcGames' && <FaDesktop />}
                    {section === 'playstationGames' && <FaPlaystation />}
                    {section === 'xboxGames' && <FaXbox />}
                </Button>
            ))}
            <FormControl
                type="text"
                placeholder="Search by title"
                className="ml-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );

    const renderSection = () => {
        if (!selectedSection) return null;
        return renderGames(selectedSection, games[selectedSection]);
    };

    return (
        <div className="container">
            {renderSectionButtons()}
            {renderSection()}
        </div>
    );
}

