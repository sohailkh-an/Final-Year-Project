export default function Photo({photo}) {
    return (
        <div>
            <img src={photo} alt="Avatar" style={{width: "200px"}}/>
        </div>
    );
}