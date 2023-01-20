import { useParams } from "react-router-dom";

function Member(props) {
    let { houseId } = useParams();
    let { memberId } = useParams();
    // console.log(props.houses)
    const house = props.houses.find(house => house.id === parseInt(houseId));
    const member = house.people.find(member => member.id === parseInt(memberId));
    console.log(house.people)
    return (
        <div className="page">
            <div className="header">
                <h2>Specific Member Name{member.name} </h2>
            </div>
            <div className="desc">
                A description {member.description}
                <a href={`https://awoiaf.westeros.org/index.php/${member.wikiSuffix} `}></a>
            </div>
        </div>
    )
}

export default Member;