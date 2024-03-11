export default function BioData({name, age, email, phone, address, photo}) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>Age: {age}</h2>
            <h2>Email: {email}</h2>
            <h2>Contact: {phone}</h2>
            <h2>Address: {address}</h2>
        </div>
    );
}